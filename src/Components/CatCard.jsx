import React from "react";
import './CatCard.css';
import heart from '../assets/heart.png'

function CatCard({cat}){
    return(
        <div className="cat_card">
            <img src={cat.image} alt="" />
            <div className="likes">
                <button>
                    <img src={heart} alt="" />
                    <p>{cat.likes}mil</p>

                    </button>
            </div>
        </div>
    )
}


export default CatCard;