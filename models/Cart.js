class Cart{
    constructor(parent, price){
        this.parent = parent;
        this.products = [];
        this.price = price;
        this.toShow =[]; 
        this.parent.addEventListener("click" , this);
    }
    showProducts(){
        this.toShow = [... new Set(this.products)];
        this.parent.innerHTML= "";
        this.toShow.forEach((product) => {
            const qty = this.products.filter(p => p.id === product.id).length;
            this.createCart(product , qty);

        });
        this.calculateTotalPrice();

    }
    createCart(data,qty){
      const cartEle = document.createElement("div");

      const imageEle = this.productImg(data);
      const infoEle = this.productInfo(data);
      const controlEle = this.productcontrol(data,qty);

      cartEle.innerHTML = imageEle;
      cartEle.innerHTML += infoEle;
      cartEle.innerHTML += controlEle;

      this.parent.appendChild(cartEle);
    }
    productImg(data){
        const {image , alt }= data;
        const imgJSX = `<img src=${image} alt = ${alt}/>`;
        return imgJSX;
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