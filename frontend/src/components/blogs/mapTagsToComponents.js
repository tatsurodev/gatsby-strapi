// MDXProvider, ReactMarkdownで特定のtagをcomponentに変換するためのmapping object
import { H1, H2, H3, List, Code, Notice, Prism } from '.'

const mapTagsToComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  li: List,
  inlineCode: Code,
  section: Notice,
  pre: Prism,
}

export { mapTagsToComponents }
