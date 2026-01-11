import { useState } from 'react'
import './styles/App.css'
import {InputScreen} from './components/input-screen';
import {PreviewScreen} from './components/preview-screen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <InputScreen/>   
        <PreviewScreen/>
    </>
  )
}

export default App
