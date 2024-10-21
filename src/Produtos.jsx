import React from "react";
import './styles/Produtos.css'
import Card from "./Components/Card";
import ItemSale from './assets/produto.png'
import ellipse from './assets/Ellipse.png'
import Botao from "./Components/Botao";
import Kitty from './assets/kitty.png'
import item1 from './assets/item1.png'
import item2 from './assets/item2.png'
import item3 from './assets/item3.png'
import item4 from './assets/item4.png'





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


const produtosCategoria = [
    {
        modelo: 'classico',
        image: item1,

    },
    {
        modelo: 'minimalismo',
        image: item2,

    },
    {
        modelo: 'maximalismo',
        image: item3,

    },
    {
        modelo: 'boho',
        image: item4,

    },

]

function Produtos({setProductInCart, productinCart}){
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
                                setProductInCart={setProductInCart}
                                productinCart={productinCart}
                            />
                        ))}

                    </ul>
                </div>

                <div className="categorias">
                    <p className="navegue-pelas-categorias">navegue pelas categorias</p>
                    <div className="produtos-categorias-bottom">
                        {produtosCategoria.map((item) => (
                                <Botao
                                    key={item.modelo}
                                    botao={{
                                        texto: item.modelo,
                                        image: item.image,
                                        cor: 'white',
                                    }}
                                />

                            ))}

                            <Botao
                                botao={{
                                    texto: 'ver tudo',
                                    cor: 'white'
                                }}
                            />
                    </div>
                        
                
                </div>
            </div>
        </div>
    )
}


export default Produtos;