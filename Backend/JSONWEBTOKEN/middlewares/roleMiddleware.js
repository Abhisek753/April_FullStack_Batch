module.exports=function roleAllowed(...allowedRoles){
    return (req,res,next)=>{
        const user=req.user ;
        console.log(user,"user from request");
        if(!user){
            return res.status(400).json({message:"No user role found, Access denied"});
        } 
         if(!allowedRoles.includes(user.role)) {
            return res.status(403).json({message:"Don't have permission"});
         }
         next();
    }
}