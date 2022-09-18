import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import View from "./Component/View";
import "../src/Style/View.css";
import Body from "./Component/Body";
import "../src/Style/Body.css";
import Adder from "./Component/Adder";
import "../src/Style/Adder.css";
import Transaction from "./Component/Transaction";
import "../src/Style/Transaction.css";
import Send from"./Component/Send";
import "../src/Style/Send.css";


function App(){
  return(
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="view" element={<View />}/>
          <Route path="add" element={<Adder />} />
          <Route path="history" element={<Transaction />} />
          <Route path="tran" element={<Send />} />
        </Routes>
      </Router>
   
  )
}
export default App;