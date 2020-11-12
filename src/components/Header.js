import React, { useState } from "react";
import "./Header.css";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import { IconButton } from "@material-ui/core";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState();

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuSharpIcon />
        </IconButton>
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="img"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__right">
        <IconButton>
          <VideoCallSharpIcon className="header__icon" />
        </IconButton>
        <IconButton>
          <AppsSharpIcon className="header__icon" />
        </IconButton>
        <IconButton>
          <NotificationsSharpIcon className="header__icon" />
        </IconButton>
        <Avatar
          alt="AB"
          src="http://rovimusic.rovicorp.com/image.jpg?c=k-D9Tj9imPPFAdJCbBAxxpenm3SILRn6rs9FvHXYhO8=&f=6"
        />
      </div>
    </div>
  );
}

export default Header;
