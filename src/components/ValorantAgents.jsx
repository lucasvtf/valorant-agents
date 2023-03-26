import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import styles from '../styles/valorantAgents.module.css';

function ValorantAgents() {
  const {
    valorantAgents, setAgent, setChooseAgent,
  } = useContext(AppContext);

  const handleClick = (id) => {
    const chosenAgent = valorantAgents.find(({ uuid }) => uuid === id);
    setChooseAgent(chosenAgent);
    setAgent(true);
  };

  return (
    <div className={styles.agents}>
      {valorantAgents.map((agent) => (
        <div key={agent.uuid} className={styles.agent}>
          <div>
            <img alt={agent.displayName} src={agent.displayIcon} width="250px" />
            <h3>{agent.displayName}</h3>
            <p>{agent.description}</p>
          </div>
          <div>
            <button
              type="button"
              className={styles.button}
              onClick={() => handleClick(agent.uuid)}
            >
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ValorantAgents;
