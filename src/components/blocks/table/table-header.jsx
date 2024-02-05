import { CSSProperties } from "react";
import { NodeHandler } from "../../BlockRender";

const tableHeaderStyle = {
  minWidth: "16px",
  border: "1px solid #d1d5db",
  padding: "3px 5px",
  verticalAlign: "top",
  boxSizing: "border-box",
  position: "relative",
  backgroundColor: "#f1f3f5",
  fontWeight: "bold",
  textAlign: "left"
};

export const TableHeader = (props) => {
  return <th style={tableHeaderStyle}>{props.children}</th>;
};
