import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h1>Cognitive Function Assessment</h1>
        <p>This assessment is designed to help you determine the best way for you to work by asking just two questions. It provides valuable insights into your cognitive function and can guide you in optimizing your productivity and efficiency.</p>
        <button className='main-btn'>Begin Assessment</button>
      </div>
    </>
  )
}

export default App
