import { createGlobalStyle } from 'styled-components'

// このgatsby projectにおけるcssの優先順位
// 各pageのstyled-componentによるcss > createGlobalStyle()内のcss > 各pageでのcss import > wrapePageElement file内でのcss import > layoutでのcss import > createGlobalStyle file内でのcss import
const GlobalStyle = createGlobalStyle``

export default GlobalStyle
