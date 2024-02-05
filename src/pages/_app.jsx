export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;900&display=swap"
        rel="stylesheet"
      ></link>
      <style>
        {`
          html, body {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
        `}
      </style>
      <Component {...pageProps} />
    </div>
  );
}
