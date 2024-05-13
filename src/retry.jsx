import { React, Component } from "react";

export default class InputRetry extends Component {
  constructor(props) {
    super(props);

    this.state = {
        todos: [],
        inputVal: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }


handleInputChange(e){
    this.setState((state) => ({
        ...state,
        inputVal: e.target.value,
    }));
}

handleSubmit(e){
    e.preventDefault();

    // Ok, here's where we gotta deviate from the script. Instead of just adding the string title of the todo, each one needs to be an object so we can store the editable boolean we'll need for the final exercise.
const newEntry = {
    todo: this.state.inputVal,
    editable: "false"
}

const newArray = [];
for (let i = 0; i < this.state.todos.length;i++)[
    newArray.push(this.state.todos[i])
]
newArray.push(newEntry);

this.setState({
    todos: newArray,
    inputVal: ""
})



}

handleDelete(e){  
}


  render() {
    return (
      <section>
        {/* <p>Trying this again</p>
        <h3>{this.props.name}</h3> */}

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


        </ul>
      </section>
    );
  }
}
