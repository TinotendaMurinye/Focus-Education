import React from "react";
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

const Dashboard = () => {
  return (
    <div style={{ display: "flex", height: "150vh" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />
        <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Term Balance
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        $215,000
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                        Term Completetion
                      </div>
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                            50%
                          </div>
                        </div>
                        <div className="col">
                          <div className="progress progress-sm mr-2">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                        Pending Applications
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        18
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Date
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        Monday 07-12-2025
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-lg-4">
              <BarChart />
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <DonutChart />
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <ProgressCard />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-lg-4">
              <AreaChart />
            </div>
            <div className="col-lg-4 col-lg-4 ">
              <MessageCard />
            </div>
            <div className="col-lg-4 col-lg-4">
              <MeetingScheduleCard />
            </div>
          </div>
          <div className="row">
            <TimetableCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
