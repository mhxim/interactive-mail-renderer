import { NodeHandler } from "../../BlockRender";
import { HardBreak } from "../hard-break/hard-break";

const blockQuoteWrapper = {
  borderLeftWidth: "4px",
  borderLeftColor: "#e5e7eb",
  borderLeftStyle: "solid",
  paddingLeft: "16px",
};

const blockQuoteStyle = {
  fontWeight: 600,
  fontStyle: "italic",
  color: "#111827",
  margin: 0,
  borderLeft: 0
};

const tableWrapper = {
  margin: "0 0 20px 0",
};

export const Blockquote = (props) => {
  let children = [];

  props.children.forEach((child, i) => {
    if (
      (child.props.node.type == "paragraph" && i == 0) ||
      i == props.children.length - 1
    ) {
      child.props.node.attrs ??= {};
      child.props.node.attrs["display"] = "inline";
    }
    children.push(child);

    if (i == 0 && props.children.length == 2) {
      children.push(<HardBreak key={"hard-break-blockquote-" + child.key}/>);
    }
  });

  return (
    <table style={tableWrapper}>
      <tbody>
        <tr>
          <td style={blockQuoteWrapper}>
            <blockquote style={blockQuoteStyle}>
              {"“"}
              {children}
              {"”"}
            </blockquote>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
