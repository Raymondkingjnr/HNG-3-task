import React, { useState, useEffect } from "react";
import { signUp } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, error } = useSelector((state) => state.auth);

  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signUp(values.email, values.password, values.name));
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
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            value={values.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
            className="input"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Email</Form.Label>
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
          type="button"
          className="sign-btn"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Sign up
        </button>
        {error && <p>{error}</p>}
      </Form>
    </div>
  );
};

export default SignUp;
