export const styledInputClasses = `
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
    max-width: 400px;
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
`;


export const AmpShortAnswer = () => {
  return <input
    className="styled-input"
    type="text"
    id="{{currentQuestion.id}}"
    name="{{currentQuestion.id}}"
    placeholder="{{currentQuestion.shortAnswer.placeholder}}"
    required
  />;
}

export default AmpShortAnswer;