import React from "react";
import Router from "next/router";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { wrapper } from "../redux/store";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme/theme";
import { globalStyles } from "../src/theme/globalStyles";
import { withStyles } from "@material-ui/styles";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
// import 'swiper/swiper.scss'; //styles of swiper
import { SnackbarProvider } from "notistack"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cookies from 'next-cookies'
import '../public/App.css'

import axios from 'axios';
import { setTimezones, setUserIp, SET_USER_IP } from "../redux/users";
import { useDispatch } from "react-redux";
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());


function MyApp(props) {
  const { Component, pageProps, store, classes, cookiesRhy, userIp, timezones } = props;
  const Dispatch = useDispatch()

  // const getCookieByName = (name) => {
  //   //get uclaim cookie from all!
  //   const parts = cookiesRhy.split(`; ${name}=`);
  //   if (parts.length === 2) return parts.pop().split(';').shift();
  // }
  axios.defaults.withCredentials = false;
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers.common['site'] = process.env.REACT_APP_SITE_TOKEN;
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + cookiesRhy
  // console.log = function(){

  // }
  console.log('cookiesRhy', cookiesRhy)

  React.useEffect(() => {
    // if (timezones) {
    //   Dispatch(setTimezones(true, timezones))
    // }
    if (userIp) {
      Dispatch(setUserIp(true, userIp))
    }
  }, []);



  return (
    <SnackbarProvider maxSnack={3} classes={{
      root: classes.snackbar
    }}>

      <React.Fragment>
        <Head>
          <link rel="alternate" href="https://www.rhythmitica.ca/" hreflang="x-default" />
          <title>Rhythmitica | Online Music Academy</title>

          <meta name="description"
            content="learn music and instruments online. all Music instruments like santoor , oud , daf and etc. in Rhythmitica" />

          <meta name="keywords"
            content="music , persian music , santoor , daf , learn daf , oud , violin , guitar , fiddle" />

          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="Rhythmitica" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="google" value="notranslate" />

          
          {/* <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width"
                    /> */}
          {/* <meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no, user-scalable=0 , maximum-scale=1"/> */}

        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    </SnackbarProvider>
  );
}

const styles = (theme) => globalStyles(theme);


MyApp.getInitialProps = async ({ ctx }) => {

  console.log(ctx)
  console.log(ctx.req.headers.cookie)

  if (ctx.req) {
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/ip_info`);
      const data = await res.json();

      // const timezoneRes = await fetch(`${process.env.REACT_APP_BASE_URL}/timezones`);
      // const timezoneData = await timezoneRes.json();
      // ctx.store.dispatch({type: SET_USER_IP, payload: data });
      // ctx.store.dispatch(getContactDetail(data2));

      return {
        cookiesRhy: cookies(ctx).uclaim || '',
        userIp: data,
        // timezones: timezoneData

      };

    } catch (err) {
      console.log(err);
    }
  }
};

export default wrapper.withRedux(withStyles(styles)(MyApp));
