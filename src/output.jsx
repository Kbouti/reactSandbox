import { React, Component } from "react";

class Output extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: props.todoList,
    };
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.log = this.log.bind(this);
  }

  log(e) {
    console.log(`log function called`);
    console.log(e.target.parentElement);
  }

  delete(e) {
    console.log(`delete function called`);
    this.log(e);
    let targetTodo = e.target.parentElement.children[0].innerHTML;
    console.log(`targetTodo: ${targetTodo}`);
    let newArray = [];
    for (let i = 0; i < this.props.todoList.length; i++) {
      if (this.props.todoList[i].todo !== targetTodo) {
        newArray.push(this.props.todoList[i]);
      }
    }
console.log(`loop over, newArray: ${newArray}`)
// I believe the loop is working, we're getting an array of objects that is the correct length
// Buuuut we're not correctly setting state



this.setState({
    todoList: newArray,
})

    // this.setState((state) => ({
    //     todoList: newArray,
    // }))

    //  ****************************************************************************************************
    // Ok now we need to reset state. Or props? Idk. Gotta do something.


    // Also... Render output is running every time the input is changed, that should't happen. It should only rerender when a new todo is added. 
    // Do we need to useEffect here??????
    //  ****************************************************************************************************
  }

  edit(e) {
    console.log(`edit called `);
    this.log(e);
  }

  render() {
    console.log(`render called from output`);
    console.log(`this.todoList: ${this.todoList}`)
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
              onClick={this.delete}
            >
              Delete
            </button>
            <button
              className="editButton"
              onClick={this.edit}
              // Need onClick function from input file
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Output;
