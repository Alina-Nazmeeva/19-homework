import React, { Component } from "react";
import "./Photos.css";

const photos = [
    "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/580871/pexels-photo-580871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3408552/pexels-photo-3408552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/392586/pexels-photo-392586.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/259707/pexels-photo-259707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/173388/pexels-photo-173388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/910307/pexels-photo-910307.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
];

export default class Photos extends Component{
    state = {
        photos: photos
    }

    getColumns(){
        const firstColoumn = [];
        const secondColoumn = [];
        const thirdColoumn = [];
        this.state.photos.forEach((photo, index) => {
            switch(index % 3){
                case 0:
                    firstColoumn.push(photo);
                    break;
                case 1:
                    secondColoumn.push(photo);
                    break;
                case 2:
                    thirdColoumn.push(photo);
                    break;
                default:
                    break;
            }
        });
        return [firstColoumn, secondColoumn, thirdColoumn];
    }

    render(){
        return(
            <div className="photos-wrapper">
                <div className="column">
                    {this.getColumns()[0].map((photo, index) => {
                        return <img src={photo} className="photos" key={index} alt="something" />
                    })}
                </div>
                <div className="column">
                    {this.getColumns()[1].map((photo, index) => {
                        return <img src={photo} className="photos" key={index} alt="something" />
                    })}
                </div>
                <div className="column">
                    {this.getColumns()[2].map((photo, index) => {
                        return <img src={photo} className="photos" key={index} alt="something" />
                    })}
                </div>
            </div>
        )
    }
}