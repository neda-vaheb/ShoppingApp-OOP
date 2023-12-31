import { fectchData } from "./utils/httpRes.js";

const productNode = document.getElementById("products");

async function render (){
    const productData =await fectchData();
}
document.addEventListener("DOMContentLoaded" , render);