import React, { useState } from "react"
import styled from "styled-components"

const TypeButtons = ({ instances, setInstances, setBackToAll }) => {
  const [index, setIndex] = useState(0)
  let filters = []
  let duplicatedFilters = []

  instances.map(instance => {
    // type propがあればinstancesとしてfilters用の配列作成
    if (instance.type) {
      duplicatedFilters.push(instance.type)
    }
    //   // frontmatter propがあればblogsとしてfilters用の配列作成
    if (instance.frontmatter && instance.frontmatter.tags) {
      instance.frontmatter.tags.map(tag => duplicatedFilters.push(tag))
    }
  })
  // 重複排除
  filters = ["all", ...new Set(duplicatedFilters)]

  const showInstances = (filter, filterIndex) => {
    setIndex(filterIndex)
    if (filter === "all") {
      setBackToAll()
    } else {
      const tempInstances = instances.filter(instance => {
        if (instance.type) {
          return instance.type === filter
        }
        if (instance.frontmatter && instance.frontmatter.tags) {
          return instance.frontmatter.tags.includes(filter)
        }
      })
      setInstances(tempInstances)
    }
  }

  return (
    <Wrapper>
      {filters.map((filter, filterIndex) => {
        return (
          <button
            key={filterIndex}
            className={index === filterIndex ? "active" : undefined}
            onClick={() => showInstances(filter, filterIndex)}
          >
            {filter}
          </button>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  margin-bottom: 0;
  justify-content: center;
  flex-wrap: wrap;
  button {
    margin: 0.5rem;
    text-transform: capitalize;
    background: transparent;
    border: transparent;
    color: var(--clr-grey-6);
    letter-spacing: var(--spacing);
    font-size: 1rem;
    padding: 0.25rem;
    cursor: pointer;
    outline: none;
    transition: var(--transition);
  }
  button:hover,
  button.active {
    box-shadow: 0px 1.5px 0 var(--clr-grey-6);
  }
`
export { TypeButtons }
