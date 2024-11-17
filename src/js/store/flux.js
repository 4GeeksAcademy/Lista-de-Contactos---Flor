const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getContact: async () => {
				try {
				const resp = await fetch(process.env.BACKEND_URL + "agendas/fmaya");
				if (resp.status == 404) {
					getActions().createAgenda()
					return
				}
				const data = await resp.json();
				console.log(data);
				setStore({ contacts: data.contacts })
				return true
				} catch (error) {
					console.log(error)
					return false
				}
			},
			
			createAgenda: async () => {
				try {
					const resp = await fetch("https://playground.4geeks.com/contact/agendas/fmaya", {
						method: "POST",
						headers: { "Content-Type": "application/json" }
					})
					console.log(resp)
					if (resp.status == 201) {
						getActions().getContact()
						return true
					}
				} catch (error) {
					console.log(error)
					return false
				}
			},

			createContact: async (newContact) => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				const resp = await fetch(process.env.BACKEND_URL + "agendas/fmaya/contacts", {
					method: 'POST',
					headers: myHeaders,
					body: JSON.stringify(newContact),
				});
				if (resp.ok) {
					await getActions().getContact()
				}
			},

			deleteContact: async (id) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "agendas/fmaya/contacts/" + id, {
						method: 'DELETE',
						headers: {"Content-Type": "application/json"},
					});
					if (resp.ok) {
						await getActions().getContact()
					}
				} catch (error) {
					console.log(error)
					return false
				}
			},

			editContact: async (newContact, id) => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				const resp = await fetch(process.env.BACKEND_URL + "agendas/fmaya/contacts/" + id, {
					method: 'PUT',
					headers: myHeaders,
					body: JSON.stringify(newContact),
				});
				if (resp.ok) {
					await getActions().getContact()
				}
			},
		}
	};
};

export default getState;
