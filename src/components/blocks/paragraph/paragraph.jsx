import { NodeHandler } from "../../BlockRender";
import { Text } from "@react-email/text";

export const Paragraph = (props) => {
  // dynamically process text marks
  let style = {
    margin: 0,
    minHeight: "16px",
    fontSize: "16px"
  };

  if (!!props.node.attrs) {
    const attrs = props.node.attrs;

    if (attrs.textAlign) {
      style.textAlign = attrs.textAlign;
    }
    if (attrs.display) {
      style.display = attrs.display;
    }
    if (attrs.margin != null) {
      style.margin = attrs.margin;
    }
  }

  style.color = "#374151";

  let hasCodeMark = false;

  props.children.forEach(child => {
    if (child.props.node.marks && child.props.node.marks.findIndex((m) => m.type == "code") != -1) {
      hasCodeMark = true;
    }
  })

  if (hasCodeMark) {
    return <div style={style}>{props.children}</div>
  }

  return <p style={style}>{props.children}</p>;
};
