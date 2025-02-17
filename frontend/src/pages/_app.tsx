import React from "react";
import "@/styles/global.scss";
import MainLayout from "@/components/templates/MainLayout/MainLayout";

const App = ({
  Component,
  pageProps,
}: {
  Component: React.ElementType;
  pageProps: Record<string, unknown>;
}) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default App;
