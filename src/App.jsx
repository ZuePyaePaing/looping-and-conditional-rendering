import React, { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import Lists from "./components/Lists";

const App = () => {
  const [students, setStudents] = useState([]);

  return (
    <section className="main">
      <div className=" container">
        <AddUserForm studenthandler={setStudents} />
        <div className="lists-container">
          {students.length === 0 ? (
            <h2>Empty students</h2>
          ) : (
            students.map((student) => <Lists key={student.name} {...student} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default App;
