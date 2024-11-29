
import { useState, useEffect } from 'react';
import './App.css';
import StudentEntryForm from './components/StudentEntryForm';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data);
      })
  }, []);

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  }

  const addStudent = (newStud) => {
    setStudents([...students, { ...newStud, id: students.length + 1 }]);
  };

  return (
    <div className="App">
      <h1>STUDENT MANAGEMENT SYSTEM</h1>
      <StudentList onDelete={deleteStudent} data={students} />
      <StudentEntryForm onAdd={addStudent} />
    </div>
  );
}

export default App;
