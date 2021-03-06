import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/static/assets/logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
            rel="stylesheet"
          /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <script src="/static/js/wow.min.js" />
        </Head>
        <body className="custom-scroll">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
