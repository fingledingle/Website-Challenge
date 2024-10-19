import { useState } from 'react'
import LandingPage from './LandingPage'
import NavBar from './Components/nav'
import Colecoes from './Colecoes'
import Produtos from './Produtos'
import './styles/App.css'


function App() {

  return (

    <div className="app-container">
      <NavBar/>
      <LandingPage/>
      <Colecoes/>
      <Produtos/>
    
    </div>
  )
}

export default App
