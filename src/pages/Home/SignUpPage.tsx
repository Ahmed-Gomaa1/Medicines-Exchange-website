import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SignUp.css";
type SignUpFormProps = {
  onSignUpSuccess: () => void;
};

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUpSuccess }) => {
  const [firstName, setFirstName] = useState("");
  const [email, setemail] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Address:", address);
    console.log("Password:", password);

    // Call the onSignUpSuccess function after successful sign-up
    onSignUpSuccess();
  };

  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>
        <Link to="/profile">Sign Up</Link>
      </button>
    </div>
  );
};

export default SignUpForm;
