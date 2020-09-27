import React, {Component} from 'react';
import Contact from './Contact';
import './Contacts.css';
import SearchPanel from './SearchPanel';
import MaleIcon from '../../img/male.png';
import FemaleIcon from '../../img/female.png';

export const contacts = [{
    id: 1,
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    id: 2,
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    id: 3,
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    id: 4,
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    id: 5,
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    id: 6,
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

const genderIcons = {
    male: MaleIcon,
    female: FemaleIcon
}

class Contacts extends Component{
    state = {
        contacts: contacts,
        filtered: contacts,
        search: "",
        "male-checkbox": true,
        "female-checkbox": true,
        "undefined-gender-checkbox": true
    };
    
    filterContacts(){
        this.setState((prevState) => {
            return {
                filtered: prevState.contacts.filter((contact) => {
                    switch(contact.gender){
                        case "male":
                            if(prevState["male-checkbox"]) return contact;
                            break;
                        case "female":
                            if(prevState["female-checkbox"]) return contact;
                            break;
                        default:
                            if(prevState["undefined-gender-checkbox"]) return contact;
                    }
                }).filter((contact) => {
                    return  contact.lastName.toLowerCase().includes(prevState.search.toLowerCase()) || 
                            contact.firstName.toLowerCase().includes(prevState.search.toLowerCase()) ||
                            contact.phone.toLowerCase().includes(prevState.search.toLowerCase())
                })
            }  
        });
    }
    
    handleSearchChange = (event) => {
        this.setState({
            search: event.target.value
        });
        this.filterContacts();
    }

    toggleTick = (event) => {
        this.setState({
            [event.target.id]: event.target.checked
        });
        this.filterContacts();
    }

    render(){        
        return(
            <div className="contacts-page">
                <div className="contacts-wrapper">
                    <SearchPanel 
                        search={this.state.search} 
                        handleSearchChange={this.handleSearchChange} 
                        toggleTick={this.toggleTick}
                        genderIcons={genderIcons} 
                    />
                    <div className="contacts">
                        {this.state.filtered.map((contact, index) => (
                            <Contact 
                                firstName={contact.firstName} 
                                lastName={contact.lastName} 
                                phone={contact.phone}
                                gender={genderIcons[contact.gender]}
                                id={contact.id}
                                key={index}
                            />
                        ))}
                    </div>
                </div> 
            </div>
        )
    }
}

export default Contacts;