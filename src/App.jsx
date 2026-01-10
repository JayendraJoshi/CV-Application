import { useState } from 'react'
import './styles/App.css'
import {InputScreen} from './components/input-screen';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <InputScreen/>

      </div>
    </>
  )
}

export default App
