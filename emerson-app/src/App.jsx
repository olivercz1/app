import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/button';
import MyButtondois from './componentes/MyButtondois'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MyButtondois text ='Clique mais' color = 'error'/>
        <MyButtondois text ='Detalhes' color = 'success'/>
      </div>
      </>
  )
}

export default App
