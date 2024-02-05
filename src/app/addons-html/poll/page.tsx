"use client"

import { Text } from "@react-email/text";
import { FormType } from "../../../model/model";
import { renderToStaticMarkup } from "react-dom/server";
import { convert } from "html-to-text";

export default function Page() {
  const data = {
    id: null,
    type: FormType.Poll,
    items: [
      {
        id: "asdasd",
        title: "When will projectx launch?",
        questionItem: {
          question: {
            choiceQuestion: {
              options: [
                { id: "1", value: "Soon" },
                { id: "2", value: "In 1 Month" },
              ],
            },
          },
        },
        index: 0,
      },
    ],
    version: 1,
  };

  return (
    <div>
      {/* <PollHtml
        form={data}
        accessToken={""}
        creatorEmail="maxim@projectx.email"
      ></PollHtml> */}
    </div>
  );
}
