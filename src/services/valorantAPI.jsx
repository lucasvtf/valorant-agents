const getValorantAgents = async () => {
  const request = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
  const data = await request.json();
  return data;
};

export default getValorantAgents;
