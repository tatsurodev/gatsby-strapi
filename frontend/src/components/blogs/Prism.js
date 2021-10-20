import React from 'react'
import styled from 'styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/okaidia'

const Prism = props => {
  // props.children.props以下にcode blockの情報がある
  // ex. className: ```jsxならlanguage-jsxが得られる
  const className = props.children.props.className
  const language = className.split('-')[1]

  return (
    <Highlight
      {...defaultProps}
      // code blockの中身
      code={props.children.props.children.trim()}
      // ```languageで指定した言語の種類
      language={language}
      // 使用するtheme
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <StyledPreWrapper>
            <StyledPre className={className} style={style}>
              <div className="tab">{language}</div>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </StyledPre>
          </StyledPreWrapper>
        )
      }}
    </Highlight>
  )
}

const StyledPreWrapper = styled.div`
  position: relative;
`

const StyledPre = styled.pre`
  background: #1e1e1e;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  font-size: 0.9rem;
  overflow-x: scroll;
  .token-line {
    line-height: 1.5;
  }

  .tab {
    position: absolute;
    top: 0;
    right: 0;
    color: rgb(156, 220, 254);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.5rem;
    border-radius: 10px;
    opacity: 0.8;
  }
`

export { Prism }
