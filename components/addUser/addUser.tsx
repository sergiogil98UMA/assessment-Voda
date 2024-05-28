import { useState } from "react";
import { Usertype } from "../user-list/UserList";

interface addUserProps {
    onAddUser: (user: Usertype) => void;
}

export default function AddUser(props: addUserProps) {
    let [user, setUser] = useState<Usertype>({
        id: "", name: "", surname: "", phone: "", company: ""
    });

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            justifyContent: "space-between",

        }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ color: "white" }}>ID:</p>
                    <input type="text" placeholder="Enter ID"
                        value={user.id}
                        style={{
                            border: "1px solid gray",
                            borderRadius: "5px",
                            padding: "4px",
                            marginTop: "5px"
                        }}
                        onChange={(event) => {
                            setUser({ ...user, id: event.target.value })
                        }} />
                    <p style={{ color: "white" }}>Phone number:</p>
                    <input type="text"
                        placeholder="Enter phone number"
                        value={user.phone}
                        style={{
                            border: "1px solid gray",
                            borderRadius: "5px",
                            padding: "4px",
                            marginTop: "5px"
                        }}
                        onChange={(event) => {
                            setUser({ ...user, phone: event.target.value })
                        }} />
                    <p style={{ color: "white" }}>Name:</p>
                    <input type="text" placeholder="Enter name"
                        value={user.name}
                        style={{
                            border: "1px solid gray",
                            borderRadius: "5px",
                            padding: "4px",
                            marginTop: "5px"
                        }}
                        onChange={(event) => {
                            setUser({ ...user, name: event.target.value })
                        }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>

                    <p style={{ color: "white" }}>Surname:</p>
                    <input type="text" placeholder="Enter surname"
                        value={user.surname}
                        style={{
                            border: "1px solid gray",
                            borderRadius: "5px",
                            padding: "4px",
                            marginTop: "5px"
                        }}
                        onChange={(event) => {
                            setUser({ ...user, surname: event.target.value })
                        }} />
                    <p style={{ color: "white" }}>Company:</p>
                    <input type="text" placeholder="Enter company"
                        value={user.company}
                        style={{
                            border: "1px solid gray",
                            borderRadius: "5px",
                            padding: "4px",
                            marginTop: "5px"
                        }}
                        onChange={(event) => {
                            setUser({ ...user, company: event.target.value })
                        }} />
                </div>
            </div>

            <button
                onClick={() => {
                    props.onAddUser(user)

                }}
                style={{
                    backgroundColor: "Red", color: "white",
                    border: "2px solid black", fontSize: "inherit",
                    padding: "8px", borderRadius: "5px",
                    marginTop: "10px"
                }}>Allocate
            </button>
        </div>
    )
}