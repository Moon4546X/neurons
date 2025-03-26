const students = [
    { name: "Achintya", id: "S001" },
    { name: "Krishna", id: "S002" },
    { name: "Muaviz", id: "S003" },
    { name: "Tanshiq", id: "S004" }
];

const StudentList = () => {
    return (
        <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-bold mb-2">Student List</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id} className="py-1 border-b">{student.name} (ID: {student.id})</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
