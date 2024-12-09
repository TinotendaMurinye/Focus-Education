import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import "../assets/css/sb-admin-2.min.css";
import "../assets/css/sb-admin-2.css";
import Topbar from "./Dash_components/TopBar";
import Sidebar from "./Dash_components/Sidebar";

const StudentResults = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students] = useState([
    { id: 1, name: "Alice Johnson", results: [85, 90, 78] },
    { id: 2, name: "Bob Smith", results: [92, 88, 95] },
    { id: 3, name: "Charlie Brown", results: [75, 80, 85] },
    { id: 4, name: "Daisy Williams", results: [90, 94, 88] },
  ]);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedStudent(null); // Reset selected student when searching
  };

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
    setSearchTerm(student.name); // Set search value to the selected student
  };

  return (
    <div className="results-page-container" style={{ display: "flex" }}>
      <Sidebar />
      <div
        className="main-content"
        style={{ flex: 1, padding: "2rem", backgroundColor: "#f8f9fc" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="results-header">
            <h1 className="h3 mb-4 text-gray-800">Student Results</h1>
            <div className="form-group">
              <label htmlFor="search">
                <FaSearch className="mr-2" /> Search for a Student
              </label>
              <input
                type="text"
                id="search"
                className="form-control"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Type a student's name..."
              />
            </div>

            {filteredStudents.length > 0 && (
              <ul className="list-group mt-3">
                {filteredStudents.map((student) => (
                  <li
                    key={student.id}
                    className="list-group-item list-group-item-action"
                    onClick={() => handleStudentSelect(student)}
                    style={{ cursor: "pointer" }}
                  >
                    {student.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {selectedStudent && (
            <div className="student-results mt-4">
              <h4 className="mb-3">
                Results for: {selectedStudent.name}
              </h4>
              <ul className="list-group">
                {selectedStudent.results.map((result, index) => (
                  <li key={index} className="list-group-item">
                    Subject {index + 1}: {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default StudentResults;