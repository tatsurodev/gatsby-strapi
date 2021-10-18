import React from 'react'
import styled from 'styled-components'
import { FaStar, FaRegStar } from 'react-icons/fa'

const Rating = ({ children, className, rating, reviewTitle }) => {
  return (
    <StyledRating className={className}>
      <h3 className="heading">{`レビュー星${rating}つ`}</h3>
      {children}
      <div className="stars">
        {rating >= 1 ? <FaStar /> : <FaRegStar />}
        {rating >= 2 ? <FaStar /> : <FaRegStar />}
        {rating >= 3 ? <FaStar /> : <FaRegStar />}
        {rating >= 4 ? <FaStar /> : <FaRegStar />}
        {rating >= 5 ? <FaStar /> : <FaRegStar />}
      </div>
      <h3 className="heading">{reviewTitle}</h3>
    </StyledRating>
  )
}

const StyledRating = styled.div`
  .heading {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    padding: 0.5rem;
    color: var(--bs-white);
    background: var(--bs-primary);
    border-radius: 10px;
  }

  .stars {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    font-size: 1.5rem;
    color: var(--bs-warning);
  }
`

export { Rating }
