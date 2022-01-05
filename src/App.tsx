import { useState } from 'react'
import Parent from './Parent'

function App() {
  const [count, setCount] = useState(0)
  const [roomId, setRoomId] = useState('10');

  return (
    <div className="App">
    <input value={roomId} onChange={(e) => setRoomId(e.target.value)} />
    <Parent roomId={roomId}/>
    </div>
  )
}

export default App
