// src/components/MeetingScheduleCard.js
import React, { useState } from "react";

const MeetingScheduleCard = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const scheduleData = {
    Mon: [
      { time: "10:00 AM", description: "Staff Meeting", venue: "Room 101" },
      {
        time: "1:00 PM",
        description: "Parent-Teacher Conference",
        venue: "Room 202",
      },
    ],
    Tue: [
      { time: "11:00 AM", description: "Curriculum Review", venue: "Room 303" },
      { time: "2:00 PM", description: "PTA Meeting", venue: "Room 404" },
    ],
    Wed: [
      { time: "9:00 AM", description: "Staff Training", venue: "Auditorium" },
    ],
    Thur: [
      { time: "3:00 PM", description: "Budget Planning", venue: "Board Room" },
    ],
    Fri: [
      {
        time: "10:30 AM",
        description: "Special Education Meeting",
        venue: "Room 505",
      },
    ],
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleRSVP = (meeting) => {
    alert(
      `RSVPed for: ${meeting.description} at ${meeting.time} in ${meeting.venue}`
    );
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Meeting Schedule</h6>
      </div>
      <div
        className="card-body"
        style={{ maxHeight: "360px", overflowY: "auto" }}
      >
        <div className="mb-4">
          {Object.keys(scheduleData).map((date) => (
            <button
              key={date}
              className={`btn btn-link ${
                selectedDate === date ? "text-primary" : "text-secondary"
              }`}
              onClick={() => handleDateClick(date)}
              style={{ cursor: "pointer", marginRight: "10px" }}
            >
              {date}
            </button>
          ))}
        </div>
        {selectedDate && (
          <div>
            {scheduleData[selectedDate].map((meeting, index) => (
              <div key={index} className="meeting-card mb-3 p-3 border rounded">
                <div className="font-weight-bold">{meeting.time}</div>
                <div>{meeting.description}</div>
                <div className="text-muted">{meeting.venue}</div>
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => handleRSVP(meeting)}
                >
                  RSVP
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetingScheduleCard;
