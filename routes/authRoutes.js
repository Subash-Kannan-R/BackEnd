import express from 'express';
import { authController, paramsController, queryController } from '../Controller/authController.js';

const authRouter = express.Router();
authRouter.post("/data",authController);
authRouter.get("/user_id/:user_id",paramsController);
authRouter.get("/datas",queryController)

export default authRouter;

//BODY->    //http://localhost:3000/api/auth/data
//PARAMS->   //http://localhost:3000/api/auth/user_id/
//QUERY->    //http://localhost:3000/api/auth/datas