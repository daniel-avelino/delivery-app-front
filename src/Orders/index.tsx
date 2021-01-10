import React from "react";
import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import "./styles.css"

function Orders() {
    return (
        <div className="order-container">
            <StepsHeader />
            <ProductsList />
        </div>
    )
}

export default Orders;