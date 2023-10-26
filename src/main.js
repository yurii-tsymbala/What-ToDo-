const { TaskService, Task } = require("./TaskService");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("/tasks.js", function (req, res) {
  res.sendFile(path.join(__dirname, "/tasks.js"));
});
app.listen(port);
console.log("Server started at http://localhost:" + port);

let task = new Task("Wash the dishes");
console.log(task);

let taskService = new TaskService();
console.log(taskService.allTasks());
