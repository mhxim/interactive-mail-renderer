import BlockRender from "../../../components/BlockRender";
import { Blockquote } from "../../../components/blocks/blockquote/blockquote";

export default function Page() {
  const data = {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 1 },
        content: [{ type: "text", text: "Heading 1" }],
      },
      {
        type: "heading",
        attrs: { level: 2 },
        content: [{ type: "text", text: "Heading 2" }],
      },
      {
        type: "heading",
        attrs: { level: 3 },
        content: [{ type: "text", text: "Heading 3" }],
      },
    ],
  };
  return <BlockRender node={data}></BlockRender>;
}
