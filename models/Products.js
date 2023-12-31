class Products{
    constructor(parent , products,cart){
        this.parent = parent;
        this.products = products;
        this.cart = cart;
        this.parent.addEventListener("click" , this);


    }
    showProducts(){
        this.products.forEach(product => {
            this.createCard(product);
            
        });
    }
    createCard(data){
        const cardEle = document.createElement("div");

        const imageEle = this.productImg(data);
        const infoEle = this.productInfo(data);

        cardEle.innerHTML = imageEle ; 
        cardEle.innerHTML +=infoEle;

        this.parent.appendChild(cardEle);



    }

    productImg(data){
        const {image , alt} = data;
        const imgJSX = `<img src=${image} alt=${alt}/>`;

        return imgJSX;

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