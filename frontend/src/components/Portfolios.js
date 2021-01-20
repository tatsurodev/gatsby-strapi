import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import Portfolio from "./Portfolio"
import { Title } from "./common"

const Portfolios = ({ portfolios, title }) => {
  const { pathname } = useLocation()

  return (
    <section>
      <Title title={title} />
      <div className="row">
        {portfolios.map((portfolio, index) => {
          return <Portfolio key={portfolio.id} index={index} {...portfolio} />
        })}
      </div>
      {pathname === "/" && (
        <div className="text-center mt-3">
          <Link to="/portfolios" className="btn btn-info">
            Check Other Portfolios
          </Link>
        </div>
      )}
    </section>
  )
}

export default Portfolios
