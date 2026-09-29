
const User = require("../models/User");
const Order = require("../models/Order");
const getUsersWithOrderSummary=async(req,res,next)=>{
    try{
        const summary=await User.aggregate([
            {
                $lookup:{
                    from:"orders",
                    localField:"_id",
                    foreignField:"user",
                    pipeline:[
                        {
                            $addFields:{
                                total:{
                                    $sum:{
                                        $map:{
                                            input:"$items",
                                            as:"item",
                                            in:{$multiply:["$$item.quantity","$$item.unitPrice"]}
                                        }
                                    }
                                }
                            }
                        }
                    ],
                     as:"orders"
                }
               
            },
            {
                $addFields:{
                    totalOrders:{$size:"$orders"},
                    totalAmountSpent:{$sum:"$orders.total"}
                },
            }
        ])
        res.json(summary);
    } catch (error) {
        next(error);
    }
}

const getOrders=()=>{

}
module.exports={getUsersWithOrderSummary,getOrders}