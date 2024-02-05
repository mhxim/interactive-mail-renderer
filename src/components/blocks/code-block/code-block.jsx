import { CSSProperties } from "react"
import { NodeHandler } from "../../BlockRender"

const preCodeStyle = {
  whiteSpace: "pre-wrap",
  color: "#e5e7eb",
  backgroundColor: "#1f2937",
  overflowX: "auto",
  fontWeight: 400,
  fontSize: `${Math.floor(16 * 0.875)}px`,
  lineHeight: 1.7142857,
  marginBottom: `${Math.floor(16 * 1.7142857)}px`,
  borderRadius: `${Math.floor(16 * 0.375)}px`,
  paddingTop: `${Math.floor(16 * 0.8571429)}px`,
  paddingRight: `${Math.floor(16 * 1.1428571)}px`,
  paddingBottom: `${Math.floor(16 * 0.8571429)}px`,
  paddingLeft: `${Math.floor(16 * 1.1428571)}px`,
}


export const CodeBlock = (props) => {
  return <pre style={preCodeStyle}><code>{props.children}</code></pre>
}