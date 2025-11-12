import express from "express";
import { insertproduct } from "../Controller/productController.js";

const productRouter = express.Router();

productRouter.post("/addproduct", insertproduct);







export default productRouter;



//https://localhost:3000/api/products/addproduct