import { useState } from "react";

const person = {
    firstName: "Fred",
    lastName: "Flinstone"
}

export default function ControlledComponents() {
    const [firstName, setFirstName] = useState(person.firstName || "")
    const [lastName, setLastName] = useState(person.lastName || "")
    return (
        <>
            <h2>Controlled Components</h2>

            <p>Form fields in HTML typically manage their own state.</p>

            <p>In a <strong>controlled component
            </strong>we let the React component take control of that state using
                <code>value</code> and <code>onChange</code>.</p>

            <h3>You typed: {firstName} {lastName}</h3>

            <label htmlFor="firstName">First Name:</label>

            <input name="firstName" type="text" value={firstName}
                onChange={e => setFirstName(e.target.value)} />
            <label htmlFor="firstName">LastName</label>

            <input name="lastName" type="text" value={lastName}
                onChange={e => setLastName(e.target.value)} />
        </>
    )
}