import React from 'react';
import { func } from 'prop-types';

const WitchCheckButton = props => (
  <button className="btn btn-primary btn-lg btn-block" id="button_check" onClick={props.action}>Check</button>
);

WitchCheckButton.propTypes = {
  action: func.isRequired
};

export default WitchCheckButton;
