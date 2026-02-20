import express from 'express';
import dotenv  from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/Product.model.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(express.json()); //allow us to accept json data in the body or client

// get request to fetch all products
app.get('/api/products', async (req, res) => {
  try{
    const products = await Product.find({});
    res.status(201).json({ success: true, data: products});
  }catch(error){
    console.error("error in fetching products", error.message);
    res.status(500).json({ failure: false, message: 'Server Error' });
  }
})


// post request mens to create a new product
app.post('/api/products', async (req, res) => {
  const product = req.body; //user will send this data

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  const newProduct = new Product(product)

  try{
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  }catch(error){
    console.error("error in creating product", error.massahe);
    res.status(500).json({ success: false, message: 'Server Error' });
  }

  // res.send('server is running');
});


//put request to update a product by id
app.put("/api/products/:id", async (req, res) =>{
  const {id} = req.params;
  const product = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({ success: false, message: 'Invalid product ID' });
  }

  try{
    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true});
    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.status(200).json({ success: true, data: updatedProduct });
  }catch(error){
    console.error("error in updating product", error.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }

});

// delete request to delete a product by id
app.delete("/api/products/:id", async (req, res) =>{
  const{id} = req.params;
  try{
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  }catch(error){
    console.error("error in deleting product", error.message);
    res.status(404).json({ success: false, message: "product not found"})
  }
  // console.log("deleting product with id", id);
})

  app.listen(3000, async () => {
  await connectDB();
    console.log(`Server is running on http://localhost:3000`);
});

