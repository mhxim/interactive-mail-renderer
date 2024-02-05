import { CSSProperties } from "react";
import { NodeHandler } from "../../BlockRender";

const tableStyle = {
  borderCollapse: "collapse",
  tableLayout: "fixed",
  width: "100%",
  overflowX: "hidden",
  textAlign: "left",
  margin: "4px 0 20px 0",
  fontSize: `${Math.floor(16 * 0.875)}px`,
  lineHeight: 1.7142857,
};

export const Table = (props) => {
  return (
    <table style={tableStyle}>
      <thead></thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};
