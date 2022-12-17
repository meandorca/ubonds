const router= require('express').Router();
const data=require('../data/members-allinfo.json');

router.get('/',(req,res)=>{
    try {
        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json({message:error.message});    
    }
})


router.get('/:id',(req,res)=>{
    try {
        const member=data.find(m=>m.id==req.params.id);
        if(!member) res.status(404).json({message:'Member not found'});
        res.status(200).json(member);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

module.exports=router;