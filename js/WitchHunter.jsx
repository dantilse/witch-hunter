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

  // modify state on user interaction
  handleWitchCheck(e) {
    this.setState({ isSet: true });
    this.setState({ isWitch: e });
  }

  // reset state
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
          {this.state.isSet ? (
            <div>{this.state.isWitch ? <ConfirmWitch /> : <DenyWitch />}</div>
          ) : (
            <p>Click the button below to find out.</p>
          )}
        </section>
        <footer className="card-footer">
          {this.state.isSet ? (
            <div className="row">
              <div className="col-sm-4">
                <WitchCheckReset action={this.handleWitchReset} />
              </div>
              <div className="col-sm-8">
                <WitchCheckButton
                  action={this.handleWitchCheck}
                  label="Check again"
                />
              </div>
            </div>
          ) : (
            <WitchCheckButton
              action={this.handleWitchCheck}
              isWitch={this.state.isWitch}
              label="Check"
            />
          )}
        </footer>
      </article>
    );
  }
}

export default WitchHunter;
