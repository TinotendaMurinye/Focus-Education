import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import Teachers from "../Teachers_+";// Assuming you're using react-router for navigation
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // State to manage which dropdown is open

  const toggleDropdown = (item) => {
    setOpenDropdown((prev) => (prev === item ? null : item)); // Toggle dropdown
  };

  return (
    <ul
      className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon">
          <i className="fas fa-school"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Focus</div>
      </a>

      {/* Nav Item - Dashboard */}
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      {/* Dropdown for Teachers */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          onClick={() => toggleDropdown("teachers")}
        >
          <i className="fas fa-book"></i>
          <span>Teachers</span>
        </a>
        <div
          className={`collapse ${openDropdown === "teachers" ? "show" : ""}`}
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Teacher:</h6>
            <Link className="collapse-item" to="/Teachers">
              Search
            </Link>
            <Link className="collapse-item" to="/TeacherAdmission">
              Teacher Admission
            </Link>
          </div>
        </div>
      </li>

      {/* Dropdown for Students */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          onClick={() => toggleDropdown("students")}
        >
          <i className="fas fa-book"></i>
          <span>Students</span>
        </a>
        <div
          className={`collapse ${openDropdown === "students" ? "show" : ""}`}
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Student:</h6>
            <Link className="collapse-item" to="/studentsearch">
              Search
            </Link>
            <Link className="collapse-item" to="/StudentAdmission">
              Student Admission
            </Link>
            <Link className="collapse-item" to="/ResultsSearch">
              Student Report
            </Link>
          </div>
        </div>
      </li>

      {/* Dropdown for Reports */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          onClick={() => toggleDropdown("reports")}
        >
          <i className="fas fa-book"></i>
          <span>Reports</span>
        </a>
        <div className={`collapse ${openDropdown === "reports" ? "show" : ""}`}>
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Report:</h6>
            <Link className="collapse-item" to="/page1">
              Signing and Commenting
            </Link>
            <Link className="collapse-item" to="/page2">
              Dispatch
            </Link>
            <Link className="collapse-item" to="/page3">
              Analysis +
            </Link>
          </div>
        </div>
      </li>

      {/* Dropdown for Time Table */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          onClick={() => toggleDropdown("timetable")}
        >
          <i className="fas fa-book"></i>
          <span>Time Table</span>
        </a>
        <div
          className={`collapse ${openDropdown === "timetable" ? "show" : ""}`}
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Time Table:</h6>
            <Link className="collapse-item" to="/createTimeTable">
              Create +
            </Link>
            <Link className="collapse-item" to="/TimeTableEdit">
              Edit
            </Link>
          </div>
        </div>
      </li>

      {/* Additional Nav Items */}
      <li className="nav-item">
        <Link className="nav-link" to="/settings">
          <i className="fas fa-cogs"></i>
          <span>Result Analysis +</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/staff">
          <i className="fas fa-cogs"></i>
          <span>Staff</span>
        </Link>
      </li>

      {/* Dropdown for Focus Finance */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          onClick={() => toggleDropdown("finance")}
        >
          <i className="fas fa-book"></i>
          <span>Focus Finance</span>
        </a>
        <div className={`collapse ${openDropdown === "finance" ? "show" : ""}`}>
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Finances:</h6>
            <Link className="collapse-item" to="/page1">
              Funds
            </Link>
            <Link className="collapse-item" to="/page2">
              Expense Mapping
            </Link>
            <Link className="collapse-item" to="/page3">
              Fees Structure
            </Link>
            <Link className="collapse-item" to="/page4">
              Staff Pay-Slips +
            </Link>
          </div>
        </div>
      </li>

      {/* Dropdown for Meetings */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          onClick={() => toggleDropdown("meetings")}
        >
          <i className="fas fa-book"></i>
          <span>Meetings</span>
        </a>
        <div
          className={`collapse ${openDropdown === "meetings" ? "show" : ""}`}
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Meetings:</h6>
            <Link className="collapse-item" to="/page1">
              Schedules
            </Link>
            <Link className="collapse-item" to="/page2">
              Programs +
            </Link>
            <Link className="collapse-item" to="/page3">
              Minutes +
            </Link>
          </div>
        </div>
      </li>

      {/* Dropdown for Subjects */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          onClick={() => toggleDropdown("subjects")}
        >
          <i className="fas fa-book"></i>
          <span>Subjects</span>
        </a>
        <div
          className={`collapse ${openDropdown === "subjects" ? "show" : ""}`}
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Subjects:</h6>
            <Link className="collapse-item" to="/subject+">
              Create +
            </Link>
            <Link className="collapse-item" to="/subjects">
              List Search
            </Link>
          </div>
        </div>
      </li>

      {/* Logout */}
      <li className="nav-item">
        <Link className="nav-link" to="/logout">
          <i className="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
