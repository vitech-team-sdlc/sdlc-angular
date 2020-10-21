const express = require("express");
const app = express();

// Create link to Angular build directory
const distDir = __dirname + "/dist/mood-feed-frontend";
app.use(express.static(distDir));

const server = app.listen(process.env.PORT || 8080, function () {
  const port = server.address().port;
  console.log("App now running on port", port, distDir);
});

