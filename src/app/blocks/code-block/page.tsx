import BlockRender from "../../../components/BlockRender";
import { Blockquote } from "../../../components/blocks/blockquote/blockquote";

export default function Page() {
  const data = {
    type: "doc",
    content: [
      {
        type: "codeBlock",
        attrs: { language: "auto" },
        content: [{ type: "text", text: "sdfgsdfg" }],
      },
    ],
  };
  return <BlockRender node={data}></BlockRender>;
}
