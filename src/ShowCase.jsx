import React from "react";
import Botao from "./Components/Botao";
import KittyBackground from './assets/kittybackground.png'
import DotBotao from "./Components/DotBotao";
import './styles/ShowCase.css'


function ShowCase(){
    return(
        <div className="show_case">
            <div className="show_case_page">
                <img src={KittyBackground} alt="" />
                <span className="product_num"><DotBotao texto={'1'}/></span>
                <span className="product_num"><DotBotao texto={'2'}/></span>
                <span className="product_num"><DotBotao texto={'3'}/></span>
                <span className="product_num"><DotBotao texto={'4'}/></span>
                <span className="product_num"><DotBotao texto={'5'}/></span>




                <div className="box">
                    <h3>Lorem Ipsum Dolor Sit</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Class aptent taciti sociousqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    
                    {/* botao */}
                    <button>ver selecao</button>

                    

                </div>
            </div>

        </div>
    )
}


export default ShowCase;