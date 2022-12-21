import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Agent() {
  const { chooseAgent, setAgent } = useContext(AppContext);

  const handleClick = () => {
    setAgent(false);
  };

  return (
    <div>
      <div>
        <img src={chooseAgent.fullPortrait} alt={chooseAgent.displayName} />
      </div>
      <div>
        <h4>{`Role: ${chooseAgent.role.displayName}`}</h4>
        <h4>{ `Description: ${chooseAgent.description}` }</h4>
        <div>
          <h4>Abilities</h4>
          {chooseAgent.abilities.map((ability) => (
            <div key={ability.slot}>
              <img src={ability.displayIcon} alt={ability.displayName} />
              <h5>{ability.displayName}</h5>
              <p>{ability.description}</p>
            </div>
          ))}
        </div>
        <button type="button" onClick={handleClick}>Back</button>
      </div>
    </div>
  );
}

export default Agent;
