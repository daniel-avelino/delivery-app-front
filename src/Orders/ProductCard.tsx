import { ReactComponent } from "*.svg";
import React from "react";
import { ReactComponent as Pizza } from "./pizza.svg"
function ProductCard() {
    return (
        <div className="order-card-container">
            <h3 className="order-card-title">
                Pizza Calabresa
            </h3>
            <Pizza className="order-card-image"></Pizza>
            <h3 className="order-card-price"> R$59,90 </h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
                <p>Descrição da pizza</p>
            </div>
        </div>
    )
}

export default ProductCard;
