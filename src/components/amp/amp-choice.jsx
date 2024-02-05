export const styledChoiceClasses = `
  .choice {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    padding: 6px 12px;
    margin-bottom: 10px;
    color: #0D0D12;
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0px 1px 2px rgba(18,55,105,0.08), 0px 0px 0px 1px rgba(9,25,72,0.13);
    max-width: 400px;
    min-width: 200px;
  }

  .choice-prefix {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    font-size: 14px;
    line-height: 20px;
    border-radius: 3px;
    border: 1px solid #312BA0;
    text-align: center;
    font-weight: 500;
  }

  .choice-content {
    display: flex;
    flex: 1;
    white-space: normal;
    width: max-content;
  }

  .choice-prefix-inner {
    width: 100%;
    height: 100%;
  }

  .choice-check {
    font-size: 14px;
    visibility: hidden;
  }

  .choice-wrapper input:checked ~ .choice {
    box-shadow: 0px 1px 2px rgba(50, 44, 160, 0.4),
      0px 0px 0px 1px #5F57FF, 0px 0px 0px 2px #FFFFFF,
      0px 0px 0px 3px rgba(95, 87, 255, 0.32);
  }

  .choice-wrapper:hover .choice {
    background-color: #F8F9FB;
  }

  .choice-wrapper input:checked ~ .choice .choice-prefix .choice-prefix-inner {
    display: block;
    background-color: #5E56FF;
    color: white;
  }
  .choice-wrapper input:checked ~ .choice .choice-prefix {
    border: 1px solid #5E56FF;
  }

  .choice-wrapper input:checked ~ .choice .choice-check {
    visibility: visible;
  }
`;

export const AmpChoice = () => {
  return <div className="choice-wrapper">
    <input
      id="{{choiceId}}"
      name="{{questionId}}"
      value="{{value}}"
      type="radio"
      style={{ display: "none" }}
      required
    />
    <label htmlFor="{{choiceId}}" className="choice">
      <div className="choice-prefix">
        <div className="choice-prefix-inner">{"{{letter}}"}</div>
      </div>
      <div className="choice-content">
        {"{{value}}"}
      </div>
      <div className="choice-check">✔</div>
    </label>
  </div>;
}

export default AmpChoice;