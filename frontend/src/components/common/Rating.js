import React from 'react'
import styled from 'styled-components'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { H1 } from '../blogs'

const Rating = ({ children, rating, reviewTitle }) => {
  return (
    <StyledRating>
      <H1 center fontSize="1.2rem">
        {reviewTitle}
      </H1>
      {children}
      <StyledStars>
        {rating >= 1 ? <FaStar /> : <FaRegStar />}
        {rating >= 2 ? <FaStar /> : <FaRegStar />}
        {rating >= 3 ? <FaStar /> : <FaRegStar />}
        {rating >= 4 ? <FaStar /> : <FaRegStar />}
        {rating >= 5 ? <FaStar /> : <FaRegStar />}
      </StyledStars>
    </StyledRating>
  )
}

// styled componentは他のstyled component内で参照できる。H1はreact componentなので参照できない
const StyledRating = styled.div`
  // don't work
  // ${H1} {
  //   text-align: center;
  // }
`

// styled componentの拡張
// const StyledH1 = StyledComponentName.extend``

// react componentの拡張、参照されるreact componentはpropsにclassNameを追加する必要あり
// const StyledH1 = styled(H1)``

const StyledStars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  font-size: 1.5rem;
  color: var(--bs-warning);
`

export { Rating }
