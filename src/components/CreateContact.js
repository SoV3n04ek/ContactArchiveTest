import { useState } from "react";
import axios from "axios";

export const CreateContact = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState();
    const [note, setNote] = useState('');

    const onChangeNameHandle = (event) => {
        setName(event.target.value);
    };

    const onChangeNumberHandle = (event) => {
        setNumber(event.target.value);
    };

    const onChangeNoteHandle = (event) => {
        setNote(event.target.value);
    };

    const onSubmitHandle = async (event) => {
        event.preventDefault();
        let contact = {name: name, number: number, note: note};
        console.log(contact);

        axios.post('http://localhost:5000/contacts/add', contact)
            .then(result => console.log(result.data))
            .catch(error => console.log(error));
        
        setName('')
        setNumber(380);
        setNote('');
    //    window.location = '/'; 
   };

   return (
        <>
            <h3 style={{color: 'navy'}}>Create New Contact</h3>
            <div style={{height: '10px'}}></div>
            <form className="my-form" onSubmit={onSubmitHandle}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={onChangeNameHandle}
                        required
                    />
                    <br />
                    <br />
                    
                    
                    <label htmlFor="name">Number:</label>
                    <input 
                        type="number"
                        id="number"
                        className="form-control"
                        value={number}
                        onChange={onChangeNumberHandle}
                        required
                    />
                    <br />
                    <br />
                    
                    
                    <label htmlFor="name">Note:</label>
                    <input 
                        type="text"
                        id="note"
                        className="form-control"
                        value={note}
                        onChange={onChangeNoteHandle}
                        required
                    />
                    <br />
                    <br />
                    
                </div>

                <div className="form-group text-center">
                    <input type="submit" value="Create Contact" className="btn btn-primary" />
                </div>
            </form>
        </>
   );

}