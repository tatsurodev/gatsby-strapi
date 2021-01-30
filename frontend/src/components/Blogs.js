import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { Title, Article, TypeButtons } from "./common"

const Blogs = ({ blogs: blogsProp, title }) => {
  const [blogs, setBlogs] = useState(blogsProp)
  const setBackToAll = () => {
    setBlogs(blogsProp)
  }
  const { pathname } = useLocation()

  return (
    <StyledPortfolios>
      <div className="heading">
        <Title title={title} />
        {pathname === "/" && (
          <div className="text-center mt-3">
            <Link to="/blogs" className="btn btn-outline-light">
              Check Other Blogs
            </Link>
          </div>
        )}
        {pathname === "/blogs" && (
          <TypeButtons
            instances={blogsProp}
            setInstances={setBlogs}
            setBackToAll={setBackToAll}
          />
        )}
      </div>
      <div className="blogs container">
        <div className="row">
          {blogs.map(blog => {
            return <Article key={blog.id} article={blog} prefix="blogs" />
          })}
        </div>
      </div>
    </StyledPortfolios>
  )
}

const StyledPortfolios = styled.div`
  padding: 1rem 0;
  position: relative;
  background: var(--info);
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 30% 35% 35%;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 30%;
    right: 0;
    bottom: 0;
    background: white;
  }

  .heading {
    color: white;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translateY(-50%) translateX(-50%);

    a {
      font-size: 1.5vw;
    }
  }

  .blogs {
    grid-row: 1/3;
    grid-column: 2/4;
  }
`

export default Blogs
