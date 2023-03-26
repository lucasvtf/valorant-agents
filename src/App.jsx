import React, { useContext } from 'react';
import AppContext from './context/AppContext';
import ValorantAgents from './components/ValorantAgents';
import Agent from './components/Agent';
import Header from './components/Header';

function App() {
  const { agent } = useContext(AppContext);
  return (
    <div>
      <Header />
      { agent ? <Agent /> : <ValorantAgents /> }
    </div>
  );
}

export default App;
