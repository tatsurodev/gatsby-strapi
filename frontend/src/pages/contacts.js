import React from "react"
import Layout from "../components/Layout"
import { Title } from "../components/common"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faEnvelope,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons"

const ContactsPage = () => {
  return (
    <Layout>
      <Title title="Contact Me" />
      <form>
        <div className="form-group">
          <div className="input-group input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text bg-info text-white">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text bg-info text-white">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text bg-info text-white">
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
            <textarea
              className="form-control"
              name="message"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-info btn-block btn-lg">
          Submit
        </button>
      </form>
    </Layout>
  )
}

export default ContactsPage
