export const StyledButton = ({ text, href }) => {
  const primaryButton = {
    color: "#ffffff",
    borderRadius: "4px",
    backgroundColor: "black",
    textDecoration: "none"
  };
  const primaryText = {
    color: "#ffffff",
    fontWeight: 600,
    fontSize: `${Math.floor(16 * 0.875)}px`,
    lineHeight: `${Math.floor(16 * 1.25)}px`,
  };

  return (
    <table cellSpacing={0}>
      <tbody>
        <tr>
          <td>
            <a href={href} target="_blank" style={{ display: "inline" }}>
              <table style={primaryButton} cellSpacing="0" cellPadding="6">
                <tbody>
                  <tr>
                    <td style={{ width: "2px" }}></td>
                    <td style={primaryText}>{text}</td>
                    <td style={{ width: "2px" }}></td>
                  </tr>
                </tbody>
              </table>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
