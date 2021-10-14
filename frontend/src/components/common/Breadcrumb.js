import React from 'react'
import { Breadcrumb as Bread } from 'gatsby-plugin-breadcrumb'
import styled from 'styled-components'

const Breadcrumb = ({ pageContext, crumbLabel }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <StyledBreadCrumb>
      <Bread crumbs={crumbs} crumbSeparator=" / " crumbLabel={crumbLabel} />
    </StyledBreadCrumb>
  )
}

const StyledBreadCrumb = styled.div`
  .breadcrumb {
    background: var(--bs-white);
    border-radius: 10px;
    .breadcrumb__list {
      display: flex;
      justify-content: flex-start;
      .breadcrumb__list__item:not(:first-child) {
        margin-left: 0.4rem;
      }
      .breadcrumb__list__item {
        margin-right: 0.4rem;
        text-transform: capitalize;
      }
      .breadcrumb__link:hover {
        opacity: 0.8;
      }
    }
  }

  a {
    color: var(--bs-gray);
  }
`

export { Breadcrumb }
