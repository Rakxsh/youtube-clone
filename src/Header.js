 import React from 'react'
 import './Header.css';
 import MenuSharpIcon from '@material-ui/icons/MenuSharp';
 import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp'; 
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import { Avatar } from '@material-ui/core';



function Header() {
   return (
     <div className='header'>
     <div className='header__left' >
      <MenuSharpIcon/>
      <img 
      className='header_logo'
      src="https://connectedcommunityschools.org/wp-content/uploads/2020/07/New-YouTube-Logo-980x595-1.jpg"
       alt=''
       />
       </div>
       <div className='header__input'>
       <input placeholder='Search' type="text"/>
       <SearchSharpIcon className='header__inputButton'/>
         </div>
<div className='header__icons'>
       <VideoCallSharpIcon/>
       <AppsSharpIcon/>
       <NotificationsSharpIcon/>
       <Avatar 
       img=""
       alt='rakesh Sharp'
       />
     </div>

     </div>
   )
 }
 
 export default Header