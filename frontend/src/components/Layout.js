import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "bootswatch/dist/journal/bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-3">left column</div>
        <div className="col-md-6">
          <main>{children}</main>
        </div>
        <div className="col-md-3">right column</div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
