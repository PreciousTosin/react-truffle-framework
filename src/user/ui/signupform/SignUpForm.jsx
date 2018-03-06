/* eslint react/prop-types: 'off' */
import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.name.length < 2) {
      alert('Please fill in your name.');
    }

    this.props.onSignUpFormSubmit(this.state.name);
  }

  render() { /* eslint jsx-a11y/label-has-for: 'off' */
    return (
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={this.state.name} onChange={this.onInputChange} placeholder="Name" />
          <span className="pure-form-message">This is a required field.</span>

          <br />

          <button type="submit" className="pure-button pure-button-primary">Sign Up</button>
        </fieldset>
      </form>
    );
  }
}

export default SignUpForm;
