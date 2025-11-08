import express from 'express';
import { authController } from '../Controller/authController.js';

const authRouter = express.Router();
authRouter.post("/data",authController);

export default authRouter;

//http://localhost:3000/api/auth/data