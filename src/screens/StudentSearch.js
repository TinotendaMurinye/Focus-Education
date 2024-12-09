import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Dash_components/Sidebar";
import Topbar from "./Dash_components/TopBar";
import StudentCard from "./Student_components/StudentCard"; // Import TeacherCard
import "../assets/css/sb-admin-2.min.css";
import "../assets/css/sb-admin-2.css";

const StudentSearch = () => {
  const teachers = [
    {
      teacher_id: "1",
      name: "John",
      surname: "Doe",
      qualification: "M.Sc. Mathematics",
      subject: "Mathematics",
      rating: 4,
      experienceYears: 5,
      position: "Teacher",
    },
    {
      teacher_id: "3",
      name: "Tinotenda",
      surname: "Muriye",
      qualification: "M.Sc. Mathematics",
      subject: "Mathematics",
      rating: 4,
      experienceYears: 5,
      position: "Teacher",
    },
    {
      teacher_id: "4",
      name: "Nenyasha",
      surname: "Murinye",
      qualification: "M.Sc. Mathematics",
      subject: "Mathematics",
      rating: 4,
      experienceYears: 5,
      position: "Teacher",
    },
    {
      teacher_id: "2",
      name: "Jane",
      surname: "Smith",
      qualification: "M.Sc. Physics",
      subject: "Physics",
      rating: 4.5,
      experienceYears: 10,
      position: "Senior Teacher",
    },
    // Add additional teacher objects here...
  ];

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.surname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTeacherClick = (teacher) => {
    navigate(`/profile/${teacher.teacher_id}/${teacher.subject}`);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />
        <div style={{ padding: "20px", flex: 1, overflowY: "auto" }}>
          <div style={{ textAlign: "center" }}>
            <form className="form-inline mx-auto col-xl-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </form>
          </div>
          <div style={{ marginTop: "30px" }} className="mb-5">
            {filteredTeachers.map((teacher) => (
              <div key={teacher.teacher_id} onClick={() => handleTeacherClick(teacher)}>
                <StudentCard
                  teacher={{
                    picture: "https://picsum.photos/800/400?random=2",
                    firstName: teacher.name,
                    lastName: teacher.surname,
                    subject: teacher.subject,
                    experienceYears: teacher.experienceYears,
                    rating: teacher.rating,
                    qualifications: teacher.qualification,
                    position: teacher.position,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSearch;