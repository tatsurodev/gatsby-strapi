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
  // 外部componentなので例外的にclassでstyling
  .breadcrumb {
    &__list {
      display: flex;
      justify-content: flex-start;
      color: ${({ theme }) => theme.links};

      &__item {
        margin-right: 0.4rem;
        text-transform: capitalize;

        &:not(:first-child) {
          margin-left: 0.4rem;
        }
      }
    }

    &__link:hover {
      opacity: 0.8;
    }

    &__separator {
      color: ${({ theme }) => theme.text};
    }
  }
`

export { Breadcrumb }
