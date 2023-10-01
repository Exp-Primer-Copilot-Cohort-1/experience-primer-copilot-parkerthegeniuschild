// Create web server

// 1. Load the express module
const express = require("express");
// 2. Create an instance of express
const app = express();
// 3. Create a port number
const port = 3000;
// 4. Create route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// 5. Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});