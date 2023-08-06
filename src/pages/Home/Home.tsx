import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import SignInPageD from "./SignInPageD";
import SignUpPageD from "./SignUpPageD";
import Profile from "./Profile";
import DoctorProfilePage from "./DoctorProfile";
import "./Home.css";
import logo from "../../1.jpg";
export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signinD" component={SignInPageD} />
        <Route path="/signupD" component={SignUpPageD} />
        <Route path="/profile" component={Profile} />
        <Route path="/doctorprofilePage" component={DoctorProfilePage} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <div>
        <h1>Welcome to Unused Medicines Exchange</h1>
        <div
          style={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw",
          }}
        >
          {" "}
        </div>
        <br /><br />
        <h3>Find and donate unused medicines to help others in need.</h3>
        <br />
        <h4>if you are patient and look for some medicines</h4>
      </div>
      <div className="button-container">
        <br />
        <h5>if you have account</h5>
        <button>
          <Link to="/signin">Sign In</Link>
        </button>
        <br />
        <h5>if you don't have account</h5>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
      <br />
      <br />
      <div>
        <h4>if you are doctor</h4>
        <div className="button-container">
          <br />
          <h5>if you have account</h5>
          <button>
            <Link to="/signinD">Sign In</Link>
          </button>
          <br />
          <h5>if you don't have account</h5>
          <button>
            <Link to="/signupD">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
