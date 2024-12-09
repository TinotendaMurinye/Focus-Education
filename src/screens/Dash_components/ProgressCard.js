// src/components/ProgressCard.js
import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProgressCard = () => {
  const [selectedClass, setSelectedClass] = useState("All");

  const allProgressData = [
    { label: "Maths", value: 50, class: "Form 4" },
    { label: "Shona", value: 50, class: "Form 4" },
    { label: "English", value: 50, class: "Form 4" },
    { label: "Geography", value: 50, class: "Form 4" },
    { label: "Accounts", value: 50, class: "Form 4" },
    { label: "Science", value: 75, class: "Form 4" },
    { label: "Shona", value: 30, class: "Form 4" },
    { label: "Accounts", value: 20, class: "Form 6" },
    { label: "Geography", value: 60, class: "Form 6" },
    { label: "Computers", value: 60, class: "Form 6" },
    { label: "Agriculture", value: 60, class: "Form 6" },
    { label: "History", value: 60, class: "Form 6" },
  ];

  // Distinct classes for the dropdown
  const classes = [...new Set(allProgressData.map((item) => item.class))];

  // Filter progress data based on selected class
  const progressData =
    selectedClass === "All"
      ? allProgressData
      : allProgressData.filter((item) => item.class === selectedClass);

  // Function to determine color based on value
  const getColor = (value) => {
    if (value >= 75) return "primary";
    if (value >= 60) return "warning";
    if (value >= 50) return "success";
    return "danger";
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          Exam Class Syllabus Progress
        </h6>
      </div>
      <div
        className="card-body"
        style={{ maxHeight: "340px", overflowY: "auto" }}
      >
        {/* Dropdown for class selection */}
        <div className="form-group">
          <label htmlFor="classSelect">Select Class:</label>
          <select
            id="classSelect"
            className="form-control"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="All">All Classes</option>
            {classes.map((className, index) => (
              <option key={index} value={className}>
                {className}
              </option>
            ))}
          </select>
        </div>

        <div
          className="progress-list"
          style={{  overflowY: "auto" }}
        >
          {progressData.map((item, index) => (
            <div key={index} className="col mr-2 mb-3">
              <div
                className={`text-xs font-weight-bold text-${getColor(
                  item.value
                )} text-uppercase mb-1`}
              >
                {item.label}
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col-auto">
                  <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                    {item.value}%
                  </div>
                </div>
                <div className="col">
                  <div className="progress progress-sm mr-2">
                    <div
                      className={`progress-bar bg-${getColor(item.value)}`}
                      role="progressbar"
                      style={{ width: `${item.value}%` }}
                      aria-valuenow={item.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
