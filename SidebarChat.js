import React from 'react';
import './SidebarChat.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function SidebarChat() {
  return (
    <div className="sidebarChat">
        <AccountCircleIcon />
        <div className="sidebarChat__info">
            <h3>Channel Name</h3>
            <p>Last message sent...</p>
            <small>timestamp</small>
        </div>
    </div>
  );
}

export default SidebarChat;
