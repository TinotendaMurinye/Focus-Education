import React from "react";

const StudentClassProfile = ({ teacherId }) => {
  // Hardcoded class information with teacher IDs
  const classData = [
    {
      className: "Mathematics 101",
      teacherId: 1,
      teacherName: "Mr. Smith",
      studentCount: 30,
      rating: 4,
      passRate: 85,
    },
    {
      className: "History 201",
      teacherId: 2,
      teacherName: "Ms. Johnson",
      studentCount: 25,
      rating: 5,
      passRate: 90,
    },
    {
      className: "Biology 301",
      teacherId: 1,
      teacherName: "Dr. Lee",
      studentCount: 20,
      rating: 3,
      passRate: 75,
    },
  ];

  // Filter classes based on teacherId
  const filteredClasses = classData.filter(classInfo => classInfo.teacherId === teacherId);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
    ));
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Class Profiles</h6>
      </div>
      <div className="card-body">
        {filteredClasses.length > 0 ? (
          filteredClasses.map((classInfo, index) => (
            <div key={index} className="class-info mb-3">
              <h5>{classInfo.className}</h5>
              <p><strong>Teacher:</strong> {classInfo.teacherName}</p>
              <p><strong>Students:</strong> {classInfo.studentCount}</p>
              <p><strong>Rating:</strong> {renderStars(classInfo.rating)}</p>
              <p><strong>Pass Rate:</strong> {classInfo.passRate}%</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${classInfo.passRate}%` }}
                  aria-valuenow={classInfo.passRate}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {classInfo.passRate}%
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No classes found for this teacher.</p>
        )}
      </div>
    </div>
  );
};

export default StudentClassProfile;