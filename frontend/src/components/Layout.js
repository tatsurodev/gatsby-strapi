import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Toc } from "../components/blogs"
import "bootswatch/dist/journal/bootstrap.min.css"

const Layout = ({ children, items }) => {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-3">left column</div>
        <div className="col-md-6">
          <main>{children}</main>
        </div>
        <div className="col-md-3">{items && <Toc items={items} />}</div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
