// src/components/TimetableCard.js
import React from "react";

const TimetableCard = () => {
  // Sample data for the timetable with attendance status
  const timetableData = [
    { form: "Form 1", subject: "Science", teacher: "Mrs. Johnson", attended: true },
    { form: "Form 2", subject: "Geography", teacher: "Ms. Davis", attended: false },
    { form: "Form 3", subject: "Biology", teacher: "Mr. Taylor", attended: true },
    { form: "Form 4", subject: "Physics", teacher: "Mr. Miller", attended: false },
    { form: "Form 5", subject: "Mathematics", teacher: "Mr. Harris", attended: true },
    { form: "Form 6", subject: "Business Studies", teacher: "Mr. Walker", attended: true },
  ];

  return (
    <div className="col-12 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <h6 className="font-weight-bold text-primary mb-3">
            Current Timetable Phase
          </h6>
          <div className="row">
            {timetableData.map((item, index) => (
              <div
                key={index}
                className={`col-lg-2 col-md-4 col-sm-6 mb-3`} // Adjusted to fit all cards in a row
              >
                <div className={`card ${item.attended ? 'border-success' : 'border-danger'} shadow`}>
                  <div className="card-body">
                    <h5 className="card-title">{item.form}</h5>
                    <p className="card-text">
                      <strong>Subject:</strong> {item.subject}<br />
                      <strong>Teacher:</strong> {item.teacher}
                    </p>
                    <span className={`badge ${item.attended ? 'badge-success' : 'badge-danger'}`}>
                      {item.attended ? 'Attended' : 'Not Attended'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimetableCard;