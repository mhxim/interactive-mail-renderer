export const InteractiveWrapper = ({ children, includeAdvertisement }) => {
  return (
    <div>
      <div
        style={{
          marginBottom: 4,
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          padding: 8,
        }}
      >
        {children}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 4,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: 600,
            width: "100%",
            marginBottom: 4,
          }}
        >
          <img style={{ height: 22 }} src="https://projectx.com/logo.svg" />
          <div style={{ fontSize: 12 }}>&copy; projectx 2023</div>
        </div>
        {includeAdvertisement ? (
          <div style={{ fontSize: 12 }}>
            {"You want to send interactive emails? "}
            <a href="https://projectx.com" target="_blank" rel="noreferrer">
              Try projectx for free
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};
