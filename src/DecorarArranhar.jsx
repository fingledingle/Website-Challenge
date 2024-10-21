import React, { useState } from "react";
import './styles/DecorarArranhar.css'
import kitty from './assets/decorar_cat.jpeg'
import Botao from "./Components/Botao";
import playButton from './assets/play.png'

function DecorarArranhar(){
    const [isPlaying, setIsPlaying] = useState(false);

    function handleClick(){
        setIsPlaying(!isPlaying)
    }


    return(
        <div className="decorar_arranhar">
            <div className="decorar_page">
                <div className="left_side">
                    <span className="background_circle">
                    </span>

                    <h2>Decorar <br /> Arranhar & <br /> Relaxar</h2>
                </div>
                

                <div className="right_side">
                    <div className="video_area">
                        <img className="kitty" src={kitty} alt="" />
                            {/* <video src=""></video> */}
                        <button className={!isPlaying? 'play_button': 'pause_button'}>
                        <img src={!isPlaying?playButton:''} alt="" />
                        </button>

                    </div>



                    <p>Hammer can low idea of. Lunch able design items needle here stop drive. / or devil pants game close. Prioritize out key view / vendor we've. 4-blocker gave shift ideal based post.</p>
                    <button className="mais_sobre_a_gat">
                        MAIS SOBRE A GAT
                    </button>
                </div>





            </div>
        </div>
    )
}


export default DecorarArranhar;