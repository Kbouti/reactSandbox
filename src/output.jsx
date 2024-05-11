import { React, Component } from "react";

class Output extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: props.todo,
      editable: props.editable,
    };

    // this.todo = props.todo;
    // this.editable = props.editable;

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
    return (
      <>
        {this.props.editable == true ? (
          <input>input!</input>
        ) : (
          <div>{this.props.todo}</div>
        )}
        {/* I think this ternary statement is working, we're just not altering state like we want to */}

        <button onClick={this.logTodo}>output</button>
        {/* <div>this.props.todo: {this.props.todo}</div> */}
        <div>this.props.editable: {this.props.editable}</div>
      </>
    );
  }
}

export default Output;
