export const buttonClasses = `
  .secondary-button {
    border-radius: 6px;
    box-shadow: 0px 0px 0px 1px rgba(18, 55, 105, 0.08), 0px 1px 2px 0px rgba(164, 172, 185, 0.24);
    background-color: white;
    color: black;
    font-weight: 500;
    font-size: ${ Math.floor(16 * 0.875)}px;
    line-height: ${ Math.floor(16 * 1.25)}px;
    padding: 6px 8px;
    border: 0;
    cursor: pointer;
    min-width: 64px;
    margin-left: 1px;
    margin-right: 1px;
  }

  .secondary-button:hover {
    box-shadow: 0px 0px 0px 1px rgba(18, 55, 105, 0.08), 0px 1px 2px 0px rgba(164, 172, 185, 0.24), 0px 3px 6px 0px rgba(164, 172, 185, 0.24);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(193, 199, 208, 0.08) 100%), #FFF;
  }

  .secondary-button:active {
    background: linear-gradient(180deg, rgba(193, 199, 208, 0.08) 0%, rgba(255, 255, 255, 0.08) 100%), #FFF;
  }

  .ghost-button {
    border-radius: 6px;
    background-color: white;
    color: black;
    font-weight: 500;
    font-size: ${ Math.floor(16 * 0.875)}px;
    line-height: ${ Math.floor(16 * 1.25)}px;
    padding: 6px 8px;
    border: 0;
    cursor: pointer;
    min-width: 64px;
    margin-left: 1px;
    margin-right: 1px;
  }

  .ghost-button:hover {
    text-decoration: underline;
  }

  .primary-button {
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    border-radius: 6px;
    padding: 6px 8px;
    border: 0;
    cursor: pointer;
    position: relative;
    font-weight: 600;
    color:white;
    min-width: 105px;
    font-size: 14px;
    margin-left: 1px;
    margin-right: 1px;
    
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), #5f57ff;
    box-shadow: 0px 0px 0px 1px #4F47EB, 0px 1px 2px 0px rgba(26, 19, 161, 0.50);
  }

  .primary-button:hover {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), #5f57ff;
  }

  .primary-button:active {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.16) 100%), #5f57ff;
  }
`;

export const SubmitButton = ({ intent }) => {
  return (
    <input
      type="submit"
      value={"{{resources.submit}}"}
      className={`${intent}-button`}
    />
  );
};

export const BackButton = ({ intent }) => {
  return (
    <input
      type="submit"
      value={"{{resources.back}}"}
      className={`${intent}-button`}
    />
  );
};

