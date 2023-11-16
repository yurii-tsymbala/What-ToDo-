const cors = require("cors");
const express = require("express");
const body = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;
const jsonParser = body.json();

app.use(cors());

var tasks = [];

app.get("/tasks", (request, response) => {
  response.json(tasks);
});

app.post("/addtask", jsonParser, (request, response) => {
  let newTask = request.body;
  tasks.unshift(newTask);
  response.status(201).send();
});

app.put("/:id", jsonParser, (request, response) => {
  const id = request.params.id;
  const taskInDB = tasks.find((el) => el.id === id);
  if (taskInDB) {
    taskInDB.name = request.body.name;
    response.status(204).send();
  }
});

app.delete("/:id", jsonParser, (request, response) => {
  const id = request.params.id;
  tasks = tasks.filter((task) => task.id !== id);
  response.status(200).send();
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
