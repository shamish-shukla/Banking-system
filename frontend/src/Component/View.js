import React, { useEffect, useState } from "react";
import axios from "axios";
import Feature from "./Feature";
import Footer from "./Footer";
import { Link } from "react-router-dom";


function View(){
    const[Details,setDetails]=useState([]);
    useEffect(()=>{
        axios.post("/view")
        .then(function(res){
            setDetails(res.data);
        })
        .catch(function(err){
            console.log(err);
        })
    })
    const data=Details.map(function(obj,count){
        return(
            <div>
                <table>
                    <tr>
                      <th>{count=count+1}</th>
                      <th>{obj.name}</th>
                      <th>{obj.email}</th>
                      <th>{obj.currentBalance}</th>
                      <th><Link to="/tran">Send</Link></th>
                    </tr>
                </table>
            </div>
            
        
        )
    });
    return(
        <div className="view-content">
            <Feature />
            <div className="second-view-content">
                <h2>Customer Details</h2>
                <table>
                   <tr>
                      <td>S.No</td>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Amount</td>
                      <td>Transaction</td>
                    </tr>
                </table>
                {data}
            </div>
            <Footer />
        </div> 
    );
}
export default View;