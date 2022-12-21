import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function ValorantAgents() {
  const { valorantAgents, setAgent, setChooseAgent } = useContext(AppContext);

  const handleClick = (id) => {
    const chosenAgent = valorantAgents.find(({ uuid }) => uuid === id);
    setChooseAgent(chosenAgent);
    setAgent(true);
  };

  return (
    <div>
      {valorantAgents.map((agent) => (
        <div key={agent.uuid}>
          <img alt={agent.displayName} src={agent.displayIcon} width="250px" />
          <h3>{agent.displayName}</h3>
          <p>{agent.description}</p>
          <button type="button" onClick={() => handleClick(agent.uuid)}>Detalhes</button>
        </div>
      ))}
    </div>
  );
}

export default ValorantAgents;
