import React from 'react'
import "./css/Sidebar.css";
import {Avatar} from "@material-ui/core";
function Sidebar() {
  return (
    <div className='sidebar'>
    <div className='sidebar__profile'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShg_WH3T_eoKPs7bFvKIh7qB8Ohk_yrnkz1w&usqp=CAU'/>
        <div className='profile__details'>
            <Avatar src='./image/me.jpg'/>
            <h4>Pallavi Sarve</h4>
            <p>React Developer</p>
        </div>
        <div className="profile__stats">
            <span>Who viewed your profile</span>
            <span className="stat__number">20</span>

        </div>
        <div className="profile__stats">
            <span>Connection <br/><b>Grow your Network</b></span>
            <span className="stat__number">150</span>

        </div>
        <div className="sidebar__recent">
            <p>Recent</p>
            <p className='hash'><span># </span> branding</p>
            <p className='hash'><span># </span> marketing</p>
            <p className='hash'><span># </span> webdevelopment</p>
            <p className='hash'><span># </span> programming</p>
            <p className='hash'><span># </span> reactjs</p>
            <p className='hash'><span># </span> reduxtoolkit</p>
         </div>
    </div>
    </div>
  )
}

export default Sidebar;