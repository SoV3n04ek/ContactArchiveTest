import {useState, useEffect} from "react";
import axios from 'axios';
import { Contact } from "./Contact";

export const ContactsList = () => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/contacts')
            .then(result => setContacts(result.data))
            .catch(error => console.log(error));
    }, []);

    const displayContactsList = () => (
        contacts.map(item => (
            <Contact key={item._id} contact={item} />
        ))
    );

    return (
        <>
            <h3>All contacts list</h3>
            <div className="container mx-auto">
                <table className="table table-hover center">
                    <thead>
                        <tr >
                            <th scope="col">Name</th>
                            <th scope="col">Number</th>
                            <th scope="col">Note</th>
                        </tr>
                    </thead>
                    <tbody>
                     {displayContactsList()}
                    </tbody>
                </table>
            </div>
        </>
    )
}