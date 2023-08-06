import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./SignIn.css";
interface SignInFormProps {
  onSignInSuccess: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSignInSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSignIn = () => {
    // Implement your sign-in logic here
    console.log("Email:", email);
    console.log("Password:", password);

    // For simplicity, assume sign-in is successful
    // Call the onSignInSuccess callback to update SignInPage
    onSignInSuccess();

    // Redirect to the patient profile page after successful sign-in
    history.push("/patient-profile");
  };

  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>
        <Link to="/doctorprofilePage">Sign In</Link>
      </button>
    </div>
  );
};

const SignInPage: React.FC = () => {
  // State to track if the user has signed in successfully
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignInSuccess = () => {
    // Set the isSignedIn state to true after successful sign-in
    setIsSignedIn(true);
  };

  return (
    <div>
      {isSignedIn ? (
        <div>
          <p>You are already signed in!</p>
          <button onClick={() => setIsSignedIn(false)}>Sign Out</button>
        </div>
      ) : (
        <SignInForm onSignInSuccess={handleSignInSuccess} />
      )}
    </div>
  );
};

export default SignInPage;
