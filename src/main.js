const cors = require("cors");
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/tasks", (request, response) => {
  response.json([
    { id: 546, name: "Buy pizza" },
    { id: 894, name: "Sold car" },
    { id: 326, name: "Rent house" },
  ]);
});

app.listen(port);
console.log("Backend Server started at http://localhost:" + port);
