import React, { useState } from "react";
import "./Profile.css";
export default function PatientProfile() {
  const [medicineName, setMedicineName] = useState("");
  const [comment, setComment] = useState("");
  const [requests, setRequests] = useState<Array<Request>>([]);

  const handleSubmit = () => {
    // Create a new request object
    const newRequest = {
      id: new Date().getTime(), // Generate a unique ID (you can use any method to generate a unique ID)
      medicineName: medicineName,
      comment: comment,
      status: "pending",
    };

    // Add the new request to the requests list
    setRequests([...requests, newRequest]);

    // Clear the form fields after submission
    setMedicineName("");
    setComment("");
  };

  const handleCancelRequest = (id: number) => {
    // Find the request with the given ID and set its status to "cancelled"
    const updatedRequests = requests.map((request) =>
      request.id === id ? { ...request, status: "cancelled" } : request
    );

    // Update the requests list with the updated request status
    setRequests(updatedRequests);
  };

  return (
    <div>
      <h1>Welcome to Your Profile</h1>
      <h2>Request Medicine</h2>
      <div>
        <input
          type="text"
          placeholder="Medicine Name"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit Request</button>
      </div>
      <h2>Your Requests</h2>
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
              {request.status === "pending" && (
                <button onClick={() => handleCancelRequest(request.id)}>
                  Cancel Request
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Define the type for the Request object
interface Request {
  id: number;
  medicineName: string;
  comment: string;
  status: string;
}
