import { useState } from 'react'
import './App.css'
import './index.css'
import LandingPage from './Pages/LandingPage'
import ComponentPage from './Pages/ComponentPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" min-h-screen w-full">
      <ComponentPage></ComponentPage>
   <LandingPage></LandingPage>
    
     
    </div>
  )
}

export default App
