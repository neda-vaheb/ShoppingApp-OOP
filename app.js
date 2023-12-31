import { fetchData } from "./utils/httpRes.js";
import Products from "./models/Products.js";

const productNode = document.getElementById("products");

async function render (){
    const productData =await fetchData();

    const productsInstance = new Products(productNode , productData);
    productsInstance.showProducts();

}
document.addEventListener("DOMContentLoaded" , render);