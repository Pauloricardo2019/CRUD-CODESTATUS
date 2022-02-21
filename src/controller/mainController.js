const product = [{
    "p_name": "notebook",
    "p_description": "i7 8ª, 8gb ram, 1tb memory",
    "p_price": 4500.00,
    "p_quantity": 20,
}];

const mainController = {

    async createProduct(req , res){
        const newProduct = req.body;
        //Consultar no banco IF()

        try {
            await product.push(newProduct)
            return res.status(201).json(product)

        } catch (err) {
            return res.status(500).json({message: "Error to create "})
        }

    },

    async getProduct(req, res){

        try {
            const productMin = await product.map((p) => p.p_name)

            return res.status(200).json(productMin)
        } catch (err) {
            return res.status(401).json({message: "Don't have product"})
        }

    },

    async getProductById(req, res){
        const {productId} = req.params

        try {
            return res.status(200).json(product[productId])
        } catch (err) {
            return res.status(401).json({message: "Don't have product"})
        }

    },

    async updateProduct(req, res){
        const newProduct = req.body
        const {productId} =  req.params

        try {
            product[productId] = await newProduct;
            
            return res.status(200).json(product[productId])
        } catch (err) {
            
            return res.status(400).json({message: "Failed in change this product"})
        }
 
    },

    async deleteProduct(req, res){
        const {productId} = req.params

        try{
           await product.splice(productId, 1)

            return res.status(200).json({messagem: "Product deleted for success "})
        }catch(err){

            return res.status(400).json({message: "Failed for deleted this product"})
        }

    },

}

module.exports =  mainController