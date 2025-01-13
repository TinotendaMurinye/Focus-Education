// src/components/TimetableEdit.js
import React, { useState, useEffect } from "react";
import AreaChart from "./Dash_components/AreaChart";
import BarChart from "./Dash_components/BarChart";
import DonutChart from "./Dash_components/DonutChart";
import "../assets/css/sb-admin-2.min.css";
import "../assets/css/sb-admin-2.css";
import Sidebar from "./Dash_components/Sidebar";
import ProgressCard from "./Dash_components/ProgressCard";
import Topbar from "./Dash_components/TopBar";
import MessageCard from "./Dash_components/MassageCard";
import MeetingScheduleCard from "./Dash_components/MeetingScheduleCard";
import TimetableCard from "./Dash_components/TimeTableRiborn";

const TimetableEdit = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(0);
  const [timetable, setTimetable] = useState([]);

  // Hardcoded timetable data
  const hardcodedTimetable = Array.from({ length: 12 }, (_, index) => ({
    form1: { subject: `Subject ${index + 1}`, teacher: `Teacher A` },
    form2: { subject: `Subject ${index + 1}`, teacher: `Teacher B` },
    form3: { subject: `Subject ${index + 1}`, teacher: `Teacher C` },
    form4: { subject: `Subject ${index + 1}`, teacher: `Teacher D` },
    form5: { subject: `Subject ${index + 1}`, teacher: `Teacher E` },
    form6: { subject: `Subject ${index + 1}`, teacher: `Teacher F` },
  }));

  useEffect(() => {
    // Simulate fetching data
    setTimetable(hardcodedTimetable);
  }, []);

  const handleChange = (periodIndex, form, field, value) => {
    const updatedTimetable = [...timetable];
    updatedTimetable[periodIndex][form][field] = value;
    setTimetable(updatedTimetable);
  };

  const handlePeriodChange = (e) => {
    setSelectedPeriod(Number(e.target.value));
  };

  // Ensure timetable is defined and has data
  const currentTimetable = timetable[selectedPeriod] || {};

  return (
    <div style={{ display: "flex", height: "150vh" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />
        <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          <div className="container mt-5">
            <h2>Edit School Timetable</h2>
            <div className="form-group mb-4">
            <label htmlFor="period">Select Period:</label>
            <select
              id="period"
              className="form-control"
              value={selectedPeriod}
              onChange={handlePeriodChange}
            >
              {[...Array(12)].map((_, index) => (
                <option key={index} value={index}>
                  Period {index + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="row">
            <div className="col-12 mb-4">
              <h6 className="font-weight-bold text-primary mb-3">
                {`Selected Period: Period ${selectedPeriod + 1}`}
              </h6>
              <div className="row">
                {Object.keys(currentTimetable).map((form) => (
                  <div key={form} className="col-lg-2 col-md-4 col-sm-6 mb-3">
                    <div className="card border-left-primary shadow">
                      <div className="card-body">
                        <h5 className="card-title">
                          {form.replace("form", "Form ")}
                        </h5>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            value={currentTimetable[form].subject}
                            onChange={(e) =>
                              handleChange(
                                selectedPeriod,
                                form,
                                "subject",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Teacher"
                            value={currentTimetable[form].teacher}
                            onChange={(e) =>
                              handleChange(
                                selectedPeriod,
                                form,
                                "teacher",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TimetableEdit;
