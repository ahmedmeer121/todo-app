import express from 'express';
import dotenv  from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();

app.use(express.json()); //allow us to accept json data in the body or client

//routes
app.use("/api/products",productRoutes )

  app.listen(3000, async () => {
  await connectDB();
    console.log(`Server is running on http://localhost:3000`);
});

