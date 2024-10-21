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

  const [productinCart, setProductInCart] = useState(false);


  return (
    <div className="app-container">
      {/* <NavBar
        productinCart={productinCart}
        setProductInCart={setProductInCart}
      /> */}
      <LandingPage/>
      <Colecoes/>
      <Produtos 
        //prop drilling :(
        setProductInCart={setProductInCart}
        productinCart={productinCart}
      />
      <ShowCase/>
      <DecorarArranhar/>
      <AdoradoresdePapelao/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default App
