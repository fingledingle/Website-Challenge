import React, { useState } from "react";
import './nav.css'
import cart from '../assets/cart.png';
import notification from '../assets/notification.png';
import user from '../assets/user.png';
import logo from '../assets/logo_nav.png';
import menu from '../assets/menu.png';



// const [notificacao, setNotificacao] = useState(true);

function NavBar(){
    return(
        <>
            <nav>
                <div className="nav_page">
                    <div className="lado_esquerdo">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>


                        <a href="#" className="produtos">
                            <img src={menu} alt="" />
                            <p>produtos</p>
                        </a>


                        <a href="#" className="colecoes">
                            <img src={menu} alt="" />
                            <p>coleções</p>
                        </a>
                    </div>

                    <div className="lado_direito">
                        <div className="anchors">
                            <p>
                                <a href="">blog</a>
                            </p>
                            <p>
                                <a href="">lookbook</a>
                            </p>
                            <p>
                                <a href="">sobre a Gat</a>
                            </p>
                            <p>
                                <a href="">wishlist</a>
                            </p>
                        </div>


                        <div className="search">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <form action="">
                                <input type="text" placeholder="digite aqui o que procura" />
                            </form>
                        </div>

                        <div className="user">
                            <img src={user} alt="" />
                        </div>

                        <div className="carrinho">
                            <img src={cart} alt="" />
                            <img src={notification} alt="" />
                        </div>
                    </div>

                </div>

            </nav>
        
        </>
    )
}


export default NavBar;