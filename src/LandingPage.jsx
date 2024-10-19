import React from "react";
import image from './assets/1.png'
import prize from './assets/prize.png'
import paw from './assets/paw.png'
import './styles/LandingPage.css'


function LandingPage(){
    
    
    return(
        <>
            <div className="landing-page">
                <div className="middle">
                    
                    <img src={image} className="cool" alt='caroussel-image' />
                    
                    <button className="ver-colecao">VER COLEÇÃO</button>
                    
                    
                    <button className="left">
                        <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292892 7.29293C-0.0976296 7.68345 -0.0976333 8.31662 0.292893 8.70714L6.65684 15.0711C7.04737 15.4616 7.68053 15.4616 8.07106 15.0711C8.46158 14.6806 8.46158 14.0474 8.07106 13.6569L2.41422 8.00004L8.07107 2.34319C8.4616 1.95267 8.4616 1.3195 8.07108 0.928977C7.68055 0.538452 7.04739 0.538452 6.65686 0.928975L0.292892 7.29293ZM60 7.00012L1 7.00003L1 9.00003L60 9.00012L60 7.00012Z" fill="black"/>
                        </svg>

                    </button>

                    <button className="right">
                        <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292892 7.29293C-0.0976296 7.68345 -0.0976333 8.31662 0.292893 8.70714L6.65684 15.0711C7.04737 15.4616 7.68053 15.4616 8.07106 15.0711C8.46158 14.6806 8.46158 14.0474 8.07106 13.6569L2.41422 8.00004L8.07107 2.34319C8.4616 1.95267 8.4616 1.3195 8.07108 0.928977C7.68055 0.538452 7.04739 0.538452 6.65686 0.928975L0.292892 7.29293ZM60 7.00012L1 7.00003L1 9.00003L60 9.00012L60 7.00012Z" fill="black"/>
                        </svg>

                    </button>

                    <div className="carousell-dots">
                        <button className="1"></button>
                        <button className="2"> </button>
                        <button className="3"></button>
                    </div>


                    <span className="filler"></span>


                    <div className="box-container">

                        <div className="box-info">
                            <div className="firstBox">
                                <h1>10</h1>
                                <div className="beneficio1">
                                    <h2>Benefício Principal</h2>
                                    <h3>Lorem ipsum dolor sit amet, consectetur.</h3>
                                </div>
                            </div>
                            

                            <div className="secondBox">

                                <div className="top-row">
                                    <div className="beneficio2">
                                        <div className="prize-text">
                                            <img src={prize} alt="prize"/>
                                            <h2>Benefício <br /> Secundario</h2>
                                        </div>

                                        <p>Lorem ipsum dolor sit amet, consectetur al muad'ib.</p>
                                    
                                    </div>


                                    <div className="beneficio2">
                                        <div className="prize-text">
                                            <img src={prize} alt="prize"/>
                                            <h2>Benefício <br /> Secundario</h2>
                                        </div>

                                        <p>Lorem ipsum dolor sit amet, consectetur al muad'ib.</p>
                                    
                                    </div>

                                    <div className="beneficio2">
                                        <div className="prize-text">
                                            <img src={prize} alt="prize"/>
                                            <h2>Benefício <br /> Secundario</h2>
                                        </div>

                                        <p>Lorem ipsum dolor sit amet, consectetur al muad'ib.</p>
                                    
                                    </div>

                                </div>


                                <div className="bottom-row">
                                    <h3>Beneficio Terciario <img src={paw} alt="paw" /></h3>
                                    <h3>Beneficio Terciario <img src={paw} alt="paw" /> </h3>
                                    <h3>Lisan Al Gaib <img src={paw} alt="paw" /> </h3>
                                    <h3>Beneficio Terciario <img src={paw} alt="paw" /> </h3>
                                    
                                    
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </div>
        
        </>
    )
}


export default LandingPage;

