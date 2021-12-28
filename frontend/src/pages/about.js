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
    skillsJSX.push(
      <h3 className="heading" key={key}>
        {key}
      </h3>
    )
    skillsByTypes[key].forEach(skill => {
      skillsJSX.push(
        <div className="col-md-6 skill" key={skill.tag.name}>
          <div className="skill-name">
            <h4>{skill.tag.name}</h4>
            <span>{skill.description}</span>
          </div>
          <ProgressBar progress={skill.progress} />
        </div>
      )
    })
  }

  return (
    <StyledAboutPage className="container">
      <Title title="About" pageContext={pageContext} />
      <div>
        <SubTitle title={title} />
        <div className="content">{content}</div>
      </div>
      <div>
        <SubTitle title="Skills" />
        <div className="row skills">{skillsJSX}</div>
        <div className="row">
          <div className="col">
            <div className="date">Updated At {updated_at}</div>
          </div>
        </div>
      </div>
    </StyledAboutPage>
  )
}

// styled(component)でcomponentを拡張
const StyledAboutPage = styled.div`
  padding: 2rem;

  .content {
    padding: 1rem;
  }

  .heading {
    padding: 0.5rem;
    color: var(--bs-white);
    background: var(--bs-primary);
    border-radius: 10px;
    text-align: center;
  }

  .skills {
    padding: 1rem;

    h3:not(:first-child) {
      margin-top: 2rem;
    }

    .skill {
      margin: 1rem 0;
    }
  }

  .skill-name {
    display: flex;
    align-items: center;
    margin: 1rem 0;

    span {
      font-size: 0.8rem;
      margin: 0 1rem;
    }
  }

  .date {
    float: right;
    margin-top: 1rem;
    font-size: 0.8rem;
  }
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
