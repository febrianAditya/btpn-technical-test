// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/Counter'

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <>
      <div>
        <button onClick={handleIncrement}>
          Increment
        </button>
        <span>{count}</span>
        <button onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
