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

import axios from 'axios';
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());


function MyApp(props) {
  const { Component, pageProps, store, classes, cookiesRhy } = props;
  console.log('cookiesRhy', cookiesRhy)

  const getCookieByName = (name) => {
    //get uclaim cookie from all!
    const parts = cookiesRhy.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  // axios.defaults.withCredentials = true;
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers.common['site'] = process.env.REACT_APP_SITE_TOKEN;
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + getCookieByName('uclaim')
  // React.useEffect(() => {
  //   // set axios defaults
  //   if (typeof window !== 'undefined') {
  // axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('Authorization');
  //     }
  // }, []);
  


  return (
    <SnackbarProvider maxSnack={3} classes={{
      root: classes.snackbar
    }}>

      <React.Fragment>
        <Head>
          <title>rhythmitica</title>
          {/* <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width"
                    /> */}
          {/* <meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no, user-scalable=0 , maximum-scale=1"/> */}

          {/* <link id="favicon" rel="shortcut icon" href="/public/favicon.ico"></link> */}
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
  // const { user } = ctx.store.getState();

  // if (ctx.req) {
  //   try {
  // const res = await fetch(`${BASE_URL}/user/profile`, {
  //     withCredentials: true,
  //     headers: { cookie: ctx.req.headers.cookie },
  // });
  // const data = await res.json();
  // const res2 = await fetch(`${BASE_URL}/user/view?chatUserId=${data.chatUserId || 0}&teacher=true&groupOwner=true`, {
  //     withCredentials: true,
  //     headers: { cookie: ctx.req.headers.cookie },
  // });
  // const data2 = await res2.json();

  // ctx.store.dispatch({ type: LOAD_SUCCESS, payload: { user: data, userDetail: data2 } });
  // ctx.store.dispatch(getContactDetail(data2));



  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  if (ctx.req) {
    return {
      cookiesRhy: cookies(ctx).uclaim || ''
    };
  }
};

export default wrapper.withRedux(withStyles(styles)(MyApp));
