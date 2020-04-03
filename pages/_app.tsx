import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { NextPage } from "next";

import { GlobalStyles } from "../components/styles/global-styles";
import { theme } from "../components/styles/theme";
import { withAuthSync } from "../utils/auth";

interface StaticPageProps {
  getLayout: any;
  title: string;
}

export interface MyAppTooProps {
  Component: StaticPageProps & NextPage;
  pageProps: any;
}

class MyApp extends App<MyAppTooProps> {
  render() {
    const { Component, pageProps } = this.props;
    const getLayout = Component.getLayout || ((page: any) => page);
    const title = Component.title || "Welcome to Atlas Travel";

    return (
      <>
        <GlobalStyles />
        <div
          id="modal"
          // style={{ position: "fixed", top: 0, right: 0, left: 0, bottom: 0 }}
        />
        <ThemeProvider theme={theme}>
          {getLayout(<Component title={title} {...pageProps} />)}
        </ThemeProvider>
      </>
    );
  }
}

export default withAuthSync(MyApp);