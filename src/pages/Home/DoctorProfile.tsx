import React, { useState } from "react";
import "./DoctorProfilePage.css";
export default function DoctorDashboard() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      medicineName: "Medicine A",
      comment: "Patient needs Medicine A urgently.",
      status: "pending",
    },
    {
      id: 2,
      medicineName: "Medicine B",
      comment: "Patient is allergic to Medicine B.",
      status: "pending",
    },
    // Add more requests as needed
  ]);

  const handleAcceptRequest = (id: number) => {
    // Implement logic to accept the request with the given id
    const updatedRequests = requests.map((request) =>
      request.id === id ? { ...request, status: "accepted" } : request
    );
    setRequests(updatedRequests);
  };

  const handleRejectRequest = (id: number) => {
    // Implement logic to reject the request with the given id
    const updatedRequests = requests.map((request) =>
      request.id === id ? { ...request, status: "rejected" } : request
    );
    setRequests(updatedRequests);
  };

  return (
    <div>
      <h1>Doctor Dashboard</h1>
      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <ul>
          {requests.map((request) => (
            <li key={request.id}>
              <strong>Medicine Name:</strong> {request.medicineName}
              <br />
              <strong>Comment:</strong> {request.comment}
              <br />
              <strong>Status:</strong> {request.status}
              <br />
              {request.status === "pending" && (
                <div>
                  <button onClick={() => handleAcceptRequest(request.id)}>
                    Accept
                  </button>
                  <button onClick={() => handleRejectRequest(request.id)}>
                    Reject
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
