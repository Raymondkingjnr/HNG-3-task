import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, error } = useSelector((state) => state.auth);

  const initailState = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initailState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignIn = async () => {
    dispatch(signIn(values.email, values.password));
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  return (
    <div>
      <Form className="form">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={values.email}
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="input"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={values.password}
            name="password"
            placeholder="password"
            onChange={handleChange}
            className="input"
          />
        </Form.Group>
        <button
          className="login-btn"
          onClick={handleSignIn}
          disabled={isLoading}
        >
          Sign in
        </button>
        {error && <p>{error}</p>}
      </Form>
    </div>
  );
};

export default SignIn;
