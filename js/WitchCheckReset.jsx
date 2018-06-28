import React from 'react';
import { func } from 'prop-types';

const WitchCheckReset = props => (
  <button className="btn btn-link btn-lg btn-block" id="button_reset" onClick={props.action}>Reset</button>
);

WitchCheckReset.propTypes = {
  action: func.isRequired
};

export default WitchCheckReset;
