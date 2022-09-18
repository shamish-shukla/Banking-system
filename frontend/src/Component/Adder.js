import axios from "axios";
import React from "react";
import {useState} from "react";
import Feature from "./Feature";
import Footer from "./Footer";

function Adder(){
    const[name,setname]=useState('');
    const[email,setemail]=useState('');
    const[amount,setamount]=useState();
    function insert(){
        var custdata={name:name,email:email,amount:amount};
        axios.post('/add',custdata)
        .then(function(res){
            console.log("successful Added");
        })
        .catch(function(err){
            console.log("Added not successful");
        })
        
    }
    return(
        <div className="add-customers">
            <Feature />
            <div className="header-form">
              <form>
                <h3>Customer Details</h3>
                <input type="text" value={name} placeholder="Enter the customer name" onChange={(e)=>setname(e.target.value)} /><br></br>
                <input type="email" value={email} placeholder="Enter the email id" onChange={(e)=>setemail(e.target.value)} /><br></br>
                <input type="text" value={amount} placeholder="Enter the account money" onChange={(e)=>setamount(e.target.value)} /><br></br>
                <button onClick={insert}>Add Customer</button>
              </form>
            </div>
            <Footer />
        </div>
    );
}
export default Adder;