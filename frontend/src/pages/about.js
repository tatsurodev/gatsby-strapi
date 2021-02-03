import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import { Title, ProgressBar } from "../components/common"

function About({ data }) {
  const {
    strapiAbout: { title, content, updated_at },
    allStrapiSkills: { nodes: skills },
  } = data

  return (
    <Layout>
      <StyledAboutPage className="container">
        <Title title={title} />
        <div>{content}</div>
        <Title className="title" title="Skills" />
        <div className="row">
          {skills.map(
            ({ description, progress, tag: { name }, type }, index) => {
              return (
                <div className="col-md-6" key={index}>
                  <div className="skill-name">
                    <h3>{name}</h3>
                    <span>{description}</span>
                  </div>
                  <ProgressBar progress={progress} />
                </div>
              )
            }
          )}
          {/* <div className="date">Updated At {updated_at}</div> */}
        </div>
      </StyledAboutPage>
    </Layout>
  )
}

const StyledAboutPage = styled.div`
  padding: 2rem;

  .title {
    margin: 2rem 0;
  }

  .skill-name {
    display: flex;
    align-items: center;

    span {
      margin: 0 1rem;
    }
  }

  .date {
    float: right;
  }
`

export const query = graphql`
  {
    strapiAbout {
      title
      content
      updated_at(formatString: "MMMM, YYYY")
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

export default About
