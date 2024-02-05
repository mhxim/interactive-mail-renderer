import { NodeHandler } from "../../BlockRender"

const listItemStyle = {
  paddingLeft: `${Math.floor(16 * 0.375)}px`,
  marginLeft: 0, // OVERRIDE GMAIL CLASS
  fontSize: "16px"
}

export const ListItem = (props) => {
  return <li style={listItemStyle}>{props.children}</li>
}