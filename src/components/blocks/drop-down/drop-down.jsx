import React from "react";
import { Text } from "@react-email/text";
import { NodeHandler, NodeProps } from "../../BlockRender";

export const questionStyle = {
  display: "block",
  margin: "0 0 8px 0",
  color: "#0d0d12",
  fontWeight: 600,
  fontSize: `16px`,
  lineHeight: 1.5,
};

export const DropDown = (props) => {
  // console.log(props)
  let question = props.node.attrs.question;
  let options = props.node.attrs.options;
  let id = props.node.attrs.questionId;

  return (
    <>
      <label for={id} style={questionStyle}>
        {question}
      </label>
      <div style={{ border: "1px solid #ECEFF3", borderRadius: "4px", margin: "0 0 8px" }}>
        <select
          id={id}
          name={id}
          style={{
            position: "relative",
            fontSize: "16px",
            padding: "8px 12px",
            color: "#0D0D12",
            border: 0,
            outline: "none",
            borderRight: "12px solid transparent",
            width: "100%"
          }}
          required=""
        >
          <option
            value=""
            disabled
            selected
            style={{ color: "#36394A", fontSize: "16px" }}
          >
            Select...
          </option>
          {options.map((opt, i) => {
            return (
              <option
                key={i}
                value={opt.value}
                style={{ color: "#36394A", fontSize: "16px" }}
              >
                {opt.value}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
