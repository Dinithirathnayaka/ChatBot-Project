import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import PhoneSignup from "./components/PhoneSignup";
import Reset from "./components/Reset";
import Test from "./components/Test";
import Verification from "./components/Verification";
import Dashboard from "./components/Dashboard";
import { createContext, useState } from "react";
function App() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/test"
                element={
                  <ProtectedRoute>
                    <Test />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/"
                element={
                  <Login
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    code={code}
                    setCode={setCode}
                  />
                }
              />
              <Route path="/phonesignup" element={<PhoneSignup />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/verification"
                element={
                  <Verification email={email} password={password} code={code} />
                }
              />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
