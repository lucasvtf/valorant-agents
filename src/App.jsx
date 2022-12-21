import React, { useContext } from 'react';
import AppContext from './context/AppContext';
import ValorantAgents from './components/ValorantAgents';
import Agent from './components/Agent';

function App() {
  const { agent } = useContext(AppContext);
  return (
    <div>
      <h1>Valorant Agents</h1>
      { agent ? <Agent /> : <ValorantAgents /> }
    </div>
  );
}

export default App;
