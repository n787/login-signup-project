//Login.js
import React, { useRef, useState } from "react";
import {
  Button,
  ErrorMessage,
  Form,
  Input,
  InputField,
  SocialIcon,
  SocialMedia,
  SocialText,
  Title,
} from "./LoginSignupStyles";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = ({ signupClicked }) => {
  const username = useRef();
  const password = useRef();
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const usernameElement = username.current.value;
    const passwordElement = password.current.value;
    console.log(usernameElement, passwordElement);

    // Basic validation
    const usernameValue = username.current.value.trim();
    const passwordValue = password.current.value.trim();

    const newErrors = {};

    if (!usernameValue) {
      newErrors.username = "Username is required";
    }

    if (!passwordValue) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      // If there are errors, set the state and do not proceed with form submission
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with form submission
    console.log(usernameValue, passwordValue);

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameValue,
          password: passwordValue,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login success:", data.message, data.user);
        // Handle success, e.g., redirect or update state

        navigate("/home");
      } else {
        console.error("Login failed:", data.message);
        // Handle failure, e.g., display error message

        const newErrors = {};

        if (data.message.includes("Invalid username")) {
          newErrors.username = data.message;
        }

        if (data.message.includes("Invalid password")) {
          newErrors.password = data.message;
        }

        if (Object.keys(newErrors).length > 0) {
          // If there are errors, set the state and do not proceed with form submission
          setErrors(newErrors);
          return;
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }

    // Clear form fields and errors
    username.current.value = "";
    password.current.value = "";
    setErrors({});
  };

  const InputFieldStyle = {
    margin: errors.length > 0 ? "10px 0 0" : "10px 0",
  };

  return (
    <Form
      className={signupClicked ? "sign-in-form sign-up-mode" : "sign-in-form"}
      onSubmit={handleLoginSubmit}
    >
      <Title>Sign in</Title>
      <InputField style={InputFieldStyle}>
        <Input type="text" placeholder="username" ref={username} />
      </InputField>
      {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
      <InputField style={InputFieldStyle}>
        <Input type="password" placeholder="password" ref={password} />
      </InputField>
      {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      <Button type="submit" className="sign-in-btn">
        Login
      </Button>
      <SocialText>Or Sign in with social platforms</SocialText>
      <SocialMedia>
        <SocialIcon>
          <FaGoogle />
        </SocialIcon>
        <SocialIcon>
          <FaFacebook />
        </SocialIcon>
        <SocialIcon>
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon>
          <FaGithub />
        </SocialIcon>
      </SocialMedia>
    </Form>
  );
};

export default Login;
