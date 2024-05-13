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
    this.handleEdit = this.handleEdit.bind(this);
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

  handleEdit(e) {
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



// NIIIICE! We're doing good. 
// Next steps are to write the onchange handler for the input field and make a resubmit button (also maybe a cancel button?)


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

                <button onClick={this.handleEdit} className="editButton">
                  Edit
                </button>
              </li>
            ) : (
              <li key={entry.todo}>
                <input value={entry.todo}></input>
              </li>
            )
          )}
        </ul>
      </section>
    );
  }
}
