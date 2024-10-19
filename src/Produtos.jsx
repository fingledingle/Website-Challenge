import React from "react";
import './styles/Produtos.css'
import Card from "./Components/Card";
import ItemSale from './assets/produto.png'
import ellipse from './assets/Ellipse.png'
import Botao from "./Components/Botao";
import Kitty from './assets/kitty.png'


const produtos = [
    {
        produto: 'Toca túnel módulos',
        ItemSale,
        Kitty,
        priceBefore: '00,00',
        priceNow: '0000,00',
        lancamento: true,
        off: 10,
    },
    {
        produto: 'Toca túnel módulos',
        ItemSale,
        Kitty,
        priceBefore: '00,00',
        priceNow: '0000,00',
        lancamento: true,
        off: 10,
    },
    {
        produto: 'Toca túnel módulos',
        ItemSale,
        Kitty,
        priceBefore: '00,00',
        priceNow: '0000,00',
        lancamento: true,
        off: 10,
    },

]

function Produtos(){
    return(
        <div className="produtos">
            <div className="produtos-page">         
                <div className="top-part">
                    <div className="queridinho">
                        <div className="text-and-background">
                            <img src={ellipse} alt="" />
                            <h3>
                                <span>queri<br />dinho</span><br />deles
                            </h3>
                        </div>

                        <span className="span-botao">
                            <Botao
                                botao={{
                                    texto: 'VER TUDO',
                                    cor: 'white'
                                }}
                            />
                        </span>

                    </div>

                    <ul className="items-sale">
                        {produtos.map((item, index) => (
                            <Card
                                key = {index}
                                item = {item}
                            />
                        ))}

                    </ul>
                </div>

                <div className="categorias">
                    <p className="navegue-pelas-categorias">navegue pelas categorias</p>
                </div>
            </div>
        </div>
    )
}


export default Produtos;