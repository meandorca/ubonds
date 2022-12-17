const router= require('express').Router();
const data=require('../data/members-details.json');
const fs=require('fs');


router.get('/',(req,res)=>{
    try {
       
        res.status(200).json(data);
    } catch (error) {

        res.status(500).json({message:error.message});
        
    }
})


module.exports=router;