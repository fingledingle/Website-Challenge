import React from "react";
import './DotBotao.css'


function DotBotao({texto}){
    return(
        <div className="dot_botao">
            <button>
                {texto}
            </button>
        </div>
    )
}



export default DotBotao;