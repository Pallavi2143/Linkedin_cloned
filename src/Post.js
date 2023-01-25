import { Avatar } from '@material-ui/core'
import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./css/Post.css"; 
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Post({name , description , message,photoURL}) {
  return (
    <div className='posts'>
    <div className="post__header">
        <div className="post__headerLeft">
        <Avatar src={photoURL}/>
        <div className="post__profile_details">
         <h3>{name}</h3>
         <p>{description}</p>
        </div>
     </div>
        <MoreVertIcon/>
     </div>
     <div className="post__body">
     <p>{message}</p>
     </div>
     <div className="post__footer">
    <div className="post__footer__options">
         <ThumbUpAltIcon/>
    <span>Like</span>
       </div>

     <div className="post__footer__options">
      <CommentIcon/>
         <span>Comment</span>
     </div>

     <div className="post__footer__options">
        <ShareIcon/>
         <span>Share</span>
      </div>

       <div className="post__footer__options">
         <SendIcon/>
         <span>Send</span>
       </div>

     </div>
    </div>
  )
}

export default Post