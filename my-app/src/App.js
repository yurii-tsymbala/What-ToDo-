import "./App.css";
import TaskItem from "./TaskItem";
import React from "react";
import { TaskService, Task } from "./TaskService";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }
  componentDidMount() {
    this.loadTasks();
  }

  async loadTasks() {
    const tasks = await TaskService.allTasks();
    this.setState({ tasks });
  }

  async createTask(taskName) {
    await TaskService.createTask({
        taskName
      });
      await this.loadTasks();
  }

  async saveTask(taskId, taskName) {
    await TaskService.updateTask({
      id: taskId,
      name: taskName,
    });
    await this.loadTasks();
  }

  async deleteTask(taskId) {
    await TaskService.deleteTask(taskId);
    await this.loadTasks();
  }

  renderTaskItems() {
    return this.state.tasks.map((task) => {
      return (
        <TaskItem
          key={task.id}
          id={task.id}
          name={task.name}
          onDelete={() => this.deleteTask(task.id)}
          onSave={(newName) => this.saveTask(task.id, newName)}
        />
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div id="background"></div>
        <div id="center" className="divWithBorder">
          <div id="inputZone" className="divWithBorder">
            <input
              id="taskName"
              className="input"
              placeholder="What do u want to do?"
            />
            <button id="addBtn">Add</button>
          </div>
          <div id="list">{this.renderTaskItems()}</div>
        </div>
      </div>
    );
  }
}
