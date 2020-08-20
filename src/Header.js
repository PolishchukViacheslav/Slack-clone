import React, { useState } from 'react';
import './Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/Help";
import { useStateValue } from './StateProvider';


function Header() {
  const [{ user }] =useStateValue();
  const [isFocused, setIsFocused] = useState(false);
  console.log(isFocused);
  
  const handleSearchFocus = () => setIsFocused(!isFocused);

  return (
    <div className="header">
      <div className="header__left">
        <Avatar 
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className={`header__search ${isFocused ? 'header__search--focused' : ''}`} onFocus={handleSearchFocus} onBlur={handleSearchFocus}>
        <SearchIcon />
        <input placeholder="Search" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  )
}

export default Header
