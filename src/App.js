
import React from "react";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widget from "./Widget";

function App() {
  return (
    <div className="app_wrapper">
     {/* <h1>Welcome to my Project</h1> */}
     <Header/>
     <div className="app_body" style={{boxSizing:"border-box" , width:"100%" , background:"#eef8"}}>
     <Sidebar/>
     <Feed/>
     <Widget/>
          </div>
    </div>
  );
}

export default App;
