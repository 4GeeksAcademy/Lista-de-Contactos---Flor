import React from "react";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";


const Editar = ({id}) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [newContact, setNewContact] = useState({});

  const modificar = async () => {
    await actions.editContact (newContact, id)
  }
  return (
    <div className="modal fade" id="editar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit contact</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label fw-bold">Full name</label>
              <input onChange={(evento) => setNewContact({ ...newContact, name: evento.target.value })} value={newContact.name || ''} type="text" className="form-control" placeholder="Full name" />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label fw-bold">Email</label>
              <input onChange={(evento) => setNewContact({ ...newContact, email: evento.target.value })} value={newContact.email || ''} type="email" className="form-control" placeholder="Email" />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label fw-bold">Enter phone</label>
              <input onChange={(evento) => setNewContact({ ...newContact, phone: evento.target.value })} value={newContact.phone || ''} type="phone" className="form-control" placeholder="Enter phone" />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label fw-bold">Enter address</label>
              <input onChange={(evento) => setNewContact({ ...newContact, address: evento.target.value })} value={newContact.address || ''} type="text" className="form-control" placeholder="Enter address" />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success" style={{ "width": "1300px" }} data-bs-dismiss="modal" onClick={modificar}>save</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Editar