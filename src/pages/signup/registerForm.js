import React from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PButton from "../../components/Button";
import PIButton from "../../components/ButtonWithIcon";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import "./style.css";
// import iconGoogle from "../../../public/images/logo/google.png";

export default function FormSignup({
  form,
  handleChange,
  handleSubmit,
  isLoading,
}) {
  return (
    <Form>
      <TextInputWithLabel
        label="Email address"
        name="email"
        value={form.email}
        type="email"
        placeholder="Enter email"
        onChange={handleChange}
      />

      <TextInputWithLabel
        label="Password"
        name="password"
        value={form.password}
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <TextInputWithLabel
        label="Confirm Password"
        name="confirmPassword"
        value={form.password}
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <div className="mt-2">
        <PButton
          loading={isLoading}
          disabled={isLoading}
          action={handleSubmit}
          variant="dark"
          className="button-signIn"
        >
          Sign Up
        </PButton>
      </div>

      <div className="mt-2">
        <PIButton
          icon={faGoogle}
          loading={isLoading}
          disabled={isLoading}
          action={handleSubmit}
          variant="outline-secondary"
          className="button-signIn"
        >
          Sign Up With Google
        </PIButton>
      </div>

      <div className="text-center my-1">
        <span>
          Have an account?{" "}
          <NavLink to="/signin" className={"text-decoration-none"}>
            Sign In here
          </NavLink>
        </span>
      </div>
    </Form>
  );
}
