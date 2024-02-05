import { Text } from "@react-email/text";
import { TextRender } from "../../../components/blocks/text/text";
import BlockRender from "../../../components/BlockRender";

export default function Page() {
  const data = {
    type: "doc",
    content: [
      {
        type: "text",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nulla sed sem commodo condimentum at at nisl. Vestibulum condimentum sapien ut augue tristique gravida. Duis id nulla et ex aliquam venenatis eget sit amet justo. Proin tincidunt purus sed turpis eleifend euismod. Pellentesque laoreet laoreet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate, eros a porttitor pretium, leo tortor semper neque, in commodo dui sem a massa.",
      },
    ],
  };

  return <BlockRender node={data}></BlockRender>;
}
