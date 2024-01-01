import Display from "./Display.js";

class Cart extends Display{
    constructor(parent, price){
        super(parent ,products);
        this.products = [];
        this.price = price;
        this.toShow =[]; 
    }
 
    
    productInfo(data){
        const {name , price}=data;
        const infoJsx = ` <div class="cart-information">
        <h4>${name}</h4>
        <p>$ ${price}</p>
        </div>
        `
        return infoJsx;

    }
    productcontrol(data , qty){
        const {id} = data ;
        const controlJSX = `
        <div id="cart-control">
        <div>
        <button  data-id = ${id}>-</button>
        <span  class="product-number">${qty}</span>
        <button data-id = ${id}>+</button>
      </div>
        
        <button data-id = ${id} class="remove">Remove</button>
     
      </div> `;
        return controlJSX;
    }
    handleEvent(event){
        const tagName = event.target.tagName;
        const id = event.target.dataset.id;
        const type = event.target.innerText;
        
        if(tagName !== "BUTTON") return;

        switch (type){
            case "+":
                this.increase(id);
            break;
            case "-":
                this.decrease(id);
            break;
            case "Remove":
                this.remove(id);
            break;    
                
        }

    }

    increase(id){
        const product = this.products.find(p => p.id === +id)
        this.products.push(product);
        this.showProducts();
    }

    decrease(id){
        const productIndex = this.products.findIndex(p => p.id === +id);
        this.products.splice(productIndex , 1);
        this.showProducts();
    }
    remove(id){
        const newProduct = this.products.filter(p => p.id !== +id);
        this.products = newProduct;
        this.showProducts();
    }

    calculateTotalPrice(){
        const total = this.products.reduce((acc , cur)=>(acc += cur.price),0)
        this.price.innerText = "$" + total;
    }


}
export default Cart;