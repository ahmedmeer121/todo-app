import { getAllProducts , createProduct , updateProduct , deleteProduct} from "../controller/product.controller.js";
import express from 'express';
const router = express.Router();


// get request to fetch all products
router.get('/',getAllProducts)

// post request mens to create a new product
router.post('/', createProduct);

//put request to update a product by id
router.put("/:id", updateProduct);

// delete request to delete a product by id
router.delete("/:id", deleteProduct)

export default router;