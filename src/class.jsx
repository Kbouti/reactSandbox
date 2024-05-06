import React, {Component} from "react";

class ClassInput extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <section>
            <h3>{this.props.name}</h3>
            {/* The input field to enter To-Do's */}
            <form>
              <label htmlFor="task-entry">Enter a task: </label>
              <input type="text" name="task-entry" />
              <button type="submit">Submit</button>
            </form>
            <h4>All the tasks!</h4>
            {/* The list of all the To-Do's, displayed */}
            <ul></ul>
          </section>
     
        );
    }

}

export default ClassInput;