import React from "react";
import './styles/Footer.css'


const year = new Date().getFullYear()

function Footer(){
    return(
        <div className="footer_page">
            <footer>
                <p>©{year}, GAT. TODOS OS DIREITOS RESERVADOS.</p>

                <p>GAT  LTDA. | R. Ondina Carvalheira Peixoto, 300 - Chácaras Palmeiras | Cataguases - MG | CEP 36774-550</p>
            </footer>
        </div>



    )
}

export default Footer;