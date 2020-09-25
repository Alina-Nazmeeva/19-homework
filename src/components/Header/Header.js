import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css";

export default function Header(){
    return(
        <div className="header">
            <NavLink exact to="/home" activeClassName="selected">HOME</NavLink>
            <NavLink exact to="/posts" activeClassName="selected">POSTS</NavLink>
            <NavLink exact to="/photos" activeClassName="selected">PHOTOS</NavLink>
            <NavLink exact to="/contacts" activeClassName="selected">CONTACTS</NavLink>
        </div>
    )
}