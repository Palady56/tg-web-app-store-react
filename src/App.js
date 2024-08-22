import "./App.css"
import { useEffect } from "react"

const tg = window.Telegram.WebApp

export default function App() {

  useEffect(() => {
    tg.ready()
  }, [])
  
  const handleOnClose = () => {
    tg.close()
  }

  return ( 
    <div className="App">
      work
      <button onClick={handleOnClose}>Close</button>
    </div>
  )
}