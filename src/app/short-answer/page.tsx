"use client"

import { BackButton, SubmitButton, buttonClasses } from "../../components/button/submit-button";

export default function Page() {

  return (<div style={{ margin: "20px", maxWidth: "500px" }}>
    <form>
      <style jsx>{`
        ${buttonClasses}
        
        .styled-input:focus {
          box-shadow: 0px 1px 2px rgba(50, 44, 160, 0.4),
            0px 0px 0px 1px #5F57FF, 0px 0px 0px 2px #FFFFFF,
            0px 0px 0px 3px rgba(95, 87, 255, 0.32);
        }
        
        .styled-input:invalid {
          box-shadow: 0px 1px 2px rgba(150, 19, 44, 0.32),
            0px 0px 0px 1px #DF1C41, 0px 0px 0px 2px #FFFFFF,
            0px 0px 0px 3px rgba(223, 28, 65, 0.24);
        }
        
        .styled-input {
          color: #0D0D12;
          width: 100%;
          font-size: 0.875rem;
          outline: none;
          padding-left: 10px;
          padding-right: 10px;
          padding-top: 8px;
          padding-bottom: 8px;
          border: 0;
          display: flex;
          flex-direction: row;
          flex: 1;
          gap: 0.5rem;  /* Based on Tailwind's default spacing scale */
          background-color: white;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0px 1px 2px rgba(18,55,105,0.08), 0px 0px 0px 1px rgba(9,25,72,0.13);
        }

      `}</style>
      <div
        style={{
          backgroundColor: "#F0EFFF",
          width: `100%`,
          height: "3px",
        }}
      >
        <div
          style={{
            width: `30%`,
            backgroundColor: "#5E56FF",
            height: "100%",
          }}
        ></div>
      </div>
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
      <div style={{ width: "500px", marginBottom: "20px" }}>
        <input
          className="styled-input"
          id="radio-asd"
          name={"asd"}
          type="text"
          placeholder="asd"
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 10 }}>
        <SubmitButton intent="primary" />
        <BackButton intent="ghost" />
      </div>
    </form >
  </div >
  );
}
