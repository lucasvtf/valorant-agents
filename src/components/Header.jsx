import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Header() {
  const { setSearchAgent } = useContext(AppContext);

  const handleSearch = ({ target: { value } }) => {
    setSearchAgent(value);
  };
  return (
    <div>
      <h1>Valorant Agents</h1>
      <input type="search" name="searchAgent" onChange={handleSearch} />
    </div>
  );
}

export default Header;
