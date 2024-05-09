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
      inputVal: this.state.inputVal,
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        
        <p>Number of tasks: {this.state.todos.length}</p>
        
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
            <li className="todo" key={todo}>
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
