import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import styles from '../styles/agent.module.css';

function Agent() {
  const { chooseAgent, setAgent } = useContext(AppContext);

  const handleClick = () => {
    setAgent(false);
  };

  return (
    <div className={styles.main}>
      <div>
        <img
          src={chooseAgent.fullPortrait}
          alt={chooseAgent.displayName}
          className={styles.agentImg}
        />
      </div>
      <div className={styles.agentDetail}>
        <div>
          <h4>{`Role: ${chooseAgent.role.displayName}`}</h4>
          <h4>{ `Description: ${chooseAgent.description}` }</h4>
          <div>
            <h4>Skills</h4>
            <div className={styles.abilitiesDiv}>
              {chooseAgent.abilities.map((skill) => (
                <div key={skill.slot} className={styles.abilities}>
                  <div>
                    <img
                      src={skill.displayIcon}
                      alt={skill.displayName}
                      className={styles.abilitiesImg}
                    />
                    <h5>{skill.displayName}</h5>
                  </div>
                  {/* <p>{skill.description}</p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <button type="button" className={styles.button} onClick={handleClick}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default Agent;
