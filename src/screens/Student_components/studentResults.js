import React from "react";

const StudentResults = ({ studentId }) => {
  // Hardcoded results data linked with student IDs
  const resultsData = [
    {
      studentId: 1,
      subjectResults: [
        { subject: "Mathematics", score: 85 },
        { subject: "English", score: 90 },
        { subject: "Science", score: 78 },
      ],
      overallScore: 84.3, // Average score
    },
    {
      studentId: 2,
      subjectResults: [
        { subject: "Mathematics", score: 60 },
        { subject: "English", score: 70 },
        { subject: "Science", score: 65 },
      ],
      overallScore: 65.0, // Average score
    },
  ];

  // Filter results data based on studentId
  const studentResults = resultsData.find(data => data.studentId === studentId);

  // Function to determine color based on score value
  const getColor = (value) => {
    if (value >= 75) return "primary"; // Excellent
    if (value >= 60) return "warning"; // Good
    if (value >= 50) return "success"; // Average
    return "danger"; // Poor
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Student Results Analysis</h6>
      </div>
      <div className="card-body">
        {studentResults ? (
          <>
            <h5>Subject Results</h5>
            {studentResults.subjectResults.map((item, index) => (
              <div key={index} className="mb-3">
                <p>{item.subject} Score: {item.score}</p>
                <div className="progress">
                  <div
                    className={`progress-bar bg-${getColor(item.score)}`}
                    role="progressbar"
                    style={{ width: `${item.score}%` }}
                    aria-valuenow={item.score}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {item.score}%
                  </div>
                </div>
              </div>
            ))}
            <h5>Overall Score</h5>
            <p>{studentResults.overallScore}%</p>
            <div className="progress mb-3">
              <div
                className={`progress-bar bg-${getColor(studentResults.overallScore)}`}
                role="progressbar"
                style={{ width: `${studentResults.overallScore}%` }}
                aria-valuenow={studentResults.overallScore}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {studentResults.overallScore}%
              </div>
            </div>
          </>
        ) : (
          <p>No results information found for this student.</p>
        )}
      </div>
    </div>
  );
};

export default StudentResults;