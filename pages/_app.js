import NextApp from "next/app";
import React from "react";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
const theme = {
  primary: "green",
};
export default class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
