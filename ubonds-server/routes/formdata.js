const router= require('express').Router();
const data=require('../data/tableData.json');
const fs=require('fs');


router.get('/',(req,res)=>{
    try {
        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json({message:error.message});    
    }
})


router.delete('/',(req,res)=>{
    try {

        const ids=req.body.ids;
        console.log(ids);
        ids.forEach(id => {
            const index=data.findIndex(m=>m.id==id);
            data.splice(index,1);
            fs.writeFileSync('./data/tableData.json',JSON.stringify(data,null,2));
        })
        res.status(200).json({message:'Member deleted successfully'});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})


router.post('/',(req,res)=>{
    try {
        const newMember={
            "id":data.length+1,
            "Name": req.body.Name,
            "description": req.body.description,
        }
        data.push(newMember);

        fs.writeFileSync('./data/tableData.json',JSON.stringify(data,null,2));
        res.status(200).json({message:'Member added successfully'});
    } catch (error) {
        res.status(500).json({message:error.message});
    }

})


router.put('/:id',(req,res)=>{
    try {
        const member=data.find(m=>m.id==req.params.id);
        if(!member) res.status(404).json({message:'Member not found'});
        member.Name=req.body.Name;
        member.description=req.body.description;

        fs.writeFileSync('./data/tableData.json',JSON.stringify(data,null,2));
        res.status(200).json({message:'Member updated successfully'});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})


module.exports=router;