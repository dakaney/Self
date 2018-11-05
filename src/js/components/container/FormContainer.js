import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <div>
       hwllo
      </div>
    );
  }
}

export default FormContainer;

ReactDOM.render(<FormContainer />, document.getElementById("App"));