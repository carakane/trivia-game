import React from 'react';
import { Panel } from 'react-bootstrap';

const Score =({score}) => {
  return(
    <Panel header={'Current Score: $' + score} bsStyle="success">
    </Panel>
  )
};

export default Score;