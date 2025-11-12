import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/authRoutes.js';
import cors from 'cors';
import connectDB from './Config/db.js';
import productRouter from './routes/productRouter.js';

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);

app.listen(PORT,() =>{
    
    console.log(`Run Sucess https://localhost:${PORT}`);
    
})


// https://localhost:3000/api/auth