import { CSSProperties } from "react";
import { NodeHandler } from "../../BlockRender";

const tableRowStyle = {
  minWidth: "16px",
  border: "1px solid #d1d5db",
  padding: "3px 5px",
  verticalAlign: "top",
  boxSizing: "border-box",
  position: "relative",
};

export const TableCell = (props) => {
  let children = [];

  props.children.forEach((child) => {
    if (child.props.node.type == "paragraph") {
      child.props.node.attrs ??= {};
      child.props.node.attrs["margin"] = 0;
    }

    children.push(child);
  });

  return <td style={tableRowStyle}>{children}</td>;
};
