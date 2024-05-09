import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);


    this.state = {
      todos: props.todos,


    //   ************************************************************************************
// Ok after a lot of messing around at least this is rendering and not erroring out....


// Count is re-rendering everytime we enter a character into the input field. 
    //   ************************************************************************************


    };
  }
  render() {
    console.log(`todos: ${this.todos}`);

    return <p>{this.todos}</p>;
  }
}


export default Count;