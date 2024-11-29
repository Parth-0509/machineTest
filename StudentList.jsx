function StudentList({ onDelete, data }) {
    return (
        <div>
            <h1>Student List</h1>
            <table border={2} style={{ alignItems: "center" }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.username}</td>
                            <td>{student.email}</td>
                            <td>
                                <button onClick={(e) => onDelete(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    // <StudentEntryForm />
}

export default StudentList;