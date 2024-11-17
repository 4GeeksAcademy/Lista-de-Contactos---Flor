import React from "react";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const CreateContact = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [newContact, setNewContact] = useState({});
    return (
        <>
        <div className="container">
            <div className= "d-flex justify-content-center">
                <h1>Add a new contact</h1>
            </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label fw-bold">Full name</label>
            <input onChange={(evento) => setNewContact({...newContact, name:evento.target.value})} value={newContact.name || ''} type="text" className="form-control" placeholder="Full name" />
        </div>

        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label fw-bold">Email</label>
            <input onChange={(evento) => setNewContact({...newContact, email:evento.target.value })} value={newContact.email || ''} type="email" className="form-control" placeholder="Email" />
        </div>

        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label fw-bold">Enter phone</label>
            <input onChange={(evento) => setNewContact({...newContact, phone:evento.target.value})} value={newContact.phone || ''} type="phone" className="form-control" placeholder="Enter phone" />
        </div>

        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label fw-bold">Enter address</label>
            <input onChange={(evento) => setNewContact({...newContact, address:evento.target.value})} value={newContact.address || ''} type="text" className="form-control" placeholder="Enter address" />
        </div>

        <button onClick={ async () =>{
            
            await actions.createContact(newContact)
            navigate("/")
            }} type="submit" className="btn btn-success" style={{ "width": "1300px" }}>save</button>
        </div>
       
        </>
)
}
export default CreateContact;