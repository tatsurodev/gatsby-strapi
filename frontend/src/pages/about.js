import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Layout from "../components/Layout"
import { ProgressBar } from "../components/common"

function About({ data }) {
  const {
    strapiAbout: { title, content, updated_at },
    allStrapiSkills: { nodes: skills },
  } = data

  return (
    <Layout>
      <h1 className="pt-3">{title}</h1>
      <hr />
      <div>{content}</div>
      <h1 className="pt-3">Skills</h1>
      <hr />
      <Row>
        {skills.map(({ description, progress, tag: { name }, type }, index) => {
          return (
            <Col md={6} key={index}>
              <div className="d-flex align-items-center">
                <h3>{name}</h3>
                <span className="pl-2">{description}</span>
              </div>
              <ProgressBar progress={progress} />
            </Col>
          )
        })}
        <Col className="pt-3 text-right">Updated At {updated_at}</Col>
      </Row>
    </Layout>
  )
}
export const query = graphql`
  {
    strapiAbout {
      title
      content
      updated_at(formatString: "YYYY, MM")
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
