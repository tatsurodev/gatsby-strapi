import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Toc } from "../components/blogs"
import "bootswatch/dist/journal/bootstrap.min.css"

const Layout = ({ children, items }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
