import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Game from '@/components/Game';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto container max-w-6xl py-10 px-4 sm:px-6 lg:px-8">
      <h1 className='text-3xl font-bold'>
        Tic-Tac-Toe
      </h1>
      <div className='py-4'>
        <Game />
      </div>
    </div>
  )
}

export default App
