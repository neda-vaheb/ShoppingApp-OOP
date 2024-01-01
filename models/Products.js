import Display from "./Display.js";

class Products extends Display{
    constructor(parent , products,cart){
        super(parent , products);
        this.cart = cart;
    }
    showProducts(){
        this.products.forEach(product => {
            this.createCart(product);
            
        });
    }
  
  
    productInfo(data){
        const{name , price , id} = data;
        const infoJsx = `
        <div class="information">
        <h3>${name}</h3>
        <div>
        <span>$ ${price}</span>
        <button data-id=${id}>+</button>
        </div>
        </div>
        `
        return infoJsx;
    }
    handleEvent(event){
        const element = event.target;
        if(element.tagName === "BUTTON"){
            this.addToCart(element.dataset.id);
        }

    }
    addToCart(id){
        const product = this.products.find((p)=> p.id === +id);
        this.cart.products.push(product);
        this.cart.showProducts();

    }
}

export default Products;