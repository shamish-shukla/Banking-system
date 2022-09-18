import React from "react";
import { useState } from "react";
import Feature from "./Feature";
import Footer from "./Footer";
import axios from "axios";

function Send(){
    const[amount,setamount]=useState();
    const[sname,setsname]=useState('');
    const[rname,setrname]=useState('');
    function receiver(event){
        setrname(event.target.value);
    }
    function money(event){
        setamount(event.target.value);
    }
    function Transaction(){
        const customer={sname:sname,rname:rname,amount:amount};
        axios.post('/send',customer)
        .then(function(res){
            console.log("success")
        })
        .catch(function(err){
            console.log(err);
        })
        setsname('');
        setrname('');
        setamount();
    }
    return(
        <div>
            <Feature />
            <form className="send-from">
                <h3>Transaction form</h3>
                <input type="text" placeholder="Enter the sender name" value={sname} onChange={(e)=>setsname(e.target.value)} /><br></br>
                <input type="text" placeholder="Enter the receiver name" value={rname} onChange={receiver}/><br></br>
                <input type="text" placeholder="Enter the amount to send" value={amount} onChange={money} /><br></br>
                <button onClick={Transaction}>Submit</button>
            </form>
            <Footer />
        </div>
    )
}
export default Send;