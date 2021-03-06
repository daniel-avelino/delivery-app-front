import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import OrderLocation from "./OrderLocation";
import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import "./styles.css"
import { OrderLocationdata, Product } from "./types";

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);

    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() => {
        fetchProducts().then(response => setProducts(response.data)).catch(error => alert(error))
    }, [])


    return (
        <div className="order-container">
            <StepsHeader />
            <ProductsList products={products} />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </div>
    )
}

export default Orders;