import React from "react";
import Feature from "./Feature";
import Footer from "./Footer";
import {useEffect,useState} from "react";
import axios from "axios";

function Transaction(){
    const[Details,setDetails]=useState([]);
    useEffect(()=>{
        axios.post('/transfer')
        .then(function(res){
            setDetails(res.data);
        })
        .catch(function(err){
            console.log(err);
        })
    });
    const transfer=Details.map(function(obj){
        return(
            <table className="data-table">
                <tr>
                    <th>{obj.rname}</th>
                    <th>{obj.sname}</th>
                    <th>{obj.money}</th>
                </tr>
            </table>
        )
    })
    return(
        <div className="tran-content">
            <Feature />
            <div className="mid-tran">
                <h2>Transaction Details</h2>
                <table>
                   <tr>
                      <td>Reciever Name</td>
                      <td>Sender Name</td>
                      <td>Transaction Amount</td>
                   </tr>
                </table>
                {transfer}
            </div>
            <Footer/>
        </div>
    )
}
export default Transaction;