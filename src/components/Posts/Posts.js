import React, { Component } from "react";
import './Post.css';
import Post from "./Post";
import Bikini from "../../img/Bikini.jpg";
import BikiniPost from "../../img/BikiniPost.jpg";
import Milka from "../../img/Milka.jpg";
import MilkaPost1 from "../../img/MilkaPost1.jpg";
import MilkaPost2 from "../../img/MilkaPost2.jpg";
import Murka from "../../img/Murka.jpg";
import MurkaPost from "../../img/MurkaPost.jpg";

const posts = [{
    author: {
      name: "Bikini",
      avatar: Bikini,
      nickname: "@bikinyator"
    },
    content: "My sister and me",
    photo: BikiniPost,
    date: "26 sept.",
    likes: 444
  }, {
    author: {
        name: "Milka",
        avatar: Milka,
        nickname: "@milkyway"
      },
      content: "Human bought me new toy!",
      photo: MilkaPost1,
      date: "24 sept.",
      likes: 598
  }, {
    author: {
        name: "Milka",
        avatar: Milka,
        nickname: "@milkyway"
      },
      content: "My kids",
      photo: MilkaPost2,
      date: "14 sept.",
      likes: 564
  }, {
    author: {
      name: "Murka",
      avatar: Murka,
      nickname: "@murembo"
    },
    content: "Do NOT step outside your comfort zone",
    photo: MurkaPost,
    date: "26 sept.",
    likes: 546
  }
];

export default class Posts extends Component{
    render(){
        return(
            <div className="posts-page">
                <div className="posts-wrapper">
                    {posts.map((post, index) => {
                        return <Post {...post} key={index} />
                    })}
                    
                </div>
            </div>
            
        )
    }
}