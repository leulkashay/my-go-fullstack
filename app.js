const express=require('express');

const app=express();

//cors 
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-origin',"*");
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content,Content-Type,Accepte,Authoriztion');
    res.setHeader('Access-Control-Allow-Methods','PUT,GET,DELETE,POST,UPDATE');
    next();
});
app.get('/api/stuff',(req,res,next)=>{
    const stuff=[
        {
            _id: "w34werewr",
            title: "apple",
            description: "fresh fruit",
            imageUrl: '',
            price: 40,
            userId: "235ewrwefsdsf43"
        },
        {
            _id: "we433werwr",
            title: "orange",
            description: "fresh fruit",
            imageUrl: '',
            price:50,
            userId: "tyuer634534wer43"
        }
    ]
    res.status(200).json(stuff);
})



module.exports=app;