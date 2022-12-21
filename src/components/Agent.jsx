import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Agent() {
  const { chooseAgent, setAgent } = useContext(AppContext);
  return (
    <div>
      <h1>oi</h1>
    </div>
  );
}

export default Agent;
