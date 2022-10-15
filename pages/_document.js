import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width" />
          <meta charSet="utf-8" />
          <title>Phạm Phú Quý Đôn</title>
          <meta name="title" content="Phạm Phú Quý Đôn | Front-end developer" />
          <meta
            name="description"
            content="Hi everyone, I'm Phạm Phú Quý Đôn | ReactJS | JS | Front-end developer"
          />
          <link rel="canonical" href />
          <meta property="og:url" content="https://example.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Phạm Phú Quý Đôn | ReactJS | JS | Front-end developer"
          />
          <meta
            property="og:description"
            content="Phạm Phú Quý Đôn | ReactJS | JS | Front-end developer"
          />
          <meta httpEquiv="content-language" content="vi" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel="dns-prefetch" href="//f8.vercel.app" />
          <link rel="dns-prefetch" href="//www.w3.org" />
          <link rel="dns-prefetch" href="//stackoverflow.com" />
          <link rel="dns-prefetch" href="//github.com" />
          <link rel="dns-prefetch" href="//www.youtube.com" />
          <meta name="next-head-count" content="22" />

          <meta charSet="utf-8" />
          <meta content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/static/assets/logo.png" />
          <script src="/static/js/wow.min.js" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="custom-scroll">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
