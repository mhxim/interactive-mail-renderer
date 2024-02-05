import BlockRender from "../../../components/BlockRender";
import { Blockquote } from "../../../components/blocks/blockquote/blockquote";

export default function Page() {
  const data = {
    type: "doc",
    content: [
      {
        type: "dBlock",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "asdfasdfasdfasdfasdf",
                marks: [{ type: "code", attrs: {} }],
              },
            ],
          },
        ],
      },
    ],
  };
  return <BlockRender node={data}></BlockRender>;
}
