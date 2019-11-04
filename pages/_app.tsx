import React, { Fragment } from "react";
import App from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, #__next {
    height: 100vh;
    width: 100%;
    margin: 0;
  }
`;

// later in your app
class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <Head>
          <title>Pepewitch</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </Fragment>
    );
  }
}

export default MyApp;
