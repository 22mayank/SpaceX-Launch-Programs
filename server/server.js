const express = require("express");
const path = require("path");
const compression = require("compression");
const proxy = require("http-proxy-middleware");

const port = 3000;
const app = express();
const baseApiURL = "https://api.spaceXdata.com/v3";
const basePath = "";

app.use(compression());
// serve static assets normally
app.use(basePath + "/", express.static(path.resolve(__dirname + "/../build")));
app.use(basePath + "/", express.static(path.resolve(__dirname + "/../public")));

//this is for redirection
app.all("/nia-modelops/api/v2/*", (request, response) => {
  let requestUrl = request.url;
  if (basePath && basePath.trim().length > 0) {
    requestUrl = request.url.replace(basePath, "/");
  }
  response.redirect(307, baseApiURL + requestUrl);
});

function onError(err, req, res) {
  res.writeHead(500, {
    "Content-Type": "text/plain"
  });
  res.end("Something went wrong!");
}

app.use("", proxy({ target: baseApiURL, secure: false, onError: onError }));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname + "/../build/index.html"));
});

app.listen(port);
console.log(`server started on port ${port}`);
