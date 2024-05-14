import { React, Component } from "react";



const exampleTodos = [{todo: "Replace air filters", editable: "false"}, {todo: "retake Slash phoros", editable: "false"}];



export default class InputRetry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: exampleTodos,
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditCancel = this.handleEditCancel.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const newEntry = {
      todo: this.state.inputVal,
      editable: "false",
    };

    const newArray = [];
    for (let i = 0; i < this.state.todos.length; i++)
      [newArray.push(this.state.todos[i])];
    newArray.push(newEntry);
    this.setState({
      todos: newArray,
      inputVal: "",
    });
  }

  handleDelete(e) {
    const targetTodo = e.target.parentElement.firstChild.innerHTML;
    console.log(`delete function called for targetTodo: ${targetTodo}`);
    const newArray = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].todo !== targetTodo) {
        newArray.push(this.state.todos[i]);
      }
    }
    this.setState((state) => ({
      todos: newArray,
      inputVal: this.state.inputVal,
    }));
  }

  handleEditClick(e) {
    // Swap target task to editable

    const targetTodo = e.target.parentElement.firstChild.innerHTML;
    console.log(`edit called on ${targetTodo}`);
    const newArray = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].todo == targetTodo) {
        let updatedEntry = {
          todo: targetTodo,
          editable: "true",
        };
        newArray.push(updatedEntry);
      } else {
        newArray.push(this.state.todos[i]);
      }
    }
    this.setState((state) => ({
      todos: newArray,
      inputVal: this.state.inputVal,
    }));
  }

  handleEditSubmit(e) {
    e.preventDefault();
    console.log(`handleEditSubmit function triggered`);
  }

  handleEditCancel(e) {
    e.preventDefault();
    console.log(`handleEditCancel function triggered`);
  }

  render() {
    return (
      <section>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>Task count: {this.state.todos.length}</h4>
        <ul>
          {/* Here we'll need to map through todos and conditionally render */}
          {this.state.todos.map((entry) =>
            entry.editable == "false" ? (
              <li key={entry.todo}>
                <p className="todo">{entry.todo}</p>
                <button
                  onClick={this.handleDelete}
                  className="deleteButton"
                  type="delete"
                >
                  Delete
                </button>
                <button onClick={this.handleEditClick} className="editButton">
                  Edit
                </button>
              </li>
            ) : (
              <li key={entry.todo}>
                <form onSubmit={this.handleEditSubmit}>
                  <input placeholder={entry.todo}></input>
                  <button type="submit">Submit</button>
                  <button type="cancel" onClick={this.handleEditCancel}>
                    Cancel
                  </button>
                </form>
              </li>
            )
          )}
        </ul>
      </section>
    );
  }
}
