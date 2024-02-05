import Head from "next/head";
import { useAmp } from "next/amp";
import PollAmp, {
  OptionResult,
  Option,
  PollButton,
} from "../../../components/addons/poll/poll.amp";
import { buttonClasses } from "../../../components/addons/poll/poll.html";
import { FormType } from "../../../model/model";
import { PollLayout } from "../../../components/addons/poll/poll.html";

export const config = {
  amp: true,
};

export default function IndexPage() {
  const data = {
    id: null,
    type: FormType.Poll,
    items: [
      {
        id: "asdasd",
        title: "When will Project X launch?",
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
      <Head>{<style>{buttonClasses}</style>}</Head>
      <PollAmp form={data} accessToken={""} creatorEmail={"maxim@projectx.com"}></PollAmp>
      <div>Examples</div>
      <div>Result</div>
      <div>
        <PollLayout>
          <OptionResult value={"11:00"} widthString={`30`}></OptionResult>
        </PollLayout>
      </div>
      <div>Option</div>
      <div>
        <PollLayout>
          <Option value={"11:00"} questionId={`30`}></Option>
        </PollLayout>
      </div>
      <PollButton value={"Submit Vote"} />
    </div>
  );
}
