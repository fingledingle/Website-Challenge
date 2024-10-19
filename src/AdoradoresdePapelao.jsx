import React from "react";
import './styles/AdoradoresDePapelao.css'
import cat1 from './assets/cat1.png'
import cat2 from './assets/cat2.jpeg'
import cat3 from './assets/cat3.jpeg'
import cat4 from './assets/cat4.jpeg'
import cat5 from './assets/cat5.jpeg'
import CatCard from "./Components/CatCard";




const catPage = [
    {
        image: cat1,
        likes: '10'
    },
    {
        image: cat2,
        likes: '10'

    },
    {
        image: cat3,
        likes: '10'

    },    {
        image: cat4,
        likes: '10'

    },    {
        image: cat5,
        likes: '10'

    },
]

function AdoradoresDePapelao(){
    return(
        <div className="adoradores_de_papelao">
            <div className="adoradores_page">
                <div className="top">
                    <p>Faça parte da comunidade de gatunos que amam design e papelão compartilhando a hashtag:  </p>
                    <h2>#AdoradoresDePapelão</h2>
                </div>

                <div className="bottom">
                    <div className="cards">
                        {catPage.map((cat, index) => (
                            <CatCard
                                key={index}
                                cat={cat}
                            />


                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}


export default AdoradoresDePapelao;