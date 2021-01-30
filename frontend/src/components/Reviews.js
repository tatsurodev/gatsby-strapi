import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { Title, Article, TypeButtons } from "./common"

const Reviews = ({ reviews: reviewsProp, title }) => {
  const [reviews, setReviews] = useState(reviewsProp)
  const setBackToAll = () => {
    setReviews(reviewsProp)
  }
  const { pathname } = useLocation()

  return (
    <StyledReview>
      <div className="heading">
        <Title title={title} />
        {pathname === "/" && (
          <div className="text-center mt-3">
            <Link to="/reviews" className="btn btn-info">
              Check Other Reviews
            </Link>
          </div>
        )}
        {pathname === "/reviews" && (
          <TypeButtons
            instances={reviewsProp}
            setInstances={setReviews}
            setBackToAll={setBackToAll}
          />
        )}
      </div>
      <div className="reviews container">
        <div className="row">
          {reviews.map(review => {
            return <Article key={review.id} article={review} prefix="reviews" />
          })}
        </div>
      </div>
    </StyledReview>
  )
}

const StyledReview = styled.div`
  padding: 1rem 0;
  position: relative;
  background: white;
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
    background: var(--info);
  }

  .heading {
    color: var(--gray);
    text-align: center;
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translateY(-50%) translateX(-50%);

    a {
      font-size: 1.5vw;
    }
  }

  .reviews {
    grid-row: 1/3;
    grid-column: 2/4;
  }
`

export default Reviews
