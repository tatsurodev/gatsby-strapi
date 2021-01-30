import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { Title, Article } from "./common"

const Portfolios = ({ portfolios, title }) => {
  const { pathname } = useLocation()

  return (
    <StyledPortfolios>
      <div className="heading">
        <Title title={title} />
        {pathname === "/" && (
          <div className="text-center mt-3">
            <Link to="/portfolios" className="btn btn-outline-light">
              Check Other Portfolios
            </Link>
          </div>
        )}
      </div>
      <div className="portfolios container">
        <div className="row">
          {portfolios.map(portfolio => {
            return (
              <Article
                key={portfolio.id}
                article={portfolio}
                prefix="portfolios"
              />
            )
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

  .portfolios {
    grid-row: 1/3;
    grid-column: 2/4;
  }
`

export default Portfolios
