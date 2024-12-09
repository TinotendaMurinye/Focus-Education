// src/components/MessageCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

const MessageCard = () => {
  const navigate = useNavigate();

  const messagesData = [
    {
      id: 1,
      name: "Alice Smith",
      userType: "Parent",
      message: "Looking forward to the upcoming parent-teacher meeting!",
      userId: "user123",
      count: 5,
    },
    {
      id: 2,
      name: "John Doe",
      userType: "Staff",
      message: "Please submit your reports by Friday.",
      userId: "staff456",
      count: 3,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      userType: "Parent",
      message: "Can we schedule a call to discuss my child's progress?",
      userId: "user789",
      count: 2,
    },
    {
      id: 4,
      name: "Mike Brown",
      userType: "Staff",
      message: "Reminder: The school event is next week.",
      userId: "staff012",
      count: 1,
    },
    {
      id: 5,
      name: "Emily Davis",
      userType: "Parent",
      message: "What time is the school play?",
      userId: "user456",
      count: 1,
    },
    {
      id: 6,
      name: "James Wilson",
      userType: "Staff",
      message: "Don't forget to review the curriculum updates.",
      userId: "staff789",
      count: 4,
    },
  ];

  const handleRedirect = (messageId) => {
    navigate(`/chart/${messageId}`);
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Messages</h6>
      </div>
      <div
        className="card-body mb-4"
        style={{ maxHeight: "340px", overflowY: "auto" }}
      >
        {messagesData.map((msg) => (
          <div
            key={msg.id}
            className="message-item mb-3 p-3 border rounded"
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            onClick={() => handleRedirect(msg.id)}
          >
            <img
              src={`https://picsum.photos/800/400?random=2`} // Placeholder image
              alt={`${msg.name}'s avatar`}
              className="rounded-circle mr-3"
              style={{
                width: "50px", // Fixed width
                height: "50px", // Fixed height
                objectFit: "cover", // Ensures the image covers the area
                border: "2px solid #4e73df"
              }}
            />
            <div className="message-content">
              <div className="font-weight-bold text-primary">
                {msg.name} <span className="text-muted">({msg.userType})</span>
              </div>
              <div className="text-gray-800">{msg.message}</div>
              <div className="text-muted">
                {msg.count} message{msg.count > 1 ? "s" : ""}{" "}
                <sup>from {msg.userId}</sup>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageCard;