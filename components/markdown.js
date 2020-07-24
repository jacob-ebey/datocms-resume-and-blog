import ReactMarkdown from 'react-markdown'

import CodeBlock from './code-block'

export default function Markdown({ markdown }) {
  return (
    <ReactMarkdown 
      source={markdown}
      renderers={{
        code: CodeBlock
      }}
    />
  )
}
