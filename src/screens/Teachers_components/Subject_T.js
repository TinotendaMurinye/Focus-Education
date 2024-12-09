import React from "react";

const Subject_T = ({ subjectName }) => {
  // Hardcoded subject information, including HOD teacher names
  const subjectData = [
    {
      name: "Mathematics",
      description: "Study of numbers, shapes, and patterns.",
      averagePassRate: 85,
      hod: "Mr. Johnson",
    },
    {
      name: "Shona",
      description: "A Bantu language of Zimbabwe.",
      averagePassRate: 75,
      hod: "Ms. Chipo",
    },
    {
      name: "English",
      description: "The study of the English language and literature.",
      averagePassRate: 90,
      hod: "Dr. Smith",
    },
    {
      name: "Geography",
      description:
        "Study of the Earth's landscapes, environments, and how humans interact with them.",
      averagePassRate: 80,
      hod: "Mr. Moyo",
    },
    {
      name: "Science",
      description:
        "Study of the physical and natural world through observation and experimentation.",
      averagePassRate: 70,
      hod: "Ms. Ndlovu",
    },
  ];

  // Find the subject data based on the provided subjectName
  const subjectInfo = subjectData.find(
    (subject) => subject.name === subjectName
  );

  // Function to determine color based on average pass rate
  const getColor = (value) => {
    if (value >= 75) return "primary"; // Excellent
    if (value >= 60) return "warning"; // Good
    if (value >= 50) return "success"; // Average
    return "danger"; // Poor
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          {subjectName} Information
        </h6>
      </div>
      <div className="card-body">
        {subjectInfo ? (
          <>
            <p>
              <strong>Description:</strong> {subjectInfo.description}
            </p>
            <p>
              <strong>Average Pass Rate:</strong> {subjectInfo.averagePassRate}%
            </p>
            <p>
              <strong>Head of Department:</strong> {subjectInfo.hod}
            </p>
            <div className="progress mb-3">
              <div
                className={`progress-bar bg-${getColor(
                  subjectInfo.averagePassRate
                )}`}
                role="progressbar"
                style={{ width: `${subjectInfo.averagePassRate}%` }}
                aria-valuenow={subjectInfo.averagePassRate}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {subjectInfo.averagePassRate}%
              </div>
            </div>
          </>
        ) : (
          <p>No information found for this subject.</p>
        )}
      </div>
    </div>
  );
};

export default Subject_T;
