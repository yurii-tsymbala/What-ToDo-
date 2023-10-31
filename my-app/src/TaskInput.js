import React from "react";

export default class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputEl = null;
  }

  onCreateClicked() {
    if (this.inputEl.value.length < 5) {
        this.inputEl.value = "";
        this.inputEl.placeholder = "Too small (=";
        return;
    }
    this.props.onSave(this.inputEl.value);
    this.inputEl.value = "";
    this.inputEl.placeholder = "What do u want to do?";
  }

  createInputref = (input) => {
    this.inputEl = input;
  };

  render() {
    return (
      <div id="inputZone" className="divWithBorder">
        <input
          id="taskInput"
          className="input"
          placeholder="What do u want to do?"
          ref={this.createInputref}
        />
        <button id="addBtn" onClick={() => this.onCreateClicked()}>
          Add
        </button>
      </div>
    );
  }
}
