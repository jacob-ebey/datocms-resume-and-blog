import Highlight from 'react-highlight';

export default function CodeBlock({ value }) {
  return (
    <div>
      <Highlight>
        {value}
      </Highlight>
    </div>
  )
}
