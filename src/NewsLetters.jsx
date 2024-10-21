import React from "react";
import Botao from "./Components/Botao";
import Footer from './Footer'
import catImage from './assets/newsletter_kitty.jpeg'
import './styles/NewsLetter.css'
import payment1 from './assets/payment1.png';
import payment2 from './assets/payment2.png';
import payment3 from './assets/payment3.png';
import payment4 from './assets/payment4.png';
import payment5 from './assets/payment5.png';
import payment6 from './assets/payment6.png';
import payment7 from './assets/payment7.png';
import cert1 from './assets/cert1.png';
import cert2 from './assets/cert2.png';
import cert3 from './assets/cert3.png';
import logo from './assets/logo.png';




function NewsLetter(){
    const whatsapp = '(51) 9999-9999'
    const email = 'ajuda@gat.com.br'


    return(
        <section className="newsletter">
            <div className="newsletter_page">
                <span className="random_divider"></span>

                <div className="top">
                    <div className="cat_container">
                        <img className="newsletter_cat" src={catImage} alt="image of a cat" />
                    </div>

                    <div className="newsletter_box">
                        <h2>NEWSLETTER</h2>
                        <div className="form_and_info">
                            <div className="info">
                                <p>CADASTRE-SE E GANHE 10% OFF NA SUA PRIMEIRA COMPRA</p>
                                <p>Seja a primeira a receber lançamentos, novidades e promoções.</p>
                            </div>
                            
                            <form action="">
                                <div className="nome_box">
                                        <div className="nome">
                                            <label htmlFor="pet">NOME DO SEU PET</label>
                                            <input type="text" />
                                        </div>
                                    <span className="divider"></span>

                                </div>
                                <div className="email_box">
                                        <div className="email">
                                            <label htmlFor="pet">SEU EMAIL</label>
                                            <input type="text" />
                                        </div>
                                        <span className="divider"></span>

                                </div>

                                <button className="submit">
                                    CADASTRAR
                                </button>
                                


                            </form>
                        </div>
                        
                    </div>

                </div>

                <div className="bottom_box">
                    <div className="logo_box">
                        <img src={logo} alt="" />  
                    </div>

                    <div className="left">
    
                        <div className="categorias">
                            <ul>
                                <li>
                                    <a href="">produtos</a>
                                </li>
                                <li>
                                    <a href="">colecoes</a>
                                </li>
                                <li>
                                    <a href="">lookbook</a>
                                </li>
                                <li>
                                    <a href="">sobre</a>
                                </li>
                                <li>
                                    <a href="">wishlist</a>
                                </li>
                                <li>
                                    <a href="">blog</a>
                                </li>
                            </ul>
                        </div> 

                        <div className="bottom_left">
                            <div className="formas_de_pagamento">
                                <p>formas de pagamento</p>
                                <ul>
                                    <li>
                                        <img src={payment1} alt="" />
                                    </li>

                                    <li>
                                        <img src={payment2} alt="" />
                                    </li>

                                    <li>
                                        <img src={payment3} alt="" />
                                    </li>

                                    <li>
                                        <img src={payment4} alt="" />
                                    </li>

                                    <li>
                                        <img src={payment5} alt="" />
                                    </li>

                                    <li>
                                        <img src={payment6} alt="" />
                                    </li>

                                    <li>
                                        <img src={payment7} alt="" />
                                    </li>
                                </ul>
                            </div>

                            <div className="certificados">
                                <p>CERTIFICADOS E SEGURANÇA</p>
                                <ul>
                                    <li>
                                        <img src={cert1} alt="" />
                                    </li>

                                    <li>
                                        <img src={cert2} alt="" />
                                    </li>

                                    <li>
                                        <img src={cert3} alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="ajuda">
                            <p>ajuda</p>
                            <ul>
                                <li>FAQ</li>
                                <li>Sobre novos produtos</li>
                                <li>Trocas e devoluções</li>
                                <li>Entregas</li>
                                <li>Indique e ganhe</li>
                                <li>Garantias</li>

                            </ul>
                        </div>

                        <div className="contatos_redes">
                            <div className="contato">
                                <p>contato</p>
                                <p>WhatsApp - {whatsapp}</p>
                                <p>E-mail - {email}</p>

                            </div>

                            <div className="redes">
                                <p>REDES SOCIAIS</p>
                                <ul>
                                    <li>
                                        <i class="fa-brands fa-instagram"></i>
                                    </li>
                                    <li>
                                        <i class="fa-brands fa-youtube"></i>
                                    </li>
                                    <li>
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </li>
                                    <li>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    

                </div>
                {/* <span className="end">
                    <Footer/>
                </span> */}
            </div>
        </section>

    )
}

export default NewsLetter;