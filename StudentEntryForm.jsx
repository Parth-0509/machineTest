import { useState } from "react";
function StudentEntryForm({ onAdd }) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !username || !email) {
            alert("Enter Valid Credentials")
            return;
        }
        onAdd({ name, username, email })
        setName("");
        setUsername("");
        setEmail("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                Name:
                <input type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <br />

                Username:
                <input type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <br />

                Email:
                <input type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <br />
                <button type="submit">Insert</button>
            </form>
        </div>
    )
}
export default StudentEntryForm;