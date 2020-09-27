import React from "react";
import { contacts } from "./Contacts";
import MaleIcon from '../../img/male.png';
import FemaleIcon from '../../img/female.png';

const genderIcons = {
    male: MaleIcon,
    female: FemaleIcon
}

export default function FullContact(props){
    const contactItem = contacts.find((item) => item.lastName === props.match.params.contactLastName);
    return(
        <div className="full-contact-wrapper">
            <div className="full-contact">
                <div className="contact-information">
                    <div>
                        <div className="name"><strong>{contactItem.firstName} {contactItem.lastName}</strong></div>
                        <div className="phone">{contactItem.phone}</div>
                    </div>
                    <div className="gender"><img src={genderIcons[contactItem.gender]} alt=""/></div>
                </div>
                <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}