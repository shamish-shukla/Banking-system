import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import "../Style/Footer.css";
import Adder from "./Adder";

function Feature(){
    return(
        <div className="first-header">
          <div className="part-first-header">
            <h2>Spark Banking System</h2>
            <div className="list-content">
              <ul>
                <li>
                  <Link to="/view">View Details</Link>
                </li>
                <li>
                  <Link to="/add">Add Customer</Link>
                </li>
                <li>
                  <Link to="/history">Transaction History</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
}
export default Feature;