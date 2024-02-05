import { AmpPollDocument } from "./amp-document.jsx";
import { BackButton, SubmitButton } from "../button/submit-button.jsx";
import { StyledButton } from "../button/button.jsx";
import { AmpChoice } from "./amp-choice.jsx";
import { AmpShortAnswer } from "./amp-short-answer.jsx";

export const FormLayout = ({ children }) => {
  return (
    <div
      style={{ borderRadius: "4px", overflow: "hidden", maxWidth: "600px", padding: "16px" }}
    >
      {children}
    </div>
  );
};

export const AmpForm = ({
  workflowContentHeight,
  successContentHeight,
  fallbackContentHeight,
  replyContentNode,
  successNode,
  fallbackNode,
  workflowId,
  accessToken,
  spaceName,
  subdomain,
  resources
}) => {
  return (
    <AmpPollDocument>
      <FormLayout>
        <div style={{ marginBottom: "16px" }}>
          {replyContentNode}
        </div>
        <template type="amp-mustache" id="amp-form-full">
          <div
            style={{
              backgroundColor: "#F0EFFF",
              width: `100%`,
              height: "3px",
              marginBottom: "12px"
            }}
          >
            <div
              style={{
                width: `{{status.progress}}`,
                backgroundColor: "#5E56FF",
                height: "100%",
              }}
            ></div>
          </div>
          {"{{#status.isComplete}}"}
          {successNode}
          {"{{/status.isComplete}}"}
          {"{{^status.isComplete}}"}
          <h1 style={{
            color: "#0D0D12",
            fontWeight: 600,
            fontSize: `${Math.floor(16 * 1.5)}px`,
            margin: `0 0 5px 0`,
            lineHeight: 1.3333333,
          }}>{"{{currentQuestion.question}}"}</h1>
          <p style={{
            color: "#808897", margin: `0 0 12px 0`,
          }}>{"{{currentQuestion.description}}"}</p>
          <div style={{ position: "relative" }}>
            <form
              method="post"
              action-xhr={`https://api.projectx.com/v1/forms/${workflowId}/amp?accessToken=${accessToken}`}
              on="submit-success:status.refresh;"
            >
              {"{{#currentQuestion.multipleChoice}}"}
              <div style={{ width: "min-content", paddingLeft: "3px", paddingRight: "3px", marginBottom: "14px" }}>
                {"{{#options}}"}
                <AmpChoice></AmpChoice>
                {"{{/options}}"}
              </div>
              {"{{/currentQuestion.multipleChoice}}"}
              {"{{#currentQuestion.shortAnswer}}"}
              <div style={{ paddingLeft: "3px", paddingRight: "23px", marginBottom: "14px" }}>
                <AmpShortAnswer></AmpShortAnswer>
              </div>
              {"{{/currentQuestion.shortAnswer}}"}
              <SubmitButton intent={"primary"} />
            </form>
            <form
              method="post"
              action-xhr={`https://api.projectx.com/v1/forms/${workflowId}/amp/back?accessToken=${accessToken}`}
              on="submit-success:status.refresh;"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0
              }}
            >
              <BackButton intent={"ghost"} />
            </form>
          </div>
          {"{{/status.isComplete}}"}
        </template>

        <amp-list
          id="status"
          layout="fill"
          binding="no"
          single-item=""
          width="auto"
          items="result"
          style={{ position: "relative", minHeight: `${Math.max(...[Math.round(workflowContentHeight), Math.round(successContentHeight), Math.round(fallbackContentHeight)])}px` }}
          src={`https://api.projectx.com/v1/forms/${workflowId}/amp?accessToken=${accessToken}`}
          template="amp-form-full"
        >
          <div placeholder="">
            {resources.loading}...
          </div>
          <div fallback="">
            {fallbackNode}
            <StyledButton
              text={resources.openForm}
              href={`https://${subdomain}.projectx.com/respond/form/${workflowId}?accessToken=${accessToken}`}
            />
          </div>
        </amp-list>

        <div style={{ marginBottom: "8px", paddingTop: "8px" }}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "2px", marginBottom: "2px" }}>
            <div style={{ color: "#6b7280" }}>{resources.supportFrom} {spaceName}</div>
            <a
              href="https://projectx.com"
              target="_blank"
              style={{ textDecoration: "none", color: "#6b7280" }}
            >
              {resources.poweredBy} projectx.com
            </a>
          </div>
          <div style={{
            textDecoration: "none",
            fontSize: "11px",
            color: "#818898",
          }}>
            {resources.agreeOnSubmit} {" "}
            <a
              href="https://projectx.com/policies/privacy"
              target="_blank"
              style={{
                textDecoration: "none",
                fontSize: "11px",
                color: "#818898",
              }}
            >
              {resources.privacyPolicy}
            </a>{" "}
            {resources.and}{" "}
            <a
              href="https://projectx.com/policies/terms"
              target="_blank"
              style={{
                textDecoration: "none",
                fontSize: "11px",
                color: "#818898",
              }}
            >
              {resources.tos}
            </a>
            .
          </div>
        </div>
      </FormLayout>
    </AmpPollDocument>
  );
};
