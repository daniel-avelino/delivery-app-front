import axios from "axios";

const url = "http://localhost:8080";

export function fetchProducts() {
    return axios(url + "/products")
}