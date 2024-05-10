import { React, Component } from "react";

class Output extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   todo: props.todo,
    //   editable: props.editable,
    // };


    this.todo = props.todo;
    this.editable = props.editable;

    this.logTodo = this.logTodo.bind(this);
  }

  logTodo() {
    console.log(`logTodo function called`);
    console.log(`this.editable: ${this.props.editable}`);
  }

  // HOW THE FUCK DO I PASS MY TODOS TO THE CHILD COMPONENT???
  // This component will render a single todo component. Thus, it only needs to know it's todo value and whether it is selected or not.
  // How do we pass those properties to it??  With PROPS. But how do we handle props in a class component

//  ****************************************************************************************************
// OK I think we're getting props now, but the issue may be that we forgot to set the editable property to the original todo when we made it?
//  ****************************************************************************************************


  render() {
    return (
      <>
        <div>maFuckin output</div>
        <button onClick={this.logTodo}>output</button>
        <div>this.props.todo: {this.props.todo}</div>
        <div>this.props.editable: {this.props.editable}</div>

      </>
    );
  }
}

export default Output;
