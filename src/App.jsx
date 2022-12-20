import { useState, useEffect } from 'react'
import getValorantAgents from './services/valorantAPI'

function App() {
  const [valorantAgents, setValorantAgents] = useState([])

  useEffect(() => {
    const getAgents = async () => {
      const { data } = await getValorantAgents()
      setValorantAgents(data)
    }
    getAgents()
  }, [])

  return (
    <div>
      <ul>
        {valorantAgents.map((agent) => (
          <li key={agent.uuid}>{agent.displayName}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
