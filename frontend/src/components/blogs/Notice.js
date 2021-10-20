import React from "react"
import styled from "styled-components"
import { FiInfo } from "react-icons/fi"
import { TiWarningOutline } from "react-icons/ti"
import { FaHome } from "react-icons/fa"

const Notice = ({ children, info, warning, danger }) => {
  if (warning) {
    return (
      <StyledNotice>
        <div className="container warning">
          <TiWarningOutline className="icon" />
          {children}
        </div>
      </StyledNotice>
    )
  } else if (info) {
    return (
      <StyledNotice>
        <div className="container info">
          <FaHome className="icon" />
          <FiInfo className="icon" />
          {children}
        </div>
      </StyledNotice>
    )
  } else {
    return (
      <StyledNotice>
        <div className="container default">{children}</div>
      </StyledNotice>
    )
  }
}
const StyledNotice = styled.div`
  .container {
    padding: 2rem 1.5rem;
    background: var(--grey-10);
    border-radius: var(--radius-m);
    color: var(--grey-1);
    border-left: 3px solid var(--grey-5);
    position: relative;
    margin: 2rem 0;
  }

  .icon {
    position: absolute;
    top: 0;
    left: -3px;
    background: var(--white);
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 6px solid var(--white);
  }

  .info {
    background: var(--primary-10);
    color: var(--primary-1);
    border-color: var(--primary-5);
    .icon {
      color: var(--primary-5);
    }
  }

  .warning {
    background: #fffaeb;
    color: #513c06;
    border-color: #f7d070;
    .icon {
      color: #f7d070;
    }
  }
`
export { Notice }
