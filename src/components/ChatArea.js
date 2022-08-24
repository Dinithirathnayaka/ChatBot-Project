import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import "../style/home.css";

const Test = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="subot">
        <iframe
          allow="microphone;"
          width="600"
          height="650"
          src="https://console.dialogflow.com/api-client/demo/embedded/f5efc3e7-1453-4ee9-8e74-e295034ccd24"
          className="link"
        ></iframe>
        <div className="d-grid gap-2 lout ">
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </div>
    </>
  );
};

export default Test;
