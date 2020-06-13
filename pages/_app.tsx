import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { NextPage } from "next";
import { DefaultSeo } from "next-seo";

import { GlobalStyles } from "../components/styles/global-styles";
import { theme } from "../components/styles/theme";
import { withAuthSync } from "../utils/auth";
import SEO from "../config/next-seo-config";

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
    const title = Component.title;

    return (
      <React.Fragment>
        <DefaultSeo {...SEO} />
        <GlobalStyles />
        <div
          id="modal"
          // style={{ position: "fixed", top: 0, right: 0, left: 0, bottom: 0 }}
        />
        <div
          id="overlay_modal"
          // style={{ position: "fixed", top: 0, right: 0, left: 0, bottom: 0 }}
        />
        <div
          id="map_modal"
          // style={{ position: "fixed", top: 0, right: 0, left: 0, bottom: 0 }}
        />
        <ThemeProvider theme={theme}>
          {getLayout(
            <Component
              style={(theme: any) => ({ fontFamily: theme.fonts.montserrat })}
              title={title}
              {...pageProps}
            />
          )}
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withAuthSync(MyApp);
