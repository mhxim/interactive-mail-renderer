import { NodeHandler } from "../../BlockRender"

const orderedListStyle = {
  listStyleType: "decimal",
  margin: `0 0 ${Math.floor(16 * 0.5)}px 0`,
  paddingLeft: `${Math.floor(16 * 1.625)}px`,
  color: "#6b7280"
}

export const OrderedList = (props) => {
  return <ol style={orderedListStyle}>{props.children}</ol>
}