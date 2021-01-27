import React, { useState } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import Review from "./Review"
import { Title, TypeButtons } from "./common"

const Reviews = ({ reviews: reviewsProp, title }) => {
  const [reviews, setReviews] = useState(reviewsProp)
  const setBackToAll = () => {
    setReviews(reviewsProp)
  }
  const { pathname } = useLocation()

  return (
    <section>
      <Title title={title} />
      {pathname === "/reviews" && (
        <TypeButtons
          instances={reviewsProp}
          setInstances={setReviews}
          setBackToAll={setBackToAll}
        />
      )}
      <div className="row">
        {reviews.map((review, index) => {
          return <Review key={review.id} index={index} {...review} />
        })}
      </div>
      {pathname === "/" && (
        <div className="text-center mt-3">
          <Link to="/reviews" className="btn btn-info">
            Check Other Reviews
          </Link>
        </div>
      )}
    </section>
  )
}

export default Reviews
