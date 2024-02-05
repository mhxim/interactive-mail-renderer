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
            type: "table",
            content: [
              {
                type: "tableRow",
                content: [
                  {
                    type: "tableCell",
                    attrs: { colspan: 1, rowspan: 1 },
                    content: [
                      {
                        type: "paragraph",
                        content: [{ type: "text", text: "asdf" }],
                      },
                    ],
                  },
                  {
                    type: "tableCell",
                    attrs: { colspan: 1, rowspan: 1 },
                    content: [
                      {
                        type: "paragraph",
                        content: [{ type: "text", text: "asddd" }],
                      },
                    ],
                  },
                ],
              },
              {
                type: "tableRow",
                content: [
                  {
                    type: "tableCell",
                    attrs: { colspan: 1, rowspan: 1 },
                    content: [
                      {
                        type: "paragraph",
                        content: [{ type: "text", text: "1" }],
                      },
                    ],
                  },
                  {
                    type: "tableCell",
                    attrs: { colspan: 1, rowspan: 1 },
                    content: [
                      {
                        type: "paragraph",
                        content: [{ type: "text", text: "3" }],
                      },
                    ],
                  },
                ],
              },
              {
                type: "tableRow",
                content: [
                  {
                    type: "tableCell",
                    attrs: { colspan: 1, rowspan: 1 },
                    content: [
                      {
                        type: "paragraph",
                        content: [{ type: "text", text: "2" }],
                      },
                    ],
                  },
                  {
                    type: "tableCell",
                    attrs: { colspan: 1, rowspan: 1 },
                    content: [
                      {
                        type: "paragraph",
                        content: [{ type: "text", text: "5" }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  return <BlockRender node={data}></BlockRender>;
}
