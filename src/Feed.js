import React from 'react'
import { Avatar } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TodayIcon from '@material-ui/icons/Today';
import AssignmentIcon from '@material-ui/icons/Assignment';
import "./css/Feed.css";
import Post from './Post';


function Feed() {
   return (
      <div className="feed">
         <div className="feed__input">
            <div className="feed__form">

               <Avatar src='./image/me.jpg' />
               <form>
                  <input type="text" placeholder="start a post" />
                  <input type="submit" />
               </form>
            </div>
            <div className="feed__options">
               <div className="option">
                  <PhotoIcon style={{ color: '#70b5f9' }} />
                  <span>Photo</span>
               </div>

               <div className="option">
                  <YouTubeIcon style={{ color: '#7fc15e' }} />
                  <span>Video</span>
               </div>

               <div className="option">
                  <TodayIcon style={{ color: '#e7a33e' }} />
                  <span>Event</span>
               </div>

               <div className="option">
                  <AssignmentIcon style={{ color: '#fc9295' }} />
                  <span>Write Articale</span>
               </div>
            </div>
         </div>
         <Post name="Pallavi Sarve" description="This is test" message="We are learning react js" photoURL="http://localhost:3000/image/me.jpg" />
         <Post name="Pallavi Sarve" description="This is test" message="We are learning react js" photoURL="http://localhost:3000/image/me.jpg" />
         <Post name="Pallavi Sarve" description="This is test" message="We are learning react js" photoURL="http://localhost:3000/image/me.jpg" />
         <Post name="Pallavi Sarve" description="This is test" message="We are learning react js" photoURL="http://localhost:3000/image/me.jpg" />
         <Post name="Pallavi Sarve" description="This is test" message="We are learning react js" photoURL="http://localhost:3000/image/me.jpg" />
         <Post name="Pallavi Sarve" description="This is test" message="We are learning react js" photoURL="http://localhost:3000/image/me.jpg" />


      </div>
   )
}

export default Feed;