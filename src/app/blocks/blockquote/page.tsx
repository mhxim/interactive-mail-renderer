import BlockRender from "../../../components/BlockRender";
import { Blockquote } from "../../../components/blocks/blockquote/blockquote";

export default function Page() {
  const data = {
    type: "doc",
    content: [
      {
        type: "blockquote",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "asdfasdfasdfasdf" }],
          },
        ],
      },
    ],
  };
  
  return <BlockRender node={data}></BlockRender>;
}
