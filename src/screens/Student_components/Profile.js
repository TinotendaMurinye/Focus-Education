import React from "react";
import Sidebar from "../Dash_components/Sidebar";
import Topbar from "../Dash_components/TopBar";
import ClassProfile from "./Class_T";
import Financials_T from "./Financials_T";
import Results_T from "./Results_T";
import Subject_T from "./Subject_T";
import "../../assets/css/sb-admin-2.min.css";
import "../../assets/css/sb-admin-2.css";
import profileImage from "../../assets/img/pexels-pavel-danilyuk-8001237.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Profile = ({ teacherId, subjectName }) => {
  const teacherId1 = "T12345";
  const teacherName = "John Doe1";
  const subjectName1 = "Mathematics";
  return (
    <div style={{ display: "flex", height: "150vh" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />

        <div className="container-fluid">
          {/* Profile Image Section */}
          <div className="card border-success mb-4">
            <div className="card-body text-center">
              <img
                src={profileImage} // Replace with dynamic image if available
                alt="Profile"
                className="img-fluid rounded-circle"
                style={{ width: "120px", height: "120px" }}
              />
              <div className="d-flex justify-content-center my-2">
                <i className="fab fa-linkedin fa-fw mx-1"></i>
                <i className="fab fa-instagram fa-fw mx-1"></i>
                <i className="fab fa-facebook fa-fw mx-1"></i>
                <i className="fas fa-phone fa-fw mx-1"></i>
              </div>
              <h2 className="mt-2">Sir.{teacherName}</h2>
              <p className="text-muted">Subject: {subjectName1}</p>
            </div>
          </div>

          <div className="row">
            {/* Class Profile Card */}
            <div className="col-lg-6 mb-4">
              <ClassProfile teacherId={1} />
            </div>

            {/* Teacher Financials Card */}
            <div className="col-lg-6 mb-4">
              <Financials_T teacherId={1} />
            </div>

            {/* Teacher Pass Rates Card */}
            <div className="col-lg-6 mb-4">
              <Results_T teacherId={1} />
            </div>

            {/* Subject Information Card */}
            <div className="col-lg-6 mb-4">
              <Subject_T subjectName={'Mathematics'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
