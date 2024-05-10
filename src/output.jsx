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

  // HOW THE FUCK DO I PASS MY TODOS TO THE CHILD COMPONENT???
  // This component will render a single todo component. Thus, it only needs to know it's todo value and whether it is selected or not.
  // How do we pass those properties to it??  With PROPS. But how do we handle props in a class component

//  ****************************************************************************************************
// Ok I think there's a problem with state

// We establish the component and then click edit, but nothing changes in the output component
//  ****************************************************************************************************


  render() {
    return (
      <>



{this.props.editable == true ? <input>input!</input> : <div>{this.props.todo}</div>}
{/* I think this ternary statement is working, we're just not altering state like we want to */}



        <button onClick={this.logTodo}>output</button>
        {/* <div>this.props.todo: {this.props.todo}</div> */}
        <div>this.props.editable: {this.props.editable}</div>

      </>
    );
  }
}

export default Output;
