import React, { useRef, useState, useContext } from "react";
import { Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { BoxContainer, FormContainer, Input, MutedLink } from "./SignInElement";
import { AccountContext } from "./accountContext";

export default function Signin(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Unable to sign in.");
    }
    setLoading(false);
  }

  const { switchToSignup } = useContext(AccountContext);

  return (
    <h2>
      <BoxContainer>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <FormContainer onSubmit={handleSubmit}>
            <Input type="email" placeholder="Email" ref={emailRef} required />

            <Input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
            <MutedLink href="#">Forgot your password?</MutedLink>
            <Button
              style={{
                backgroundColor: "#ffa822",
                borderRadius: "50px",
                border: "#ffa822",
                color: "black",
                padding: "14px 48px",
              }}
              disabled={loading}
              type="submit"
              to="/Dashboard"
            >
              <Link to="/Dashboard" style={{textDecoration: "none"}}>Sign In</Link>
              Sign In
            </Button>
          </FormContainer>
        </Card.Body>
      </BoxContainer>

      <div className="w-100 text-center mt-2">
        Need an account?{" "}
        <Link to="/signup" onClick={switchToSignup}>
          Sign Up
        </Link>
      </div>
    </h2>
  );
}
