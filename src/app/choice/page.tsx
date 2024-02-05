"use client"

import { styledChoiceClasses } from "../../components/amp/amp-choice";
import { FormLayout } from "../../components/amp/amp-form";
import { BackButton, SubmitButton, buttonClasses } from "../../components/button/submit-button";

export default function Page() {

  return (<FormLayout>
    <style jsx>{`
        ${buttonClasses}
        ${styledChoiceClasses}
      `}</style>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <form>
        <div style={{ marginBottom: "20px" }}>
          <h1 style={{
            color: "#0D0D12",
            fontWeight: 600,
            fontSize: `${Math.floor(16 * 1.5)}px`,
            margin: `0 0 5px 0`,
            lineHeight: 1.3333333,
          }}>Why???</h1>
          <p style={{
            color: "#808897", margin: `0 0 12px 0`,
          }}>ASDasdasdas das das d</p>
          <div style={{ width: "min-content" }}>
            <div className="choice-wrapper">
              <input
                id="radio-asd"
                name={"asd"}
                value={"asd"}
                type="radio"
                style={{ display: "none" }}
              />
              <label htmlFor="radio-asd" className="choice">
                <div className="choice-prefix">
                  <div className="choice-prefix-inner">A</div>
                </div>
                <div className="choice-content">
                  Asdasd
                </div>
                <div className="choice-check">✔</div>
              </label>
            </div>
            <div className="choice-wrapper">
              <input
                id="radio-asdasd"
                name={"asd"}
                value={"asd"}
                type="radio"
                style={{ display: "none" }}
              />
              <label htmlFor="radio-asdasd" className="choice">
                <div className="choice-prefix">
                  <div className="choice-prefix-inner">B</div>
                </div>
                <div className="choice-content">
                  Developerasdfasdfasdf
                </div>
                <div className="choice-check">✔</div>
              </label>
            </div>
          </div>
          <SubmitButton intent="primary" />
        </div>
      </form >
      <form>
        <BackButton intent="ghost" />
      </form>
    </div>
  </FormLayout >
  );
}
