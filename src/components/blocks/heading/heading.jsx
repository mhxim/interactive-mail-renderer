import { NodeHandler } from "../../BlockRender";

const heading1 = {
  color: "#111827",
  fontWeight: 600,
  fontSize: `${Math.floor(16 * 2.25)}px`,
  margin: `0 0 ${Math.floor(16 * 0.65)}px 0`,
  lineHeight: 1.1111111,
};

const heading2 = {
  color: "#111827",
  fontWeight: 600,
  fontSize: `${Math.floor(16 * 1.5)}px`,
  margin: `0 0 ${Math.floor(16 * 0.5)}px 0`,
  lineHeight: 1.3333333,
};

const heading3 = {
  color: "#111827",
  fontWeight: 600,
  fontSize: `${Math.floor(16 * 1.25)}px`,
  margin: `0 0 ${Math.floor(16 * 0.35)}px 0`,
  lineHeight: 1.6,
};

export const Heading = (props) => {
  let attrs = props.node.attrs;
  
  if (attrs?.level == "1") {
    return <h1 style={heading1}>{props.children}</h1>;
  } else if (attrs?.level == "2") {
    return <h2 style={heading2}>{props.children}</h2>;
  } else if (attrs?.level == "3") {
    return <h3 style={heading3}>{props.children}</h3>;
  }

  return <h1 style={heading1}>{props.children}</h1>;
};
