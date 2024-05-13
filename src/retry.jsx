import { React, Component } from "react";

export default class InputRetry extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section>
        {/* <p>Trying this again</p>
        <h3>{this.props.name}</h3> */}

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
        <h4>All the tasks! </h4>
        <ul>

{/* Here we'll need to map through todos and render */}


        </ul>
      </section>
    );
  }
}
