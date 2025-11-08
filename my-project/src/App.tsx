import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
        <div>
          <div className="card">
            <h1 className="text-3xl font-bold">Tailwind CSS</h1>
          </div>
          <div className="text-2xl font-bold">
            Hello
          </div>
        </div>
        <div>
          <div className="card">
            <h1 className="text-3xl font-bold">Vite + React</h1>
            <button className="rounded-xl bg-sky-500 hover:bg-sky-700" onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
