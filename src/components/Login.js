import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import emailjs from "emailjs-com";
import Verification from "../components/Verification";
import "../App.css";

const Login = ({ email, setEmail, password, setPassword, code, setCode }) => {
  const [dataemail, setDataEmail] = useState("ab");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    var codedigt = Math.floor(100000 + Math.random() * 900000);

    var emaildata = { email: email, vcode: codedigt };
    console.log(emaildata);
    e.preventDefault();

    emailjs
      .send(
        "service_nqofntv",
        "template_eygzp4s",
        emaildata,
        "ftEJaWAOJijuRDJon"
      )
      .then(
        (result) => {
          alert("Please check your email to verify your email address.");
          setCode(codedigt);
          navigate("/verification");
        },
        (error) => {
          alert("error sending email");
        }
      );
    //clears the form after sending the email
    e.target.reset();
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/test");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3 text-center"> Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            {/* <Link to= "/test"> */}
            <Button variant="primary" type="Submit">
              Log In
            </Button>
            {/* </Link> */}
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <Link to="/phonesignup">
          <div className="d-grid gap-2 mt-3 ">
            <Button variant="success" type="Submit">
              Sign in with Phone
            </Button>
          </div>

          <div className="text-center mt-3">
            <Link to="/reset">Forgot Password</Link>
          </div>
        </Link>
        <div className="p-4  mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
