// src/components/TimetableCreator.js
import React, { useState } from "react";
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

const TimetableCreator = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(0);
  const [timetable, setTimetable] = useState(
    Array.from({ length: 12 }, () => ({
      form1: { subject: "", teacher: "" },
      form2: { subject: "", teacher: "" },
      form3: { subject: "", teacher: "" },
      form4: { subject: "", teacher: "" },
      form5: { subject: "", teacher: "" },
      form6: { subject: "", teacher: "" },
    }))
  );

  const handleChange = (periodIndex, form, field, value) => {
    const updatedTimetable = [...timetable];
    updatedTimetable[periodIndex][form][field] = value;
    setTimetable(updatedTimetable);
  };

  const handlePeriodChange = (e) => {
    setSelectedPeriod(Number(e.target.value));
  };

  return (
    <div style={{ display: "flex", height: "150vh" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />
        <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          <div className="container mt-5">
            <h2>Create School Timetable</h2>
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
                  {Object.keys(timetable[selectedPeriod]).map((form) => (
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
                              value={timetable[selectedPeriod][form].subject}
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
                              value={timetable[selectedPeriod][form].teacher}
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

export default TimetableCreator;
