import { CSSProperties } from "react";
import { NodeHandler } from "../../BlockRender";

const tableRowStyle = {
  borderBottomWidth: "1px",
  borderBottomColor: "#e5e7eb",
};

export const TableRow = (props) => {
  return <tr style={tableRowStyle}>{props.children}</tr>;
};
