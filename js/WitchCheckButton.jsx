import React, { Component } from 'react';
import { func, string } from 'prop-types';

class WitchCheckButton extends Component {
  constructor(props) {
    super(props);

    this.makeBoolean = this.makeBoolean.bind(this);
  }

  makeBoolean() {
    const randomNum = Math.floor(Math.random() * 100);
    const randomVal = randomNum > 49;

    this.props.action(randomVal);
    console.log(`Random number is ${randomNum}, which equals ${randomVal}`);
  }

  render() {
    return (
      <button className="btn btn-primary btn-lg btn-block" id="button_check" onClick={this.makeBoolean}>{this.props.label}</button>
    )
  }
}

WitchCheckButton.propTypes = {
  action: func.isRequired,
  label: string.isRequired
};

export default WitchCheckButton;
