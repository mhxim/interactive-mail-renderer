import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Flow Email Renderer</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
