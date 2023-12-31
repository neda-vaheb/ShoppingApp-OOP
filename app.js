import { fetchData } from "./utils/httpRes.js";
import Products from "./models/Products.js";
import Cart from "./models/Cart.js";


const productNode = document.getElementById("products");
const cartNode = document.getElementById("cart-list");
const totalPrice = document.getElementById("total-price").querySelector("span");

async function render (){
    const productData =await fetchData();

    const cartInstance = new Cart(cartNode,totalPrice);
    const productsInstance = new Products(productNode , productData,cartInstance);
    productsInstance.showProducts();

}
document.addEventListener("DOMContentLoaded" , render);