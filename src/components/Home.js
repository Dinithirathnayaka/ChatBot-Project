import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { FaPaperPlane } from "react-icons/fa";
import "../style/home.css";
import img from "../assets/images/bot.png";

const Home = () => {
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
      <div className="p-4 main mt-3 ">
        <h2>ChatBot</h2>
        <div className="msg_area">
          <div className="robot">
            <div ClassName="bot">
              <img className="img" src={img} alt="" />
            </div>
            <h3>Aco ChatBot</h3>
          </div>
        </div>
        <div className="input">
          <input type="text" placeholder="New Message" className="text"></input>
          <Button className="send">
            Send
            <FaPaperPlane />
          </Button>
        </div>
      </div>

      <div className="d-grid gap-2 lout ">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;

