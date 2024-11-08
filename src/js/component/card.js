import React, {useContext} from "react"
import { Context } from "../store/appContext";


export const ContactCard = ({ id, name, phone, address, email, edit }) => { 
    const {actions, store} = useContext(Context)
    return (
        <div className="d-flex justify-content-center">
            <div className="card mb-3" style={{ "width": "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={"https://i.pravatar.cc/200" + "?u=" + name} className="img-fluid rounded-circle" alt={name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex ">
                                <h5 className="card-title">{name}</h5>
                                <button className="btn btn-outline-dark" onClick={() => edit()} data-bs-toggle="modal" data-bs-target="#editar" type="button">
                                    <i className="fa fa-pen"></i>
                                </button>
                                <button className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">

                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                            <p className="card-text">{phone}</p>
                            <p className="card-text">{address}</p>
                            <p className="card-text">{email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Borrar</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Desea borrar a {name}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={()=> actions.deleteContact (id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;