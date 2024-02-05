import { NodeHandler } from "../../BlockRender"

const bulletListStyle = {
  listStyleType: "disc",
  margin: "0 0 8px 0",
  paddingLeft: `${Math.floor(16 * 1.625)}px`,
  color: "#d1d5db"
}

export const BulletList = (props) => {
  return <ul style={bulletListStyle}>{props.children}</ul>
}