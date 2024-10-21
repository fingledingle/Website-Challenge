import React from "react";
import './Card.css'
import basket from '../assets/shopping-basket.png'


function Card({item, setProductInCart, productinCart}){
    function handleCart(){
        setProductInCart(!productinCart)
    }
    return(
        <div className="card">
            <li>
                <div className="card-top">

                    {item.off ?
                        <div className="sale">
                            <p>{item.off}%OFF</p>
                        </div>
                        :
                        ''
                    }

                    {item.lancamento ?
                        <div className="lancamento">
                            <p>LANÇAMENTO</p>
                        </div>
                        :
                        ''
                    }
                    
                </div>

                <img className="product-image" src={item.ItemSale} alt="imagem do produto" />

                <img className="kitty" src={item.Kitty} alt="imagem do produto" />




                <div className="bottom-part">
                    <div className="color-and-text">
                        <h3>
                            {item.produto} 
                        </h3>

                        <div className="color">
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                    </div>

                    <div className="price">
                        <p>R${item.priceBefore}</p>
                        <p>R${item.priceNow}</p>
                    </div>

                    <button onClick={handleCart} className="adicionar-ao-carrinho">
                        <p>
                            ADICIONAR AO CARRINHO
                        </p>

                        <img className="basket" src={basket} alt="" />
                        

                        
                    </button>



                </div>



            </li>
        </div>
    )
}


export default Card;