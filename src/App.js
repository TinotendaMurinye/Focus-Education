// App.js
import React, { useState, useEffect } from "react";
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
import CreateStudentProfile from "./screens/StudentAdmission";
import StudentResults from "./screens/ResultsSearch";
import StudentSearch from "./screens/StudentSearch";
import Profile from "./screens/Student_components/Profile";
import TimetableCreator from "./screens/CreateTimeTable";
import TimetableEdit from "./screens/TimeTableEdit";
import SplashScreen from "./screens/Splush"; // Import the SplashScreen component
import CreateSubjectProfile from "./screens/Subject+";
import SubjectSearch from "./screens/SubjectList";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide splash screen after 3 seconds
    }, 20000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <Router>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/profile/:teacherId/:subjectName" element={<Profile_T />} />
          <Route path="/StudentProfile/:teacherId/:subjectName" element={<Profile />} />
          <Route path="/Teachers" element={<Teachers />} />
          <Route path="/ResultsSearch" element={<StudentResults />} />
          <Route path="/TeacherAdmission" element={<TeacherAdmission />} />
          <Route path="/StudentAdmission" element={<CreateStudentProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Topbar" element={<Topbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/studentsearch" element={<StudentSearch />} />
          <Route path="/createTimeTable" element={<TimetableCreator />} />
          <Route path="/TimeTableEdit" element={<TimetableEdit />} />
          <Route path="/subject+" element={<CreateSubjectProfile />} />
          <Route path="/subjects" element={<SubjectSearch />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;