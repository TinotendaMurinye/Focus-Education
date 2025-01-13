import React from "react";

const SubjectCard = ({
  teacher = {
    picture: "https://picsum.photos/800/400?random=2", // Default picture URL
    firstName: "John", // Default name
    lastName: "Doe", // Default surname
    subject: "Mathematics", // Default subject taught
    experienceYears: 5, // Default years of experience
    rating: 4.5, // Default rating
    qualifications: "M.Sc. in Mathematics", // Default qualifications
    position: "Teacher", // Position: Teacher or Admin
  },
}) => {
  const {
    picture,
    firstName,
    lastName,
    subject,
    experienceYears,
    rating,
    qualifications,
    position,
  } = teacher;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`fa fa-star ${i <= rating ? "text-warning" : "text-muted"}`}
        ></span>
      );
    }
    return stars;
  };

  return (
    <div className="card shadow mb-4" style={{ border: "2px solid green" }}>
      <div className="card-body">
        <div className="row">
          <div className="col-auto">
            <img
              src={picture}
              alt={`${firstName} ${lastName} Profile`}
              className="img-fluid rounded-circle"
              style={{
                width: "120px",
                height: "120px",
                border: "2px solid green", // Green border on the profile image
              }}
            />
            <div className="mt-2">{renderStars(Math.round(rating))}</div>
          </div>
          <div className="col ml-3">
            <h1 className="font-weight-bold">{`${firstName} ${lastName}`}</h1>
            <p className="text-muted">{`Subject: ${subject}`}</p>
            <p className="text-muted">{`Experience: ${experienceYears} years`}</p>
            <p className="text-muted">{`Qualifications: ${qualifications}`}</p>
            <p className="text-muted">{`Position: ${position}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;