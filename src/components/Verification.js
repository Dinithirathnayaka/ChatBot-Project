import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Verification(props) {
  useEffect(() => {
    console.log(props.code);
  }, []);
  const { logIn, googleSignIn } = useUserAuth();
  const [vcode, setVcode] = useState("");
  const navigate = useNavigate();
  const codeverify = async (e) => {
    e.preventDefault();

    const email = props.email;
    const password = props.password;
    const sendvcode = props.code;
    if (sendvcode == vcode) {
      try {
        await logIn(email, password);
        alert("You logged successfully");
        navigate("/chatarea");
        console.log("logged");
      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    } else {
      console.log("false");
      alert("verfication code is invalid");
    }
  };

  return (
    <>
      <div className="p-4 box">
        <Form onSubmit={codeverify}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Verification Code"
              name="vcode"
              onChange={(e) => setVcode(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Verify
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Verification;
