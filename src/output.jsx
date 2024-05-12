import { React, Component } from "react";

class Output extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: props.todoList,
    };
    this.logTodo = this.logTodo.bind(this);
  }

  logTodo() {
    console.log(`logTodo function called`);
    console.log(`this.editable: ${this.props.editable}`);
  }

  //  ****************************************************************************************************
  // Ok I think there's a problem with state
  // This component will render a single todo component. Thus, it only needs to know it's todo value and whether it is selected or not.

  // We establish the component and then click edit, but nothing changes in the output component

  //  I think we gotta raise state?
  // We need to pass the whole todos list to the output component. Not just a single one. The individual output components need access to the whole listso that they can delete themselves from the list.

  //  ****************************************************************************************************

  render() {

    console.log(`render called from output`)
    return (
      <ul>
        {this.props.todoList.map((todo) => (


// Here is where the ternary statement would go... 
// Render an input element if editable, otherwise a regular li


          <li className="todo" key={todo.todo}>
            <p>{todo.todo}</p>
            <button
              key={todo.todo + "delete"}
              type="delete"
              className="deleteButton"
              // Need onClick function from input file
            >
              Delete
            </button>
            <button className = "editButton"
            // Need onClick function from input file
            >Edit</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Output;
