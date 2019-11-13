import React, { Component } from "react";

class ProfileContainer extends Component {
  constructor() {
    super();

    this.state = {
      symptom: "",
      answer: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <h2>Are you experiencing "symptom" today?</h2>
        <label>
          <input
            type="radio"
            name="answer"
            value="Yes"
            checked={this.state.answer === "Yes"}
            onChange={this.handleChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="answer"
            value="No"
            checked={this.state.answer === "No"}
            onChange={this.handleChange}
          />
          No
        </label>
      </div>
    );
  }
}

export default ProfileContainer;
