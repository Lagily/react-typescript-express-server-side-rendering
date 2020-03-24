import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App.tsx";

const PORT = 60005;
const app = express();

// This does the server-side rendering on the '/' route, works because we are a single page app
app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Could not render the app server-side");
    }
    const ssr = ReactDOMServer.renderToString(<App />);
    return res.send(
      data.replace(
        "<div id=\"root\"></div>",
        `<div id="root">${ssr}</div>`
      )
    );
  });
});

// We need to be able to serve static files, e.g images, CSS
app.use(express.static(path.resolve(__dirname, "../build")));

// This basically starts the app
app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
})