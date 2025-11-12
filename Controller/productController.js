import productlist from "../model/productlist.js";

export const insertproduct = async(req,res) =>{
       try{
            const {productname,productprice,productquantity} = req.body;
            const insertdata = await productlist.create({
                productname,
                productprice,
                productquantity
            })
             res.status(200).json({
                message: "Product Inserted Successfully",
                data: insertdata
            })
    }catch(error){
        res.status(404).json({
            message: "Product NotInserted Successfully",
            error: error.message
        })
    }
}