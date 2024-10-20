import { useState } from 'react'
import LandingPage from './LandingPage'
import NavBar from './Components/nav'
import Colecoes from './Colecoes'
import Produtos from './Produtos'
import './styles/App.css'
import ShowCase from './ShowCase'
import DecorarArranhar from './DecorarArranhar'
import AdoradoresdePapelao from './AdoradoresdePapelao'
import NewsLetter from './NewsLetters'
import Footer from './Footer'

function App() {

  // const myRef = useRef(null);

  // function scrollToElemenet(){


  return (
    <div className="app-container">
      <NavBar/>
      <LandingPage/>
      <Colecoes/>
      <Produtos/>
      <ShowCase/>
      <DecorarArranhar/>
      <AdoradoresdePapelao/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default App
