import React from "react";
import './Botao.css'


function Botao({botao}){
    return(
        <div className="botao-container">
            <button style={{backgroundColor: botao.cor}} className="botao">{botao.texto}</button>
        </div>
    )
}


export default Botao;