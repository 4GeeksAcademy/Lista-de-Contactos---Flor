import React from "react"
import "../../styles/home.css";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/card.js";
import Editar from "../component/Edit.js";





export const Home = () => {
	const {actions, store} = useContext(Context);
	const [edit, setEdit] = useState({
		showModal: false, 
		id:undefined
	})
	return (
	<div className="text-center mt-5">
		{
			store.contacts.map((item, index) => {
				return <ContactCard 
				key={index} 
				name={item.name} 
				phone={item.phone} 
				address={item.address} 
				email={item.email} 
				id={item.id}
			edit={()=> setEdit({showModal: true, id:  item.id})}
				/>

			}) 
		}
		<Editar
		id={edit.id}
		showModal={edit.showModal}
		onClose={()=> setEdit({showModal: false})}
		/>
	</div>
)};

