import React from "react";

export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };

    this.inputEl = null;
  }

  onSaveClicked() {
    this.props.onSave(this.inputEl.value);
    this.setState({ isEditing: false });
  }

  onEditClicked() {
    this.setState({ isEditing: true });
  }

  createInputref = (input) => {
    this.inputEl = input;

    if (input) {
      input.value = this.props.name;
      input.placeholder = "Too small (=";
    }
  };

  render() {
    return (
      <div className="cell divWithBorder">
        {this.state.isEditing ? (
          <input
            id="taskName"
            className="input"
            placeholder="What do u want to do?"
            ref={this.createInputref}
          />
        ) : (
          <label className="label" id={this.props.id}>
            {this.props.name}
          </label>
        )}

        <div className="buttonsWrapper">
          {this.state.isEditing ? (
            <button className="btnSave" onClick={() => this.onSaveClicked()}>
              Save
            </button>
          ) : (
            <button className="btnEdit" onClick={() => this.onEditClicked()}>
              Edit
            </button>
          )}

          <button className="btnDelete" onClick={() => this.props.onDelete()}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
