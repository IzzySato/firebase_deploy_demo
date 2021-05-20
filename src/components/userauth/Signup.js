import React, { useRef, useState, useContext } from "react";
import { Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { BoxContainer, FormContainer, Input } from "./SignInElement";
import { AccountContext } from "./accountContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPassRef.current.value) {
      return setError("Passwords do not match.");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Account was not created");
    }
    setLoading(false);
  }

  const { switchToSignin } = useContext(AccountContext);

  return (
    <>
      <BoxContainer>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <FormContainer onSubmit={handleSubmit}>
            <Input type="text" placeholder="First Name" required />

            <Input type="email" placeholder="Email" ref={emailRef} required />

            <Input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />

            <Input
              type="password"
              placeholder="Confirm Password"
              ref={confirmPassRef}
              required
            />

            <Button
            style={{
              backgroundColor: "#ffa822",
              borderRadius: "50px",
              border: "#ffa822",
              color: "black",
              padding: "14px 48px",
            }}
              disabled={loading}
              className="w-100"
              value="Submit"
              type="submit"
              to="/Dashboard"
            >
              Sign Up
            </Button>
          </FormContainer>
        </Card.Body>
      </BoxContainer>
      <div className="w-100 text-center mt-2">
        Already have an account?{" "}
        <Link to="/signin" onClick={switchToSignin}>
          Sign In
        </Link>
      </div>
    </>
  );
}
