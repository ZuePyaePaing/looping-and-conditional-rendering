import { useState } from "react";

const AddUserForm = ({ studenthandler }) => {
  const [name, setName] = useState("");
  const [live, setLive] = useState("");
  const [email, setEmail] = useState("");
  const addUser = (e) => {
    e.preventDefault();
    const data = { name, live, email };
    if (!name || !live || !email) {
        alert("All fields are required");
        return;
      }
    studenthandler((prevStudents) => [...prevStudents, data]);
    setName("");
    setLive("");
    setEmail("");
  };
  return (
    <div className="form-container">
      <h2>Add User Data</h2>
      <form onSubmit={addUser}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="live">Live</label>
          <input
            type="text"
            id="live"
            value={live}
            onChange={(e) => setLive(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};

const SubmitButton = () => {
  return (
    <button className="btn" type="submit">
      Add User
    </button>
  );
};

export default AddUserForm;
