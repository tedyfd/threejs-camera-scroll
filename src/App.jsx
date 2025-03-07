import { useState } from 'react'
import RoomScroll from './room-scroll/RoomScroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RoomScroll />
    </>
  )
}

export default App
