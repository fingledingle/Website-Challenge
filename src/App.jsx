import { useState } from 'react'
import LandingPage from './LandingPage'
import NavBar from './Components/nav'
import Colecoes from './Colecoes'
import Produtos from './Produtos'
import './styles/App.css'
import ShowCase from './ShowCase'
import DecorarArranhar from './DecorarArranhar'
import AdoradoresdePapelao from './AdoradoresdePapelao'

function App() {

  return (

    <div className="app-container">
      <NavBar/>
      <LandingPage/>
      <Colecoes/>
      <Produtos/>
      <ShowCase/>
      <DecorarArranhar/>
      <AdoradoresdePapelao/>
    
    </div>
  )
}

export default App
