import { buttonClasses } from "../button/submit-button"
import { styledInputClasses } from "./amp-short-answer"
import { styledChoiceClasses } from "./amp-choice"

export const AmpPollDocument = ({ children }) => {
  return (
    <html amp4email="" data-css-strict>
      <head>
        <meta charset="utf-8" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        {/* {jsDependencies.map((dep, i) => {
                return (
                  <script key={i} async custom-element={dep.type} src={dep.src} />
                );
              })} */}
        <script
          async
          custom-element="amp-list"
          src="https://cdn.ampproject.org/v0/amp-list-0.1.js"
        ></script>
        <script
          async
          custom-element="amp-form"
          src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
        ></script>
        <script
          async
          custom-template="amp-mustache"
          src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"
        ></script>
        <style amp4email-boilerplate=""></style>
        <style amp-custom="">
          {` * { font-family: Inter, sans-serif; } ${buttonClasses} ${styledInputClasses} ${styledChoiceClasses}`}
        </style>
      </head>
      <body>{children}</body>
    </html>
  );
};
