const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/banks",function(err){
    if(err)
    {
        console.log("Connections Failed");
    }
    else
    {
        console.log("Connection Successful");
    }
})

const data=mongoose.model('customer',{name:String,email:String,currentBalance:Number});
const transfer=mongoose.model('Transaction',{sname:String,rname:String,money:Number});

app.post('/send',function(req,res){
    var sname=req.body.sname;
    var rname=req.body.rname;
    var amount=req.body.amount;
    var tran=new transfer({sname:sname,rname:rname,money:amount});
    tran.save(function(err){
        if(err)
        {
            console.log("Not addedd to transaction database");
        }
        else
        {
            console.log("Data successfully added");
        }
    });
    data.updateOne({name:rname},{$inc:{currentBalance:amount}},function(err){
        if(err)
        {
            res.send("Not Updated successful");
        }
        else
        {
            res.send("Updated successful");
        }

    })
    data.updateOne({name:sname},{$inc:{currentBalance:-amount}},function(err){
        if(err)
        {
            console.log("Updated successful");
        }
        else
        {
            console.log("Not updated successful");
        }
    })
})
app.post('/add',function(req,res){
    var name=req.body.name;
    var email=req.body.email;
    var amount=req.body.amount;
    var customer=new data({name:name,email:email,currentBalance:amount})
    customer.save(function(err){
        if(err)
        {
            res.send("Data not Added");
        }
        else
        {
            res.send("Data Added");
        }
    })
})

app.post("/view",function(req,res){
    data.find({},function(err,documents){
        if(err){
            console.log("Error in transporting");
        }
        else
        {
            res.send(documents);
        }
    })
})
app.post('/transfer',function(req,res){
    transfer.find({},function(err,documents){
        if(err)
        {
            res.send(err);
        }
        else
        {
            res.send(documents);
        }
    })
})

app.listen(7000,function(){
    console.log("Connected successful");
})