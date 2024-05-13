import { React, Component } from "react";

export default class InputRetry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();

    // Ok, here's where we gotta deviate from the script. Instead of just adding the string title of the todo, each one needs to be an object so we can store the editable boolean we'll need for the final exercise.
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

          {this.state.todos.map((entry) => (
            <li key={entry.todo}>
              <p className="todo">{entry.todo}</p>
              <button
                onClick={this.handleDelete}
                className="deleteButton"
                type="delete"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
