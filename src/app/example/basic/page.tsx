import BlockRender from "../../../components/BlockRender";
import { Blockquote } from "../../../components/blocks/blockquote/blockquote";

export default function Page() {
  const data = {
    type: "doc",
    content: [
      { type: "dBlock", content: [{ type: "paragraph", content: [] }] },
      { type: "dBlock", content: [{ type: "paragraph", content: [] }] },
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
                    type: "tableHeader",
                    attrs: { colspan: 1, rowspan: 1 },
                    content: [
                      {
                        type: "paragraph",
                        content: [{ type: "text", text: "asdf" }],
                      },
                    ],
                  },
                  {
                    type: "tableHeader",
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
      {
        type: "dBlock",
        content: [
          {
            type: "codeBlock",
            attrs: { language: "auto" },
            content: [{ type: "text", text: "sdfgsdfg" }],
          },
        ],
      },
      {
        type: "dBlock",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "asdfasdfasdf",
                marks: [{ type: "code", attrs: {} }],
              },
            ],
          },
        ],
      },
      {
        type: "dBlock",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "asdfasdf",
                marks: [{ type: "code", attrs: {} }],
              },
            ],
          },
        ],
      },
      {
        type: "dBlock",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "asdf" }] },
        ],
      },
      {
        type: "dBlock",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "afasdf" }],
          },
        ],
      },
      {
        type: "dBlock",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "/co" }] },
        ],
      },
      {
        type: "dBlock",
        content: [
          { type: "paragraph", content: [{ type: "text", text: "bl" }] },
        ],
      },
      {
        type: "dBlock",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "asdfasdf",
                marks: [{ type: "bold", attrs: {} }],
              },
            ],
          },
        ],
      },
      {
        type: "dBlock",
        content: [
          {
            type: "blockquote",
            content: [
              {
                type: "paragraph",
                content: [{ type: "text", text: "asdfasdfa" }],
              },
              { type: "paragraph", content: [{ type: "text", text: " asdf" }] },
            ],
          },
        ],
      },
      {
        type: "dBlock",
        content: [
          {
            type: "heading",
            attrs: { level: 1 },
            content: [{ type: "text", text: "h1" }],
          },
        ],
      },
      {
        type: "dBlock",
        content: [
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "h2" }],
          },
        ],
      },
      {
        type: "dBlock",
        content: [
          {
            type: "heading",
            attrs: { level: 3 },
            content: [{ type: "text", text: "h3" }],
          },
        ],
      },
      {
        type: "dBlock",
        content: [
          {
            type: "orderedList",
            attrs: { start: 1 },
            content: [
              {
                type: "listItem",
                content: [
                  {
                    type: "paragraph",
                    content: [{ type: "text", text: "one" }],
                  },
                ],
              },
              {
                type: "listItem",
                content: [
                  {
                    type: "paragraph",
                    content: [{ type: "text", text: "two" }],
                  },
                  {
                    type: "orderedList",
                    attrs: { start: 1 },
                    content: [
                      {
                        type: "listItem",
                        content: [
                          {
                            type: "paragraph",
                            content: [{ type: "text", text: "asd" }],
                          },
                        ],
                      },
                      {
                        type: "listItem",
                        content: [
                          {
                            type: "paragraph",
                            content: [{ type: "text", text: "a" }],
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
      },
      {
        type: "dBlock",
        content: [
          {
            type: "bulletList",
            content: [
              {
                type: "listItem",
                content: [
                  {
                    type: "paragraph",
                    content: [{ type: "text", text: "bullet 1" }],
                  },
                ],
              },
              {
                type: "listItem",
                content: [
                  {
                    type: "paragraph",
                    content: [{ type: "text", text: "bullet 2" }],
                  },
                  {
                    type: "bulletList",
                    content: [
                      {
                        type: "listItem",
                        content: [
                          {
                            type: "paragraph",
                            content: [{ type: "text", text: "bullet a" }],
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
      },
      {
        type: "dBlock",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "strike",
                marks: [{ type: "strike", attrs: {} }],
              },
            ],
          },
        ],
      },
      { type: "dBlock", content: [{ type: "paragraph", content: [] }] },
    ],
  };

  return <BlockRender node={data}></BlockRender>;
}
