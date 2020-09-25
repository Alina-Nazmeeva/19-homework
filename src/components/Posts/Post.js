import React from 'react';
import LikeIcon from "../../img/LikeIcon.png";

export default function Post(props){
    return (
        <div className="post">
            <div className="post-header">
                <div className="avatar" style={{backgroundImage: `url(${props.author.avatar})`}}></div>
                <div className="post-text">
                    <p><strong className="name">{props.author.name}</strong><span>{props.author.nickname} • {props.date}</span></p>
                    <p className="post-content">{props.content}</p>
                </div>
            </div>
            <div className="photo" style={{backgroundImage: `url(${props.photo})`}}></div>
            <div className="post-footer">
                <img className="like-icon" src={LikeIcon} alt="like"/>
                <span>{props.likes}</span>
            </div>
        </div>
    )
}