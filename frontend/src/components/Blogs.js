import React, { useState } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import Blog from "./Blog"
import { Title, TypeButtons } from "./common"

const Blogs = ({ blogs: blogsProp, title }) => {
  const [blogs, setBlogs] = useState(blogsProp)
  const setBackToAll = () => {
    setBlogs(blogsProp)
  }
  const { pathname } = useLocation()

  return (
    <section>
      <Title title={title} />
      {pathname === "/blogs" && (
        <TypeButtons
          instances={blogsProp}
          setInstances={setBlogs}
          setBackToAll={setBackToAll}
        />
      )}
      <div className="row">
        {blogs.map((blog, index) => {
          return <Blog key={blog.id} index={index} {...blog} />
        })}
      </div>
      {pathname === "/" && (
        <div className="text-center mt-3">
          <Link to="/blogs" className="btn btn-info">
            Check Other Blogs
          </Link>
        </div>
      )}
    </section>
  )
}

export default Blogs
