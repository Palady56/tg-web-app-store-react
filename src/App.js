import "./App.css"
import { useEffect } from "react"
import { useTelegram } from "./Hooks/useTelegram"
import Header from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
import ProductList from "./components/PropoductList/ProductList.jsx"
import Form from "./components/Form/Form.jsx"

export default function App() {

  const {tg, handleOnToggleButton} = useTelegram() 

  useEffect(() => {
    tg.ready()
  }, [])

  return ( 
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<ProductList/>}/>
        <Route path={'/form'} element={<Form/>}/>
      </Routes>
    </div>
  )
}