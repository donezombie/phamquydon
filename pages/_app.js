import React, { useEffect, useState, useRef, Fragment } from "react";
import { Provider } from "react-redux";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import global from "window-or-global";

import store from "../redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/styles.scss";
import "../public/static/css/animate.css";
import Header from "../layout/Header/Header";
import GoogleMaps from "../layout/GoogleMaps/GoogleMaps";
import Footer from "../layout/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import LoadingPage from "../components/LoadingPage/LoadingPage";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Body = ({ children }) => {
  return <div className="body-content">{children}</div>;
};

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  let Timer = useRef(null);

  useEffect(() => {
    new global.window.WOW().init();
    Timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => {
      clearTimeout(Timer);
    };
  }, []);

  return (
    <Provider store={store}>
      <div id="dzb-progress-bar" />
      {loading ? (
        <LoadingPage />
      ) : (
        <Fragment>
          {/* <Header /> */}
          {/* <ScrollToTop /> */}

          {/* <div id="nprogress" /> */}
          <Component {...pageProps} />

          {/* <GoogleMaps /> */}
          {/* <Footer /> */}
        </Fragment>
      )}
    </Provider>
  );
}
