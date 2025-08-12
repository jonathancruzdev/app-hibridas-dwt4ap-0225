class Product {
    products = [];

    constructor(products=[]){
        this.products = products;
    }
    // Agrega un producto al array
    addProduct( product ){
        const id = crypto.randomUUID();
        this.products.push({
            id: id,
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock
        })
    }
    // Retorna la lista de productos
    getProducts(){
        return this.products;
    }
    getProductById(id){

    }

}

module.exports = Product;