import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import getValorantAgents from '../services/valorantAPI';

function AppProvider({ children }) {
  const [valorantAgents, setValorantAgents] = useState([]);
  const [chooseAgent, setChooseAgent] = useState([]);
  const [agent, setAgent] = useState(false);

  useEffect(() => {
    const getAgents = async () => {
      const { data } = await getValorantAgents();
      setValorantAgents(data);
    };
    getAgents();
  }, []);

  const context = useMemo(() => ({
    valorantAgents,
    chooseAgent,
    agent,
    setChooseAgent,
    setAgent,
    setValorantAgents,
  }), [valorantAgents, chooseAgent, agent]);

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
