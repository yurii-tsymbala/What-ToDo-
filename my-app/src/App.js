import "./App.css";
import TaskItem from "./TaskItem";
import React from "react";
import { TaskService } from "./TaskService";
import TaskInput from "./TaskInput";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { tasks: [] };
    }
    componentDidMount() {
        this.loadTasks();
    }

    async loadTasks() {
        const tasks = await TaskService.allTasks();
        this.setState({ tasks });
    }

    async createTask(taskName) {
        await TaskService.createTask(taskName);
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

    renderTaskInput() {
        return (
            <TaskInput onSave={(newTaskName) => this.createTask(newTaskName)} />
        );
    }

    renderTaskItems() {
        return this.state.tasks.map((task) => {
            return (
                <TaskItem
                    key={task.id}
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
                    {this.renderTaskInput()}
                    <div id="list">{this.renderTaskItems()}</div>
                </div>
            </div>
        );
    }
}
