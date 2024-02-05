import React from "react";
import { Text } from "@react-email/text";
import { NodeHandler, NodeProps } from "../../BlockRender";

export const TextRender = (props) => {
  if (!props.node.text) {
    console.log("missing text", props);
    return <></>;
  }

  const payload = props.node.text;

  // define variable for react style
  let style = {};

  let showCodeTag = false;

  // dynamically process text marks
  props.node.marks &&
    props.node.marks.forEach((mark) => {
      switch (mark.type) {
        case "bold":
          style.fontWeight = 600;
          break;
        case "italic":
          style.fontStyle = "italic";
          break;
        case "underline":
          style.textDecorationLine = "underline";
          break;
        case "textStyle":
          const markAttrs = mark.attrs;
          if (!!markAttrs?.color) {
            style.color = markAttrs.color;
          }
          break;
        case "strike":
          style.textDecorationLine = "line-through";
          break;
        case "code":
          showCodeTag = true;
          style.color = "#616161";
          style.fontSize = `${Math.floor(16 * 0.875)}px`;
          break;
        default:
          console.log("unhandled mark", mark);
      }
    });

  if (showCodeTag) {
    return (
      <table>
        <tbody>
          <tr>
            <td
              style={{
                padding: "0 4px 4px 4px",
                backgroundColor: "rgba(97, 97, 97, 0.1019607843)",
                borderRadius: "4px",
              }}
            >
              <code style={style}>{payload}</code>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return <span style={style}>{payload}</span>;
};
