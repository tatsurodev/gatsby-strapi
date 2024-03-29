import React from 'react'
import { graphql } from 'gatsby'
import { Title, SubTitle, ProgressBar } from '../components/common'
import styled from 'styled-components'

const AboutPage = ({ data, pageContext }) => {
  const {
    strapiAbout: { title, content, updated_at },
    allStrapiSkills: { nodes: skills },
  } = data

  let skillsByTypes = {}
  skills.forEach(skill => {
    if (typeof skillsByTypes[skill.type] === 'undefined') {
      skillsByTypes[skill.type] = [skill]
    } else {
      skillsByTypes[skill.type] = [...skillsByTypes[skill.type], skill]
    }
  })
  let skillsJSX = []
  for (let key in skillsByTypes) {
    skillsJSX.push(<StyledH3 key={key}>{key}</StyledH3>)
    skillsByTypes[key].forEach(skill => {
      skillsJSX.push(
        <div className="col-md-6" key={skill.tag.name}>
          <StyledSkill>
            <StyledSkillName>
              <h4>{skill.tag.name}</h4>
              <span>{skill.description}</span>
            </StyledSkillName>
            <ProgressBar progress={skill.progress} />
          </StyledSkill>
        </div>
      )
    })
  }

  return (
    <StyledAboutPage className="container">
      <Title title="About" pageContext={pageContext} />
      <div>
        <SubTitle title={title} />
        <StyledContent>{content}</StyledContent>
      </div>
      <div>
        <SubTitle title="Skills" />
        <StyledSkills>
          <div className="row">{skillsJSX}</div>
        </StyledSkills>
        <div className="row">
          <div className="col">
            <StyledDate>Updated At {updated_at}</StyledDate>
          </div>
        </div>
      </div>
    </StyledAboutPage>
  )
}

const StyledAboutPage = styled.div`
  padding: 2rem;
`

const StyledH3 = styled.h3`
  padding: 0.5rem;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.primary};
  border-radius: 10px;
  text-align: center;
`

const StyledSkill = styled.div`
  margin: 1rem 0;
`

const StyledSkillName = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  > span {
    font-size: 0.8rem;
    margin: 0 1rem;
  }
`

const StyledSkills = styled.div`
  padding: 1rem;
`

const StyledContent = styled.div`
  padding: 1rem;
`

const StyledDate = styled.div`
  float: right;
  margin-top: 1rem;
  font-size: 0.8rem;
`

export const query = graphql`
  {
    strapiAbout {
      title
      content
      updated_at(formatString: "YYYY-MM-DD")
    }
    allStrapiSkills(sort: { fields: order }) {
      nodes {
        order
        type
        tag {
          name
        }
        progress
        description
      }
    }
  }
`

export default AboutPage
