import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact(props){
    return(
        <Link to={`/contacts/${props.lastName}`}>
            <div className="contact">
                <div className="name"><strong>{props.firstName} {props.lastName}</strong></div>
                <div className="phone">{props.phone}</div>
                <div className="gender"><img src={props.gender} alt=""/></div>
            </div>
        </Link>
    )
}