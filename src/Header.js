import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./css/Header1.css";
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/Business';
import MessageIcon from '@material-ui/icons/Message';
import NotificationIcon from '@material-ui/icons/Notifications';
import {Avatar} from "@material-ui/core";



function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
                        <div className='header__logo'>
                             <img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png'/>
                        </div>
                        <div className='header__search'>
                        <SearchIcon/>
                        <input type="text" placeholder='search'/>
                        </div>
        </div>
        <div className='header__right'>
          <HeaderOptions Icon={HomeIcon} title="Home"/>
          <HeaderOptions Icon={PeopleIcon} title="My Network"/>
          <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOptions Icon={MessageIcon} title="Messaging"/>
          <HeaderOptions Icon={NotificationIcon} title="Notification"/>
          <HeaderOptions avatar={Avatar} title="pallavi sarve"/>



        </div>
    </div>
  )
}

export default Header