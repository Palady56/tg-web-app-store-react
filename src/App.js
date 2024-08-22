import "./App.css"
import { useEffect } from "react"
import { useTelegram } from "./Hooks/useTelegram"

export default function App() {

  const {tg, handleOnToggleButton} = useTelegram() 

  useEffect(() => {
    tg.ready()
  }, [])

  return ( 
    <div className="App">
      <button onClick={handleOnToggleButton}>Toggle</button>
    </div>
  )
}