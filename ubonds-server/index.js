const express=require('express');
const cors=require('cors');
const  membersDetails=require('./routes/members-details');
const  mainmember=require('./routes/mainmember');
const  formdata=require('./routes/formdata');
const app=express();





app.use(express.json());
app.use(cors());
app.use('/api/members-details',membersDetails);
app.use('/api/mainmember',mainmember);
app.use('/api/formdata',formdata);


app.listen(8000, () => {
    console.log("Server is running on 8000");
})