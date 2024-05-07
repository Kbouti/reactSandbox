import React, { Component } from "react";

class ClassInput extends Component {
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
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDelete(e) {
    // delete this todo
    console.log(`delete triggered`);

    let thisTodoValue = e.target.parentElement.children[0].innerHTML;

    console.log(`todo to delete: ${thisTodoValue}`);

    let newTodos = [];
    console.log(`this.state.todos: ${this.state.todos}`);
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i] !== thisTodoValue) {
        newTodos.push(this.state.todos[i]);
      }
    }
    this.setState((state) => ({
      todos: newTodos,
      inputVal: this.inputVal,
    }));


// This works now, I'm deleting the intended todo. Buuuuut I'm getting an angry warning message in the console:
// Warning: A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components


  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              <p>{todo}</p>
              <button
                key={todo}
                type="delete"
                className="deleteButton"
                onClick={this.handleDelete}
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

export default ClassInput;
