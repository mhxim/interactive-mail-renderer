import { Text } from "@react-email/text";
import { TextRender } from "../../../components/blocks/text/text";
import BlockRender from "../../../components/BlockRender";

export default function Page() {
  const data = {
    type: "doc",
    content: [
      {
        type: "formSelect",
        attrs: {
          controlId: "asdasdasd",
          options: [
            "Account",
            "Billing",
            "Technical",
            "Report Abuse",
            "Contact sales",
          ],
          question: "What type of question do you have?",
          settings: {
            autoTag: true,
          },
        },
      },
    ],
  };

  return <BlockRender node={data}></BlockRender>;
}
