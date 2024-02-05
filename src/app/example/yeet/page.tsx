import BlockRender from "../../../components/BlockRender";

export default function Page() {
  const data = {
    type: "doc",
    content: [
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
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "afasdf" }],
          },
        ],
      },
      {
        type: "dBlock",
        content: [
          {
            type: "heading",
            attrs: { level: 3 },
            content: [{ type: "text", text: "afasdf" }],
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
      {
        type: "dBlock",
        content: [
          {
            type: "dropDown",
            attrs: {
              questionId: "dropd_1231231",
              question: "Wtfasdasdasd",
              options: [
                { value: "Option 1", tags: [] },
                { value: "Option 2", tags: [] },
              ],
              settings: { applyTags: true },
            },
          },
        ],
      },
      {
        type: "dBlock",
        content: [
          {
            type: "dropDown",
            attrs: {
              questionId: "dropd_1231231",
              question: "Wtfasdasdasd",
              options: [
                { value: "Option 1", tags: [] },
                { value: "Option 2", tags: [] },
              ],
              settings: { applyTags: true },
            },
          },
        ],
      },
    ],
  };

  return <BlockRender node={data}></BlockRender>;
}
