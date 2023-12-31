import { fectchData } from "./utils/httpRes.js";
import Products from "./models/Products.js";

const productNode = document.getElementById("products");

async function render (){
    const productData =await fectchData();

    const productsInstance = new Products(productNode , productData);

}
document.addEventListener("DOMContentLoaded" , render);