import React from "react";
import './styles/Colecoes.css'
import image1 from './assets/image 5.png'
import rectangle from './assets/Rectangle.png'
import kittyHouse from './assets/kitty.png'
import circle from './assets/Circle.png'

function Colecoes(){
    return(
        <div className="colecoes">

            <div className="actual-page">
                <div className="non_moving">

                    <div className="text">
                            <h3>Coleções</h3>

                            <a href="#">VER TODAS</a>


                            <div className="arrows">
                                <button>
                                    <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.292892 7.29293C-0.0976296 7.68345 -0.0976333 8.31662 0.292893 8.70714L6.65684 15.0711C7.04737 15.4616 7.68053 15.4616 8.07106 15.0711C8.46158 14.6806 8.46158 14.0474 8.07106 13.6569L2.41422 8.00004L8.07107 2.34319C8.4616 1.95267 8.4616 1.3195 8.07108 0.928977C7.68055 0.538452 7.04739 0.538452 6.65686 0.928975L0.292892 7.29293ZM60 7.00012L1 7.00003L1 9.00003L60 9.00012L60 7.00012Z" fill="black"/>
                                    </svg>
                                </button>

                                <button>
                                    <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M59.7071 8.7072C60.0976 8.31668 60.0976 7.68351 59.7071 7.29299L53.3432 0.929016C52.9526 0.538491 52.3195 0.53849 51.9289 0.929014C51.5384 1.31954 51.5384 1.9527 51.9289 2.34323L57.5858 8.00009L51.9289 13.6569C51.5384 14.0475 51.5384 14.6806 51.9289 15.0711C52.3194 15.4617 52.9526 15.4617 53.3431 15.0712L59.7071 8.7072ZM-1.56916e-06 9L59 9.00009V7.00009L1.56916e-06 7L-1.56916e-06 9Z" fill="black"/>
                                    </svg>

                                </button>

                            </div>
                    </div>

                        

                    <img className="background-rectangle" src={rectangle} alt="" />

                    <img className="background-circle" src={circle} alt="" />



                </div>



                    <div className="moving_box">

                        <div className="blue_box">
                            <p>MINIMA <br />LISMO</p>
                        </div>
                                            
                        <img className="empty-cat-house" src={image1} alt="empty cat house"/>

                        <div className="button-text">
                            <p>Also reality power discussion buy-in closest goto model. Have protocol at long practices low-hanging data most driver's.</p>
                            <button>explorar</button>
                        </div>



                        <div className="cat_container">
                            <div className="product_with_animal">
                                <img className="cat-house" src={kittyHouse} alt="cat inside cat house" />
                                <button className="random-button">+</button>
                            </div>
                        </div>
                    </div>
            </div>



        </div>

    )
}


export default Colecoes;