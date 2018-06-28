import React, { Component } from 'react';

import ConfirmWitch from './ConfirmWitch';
import DenyWitch from './DenyWitch';
import WitchCheckButton from './WitchCheckButton';
import WitchCheckReset from './WitchCheckReset';

class WitchHunter extends Component {
  constructor(props) {
    super(props);

    // Bind the this context to the handler function
    this.handleWitchCheck = this.handleWitchCheck.bind(this);
    this.handleWitchReset = this.handleWitchReset.bind(this);

    // Set some state
    this.state = {
      isSet: false,
      isWitch: false
    };
  }


  handleWitchCheck(e) {
    const button = document.getElementById('button_check');
    const buttonWidth = button.getBoundingClientRect().width;
    const posLeft = e.pageX - e.currentTarget.offsetLeft;

    this.setState({ isSet: true });

    if (posLeft > (buttonWidth / 2)) {
      this.setState({ isWitch: true });
    } else {
      this.setState({ isWitch: false });
    }
  }

  handleWitchReset() {
    this.setState({ isSet: false });
  }

  render() {
    return (
      <article className="card hunter">
        <header className="card-header">
          <h1>Are you a Witch?</h1>
        </header>
        <section className="card-body">
          {this.state.isSet ? <div>{this.state.isWitch ? <ConfirmWitch /> : <DenyWitch />}</div> : <p>Click the button below to find out.</p>}
        </section>
        <footer className="card-footer">
          {
            this.state.isSet ? <WitchCheckReset action={this.handleWitchReset} /> : <WitchCheckButton action={this.handleWitchCheck} />
          }
        </footer>
      </article>
    );
  }
}

export default WitchHunter;
