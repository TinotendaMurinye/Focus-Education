import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Teachers from "./screens/Teachers_+";
import Topbar from "./screens/Dash_components/TopBar";
import Sidebar from "./screens/Dash_components/Sidebar";
import Profile_T from "./screens/Teachers_components/Profile_T";
import TeacherAdmission from "./screens/TeacherAddmission";
import StudentResults from "./screens/ResultsSearch";
import StudentSearch from "./screens/StudentSearch";
import Profile from "./screens/Student_components/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect from the root path to /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        {/* Define your routes using the element prop */}
        <Route path="/profile/:teacherId/:subjectName" element={<Profile_T />} />
        <Route path="/StudentProfile/:teacherId/:subjectName" element={<Profile />} />
        <Route path="/Teachers" element={<Teachers />} />
        <Route path="/ResultsSearch" element={<StudentResults />} />
        <Route path="/TeacherAdmission" element={<TeacherAdmission />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Topbar" element={<Topbar />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/studentsearch" element={<StudentSearch />} />
      </Routes>
    </Router>
  );
};

export default App;