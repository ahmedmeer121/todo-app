import express from 'express';
import dotenv  from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();

app.use(express.json()); //allow us to accept json data in the body or client

const PORT =process.env.PORT || 3000;

//routes
app.use("/api/products",productRoutes )

  app.listen(PORT, async () => {
  await connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});

