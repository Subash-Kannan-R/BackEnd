export const authController = (req,res)=>{

    console.log(req.body);

    const {Title, Warrier_name, warrier_place, warrier_superpower, Warrire_exprience}  = req.body;

    try{
        res.status(200).json({
            message: "Data Received Successfully",
            data: { Title, Warrier_name, warrier_place, warrier_superpower, Warrire_exprience }
        });     
    }catch(error){
        res.status(404).json({
            message: "Server Error",
            error: error.message
        });
    }

}

export const paramsController = (req,res)=>{
    console.log(req.params);

    const {user_id} = req.params;

    try{
        if(user_id == "10"){
            res.status(200).json({
                name :"Power stone",
                message: "Params Received Successfully",
                data: {user_id}
            });
        }
        else if(user_id == "20"){
            res.status(200).json({
                name :"Time stone",
                message: "Params Received Successfully",
                data: {user_id}
            });
        }
        else if(user_id == "30"){
            res.status(200).json({
                name :"Sole stone",
                message: "Params Received Successfully",
                data: {user_id}
            });
        }
        else if(user_id == "40"){
            res.status(200).json({
                name :"Mine stone",
                message: "Params Received Successfully",
                data: {user_id}
            });
        }
    
    }
    catch(error){
        res.status(404).json({
            message: "Server Error",
            error: error.message
        });
    }
}



export const  queryController = (req,res)=>{
    console.log(req.query);
    const {id,name} = req.query;
    try{
        res.status(200).json({
         message: "Query Received Successfully",
            data: {id,name}
        });
    }catch(error){
        res.status(404).json({
            message: "Server Error",
            error: error.message
        });
    }
}



