import React from "react";
import "@/styles/tailwind.css";
import "@/styles/global.css";

const App = ({
  Component,
  pageProps,
}: {
  Component: React.ElementType;
  pageProps: Record<string, unknown>;
}) => {
  return <Component {...pageProps} />;
};

export default App;
