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

const Signup = ({ signupClicked }) => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    const usernameValue = username.current.value.trim();
    const emailValue = email.current.value.trim();
    const passwordValue = password.current.value.trim();

    const newErrors = {};

    if (!usernameValue) {
      newErrors.username = "Username is required";
    }

    if (!emailValue) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(emailValue)) {
      newErrors.email = "Invalid email address";
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
    console.log(
      "submission values: ",
      usernameValue,
      emailValue,
      passwordValue
    );

    try {
      const response = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameValue,
          email: emailValue,
          password: passwordValue,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("sign up success: ", data.message); // User registered successfully
        // Optionally, you can redirect the user to the login page or handle it as needed.
        navigate("/home");
      } else {
        console.log("data from res: ", data);
        const newErrors = {};

        if (data.message.includes("Username is already taken")) {
          newErrors.username = data.message;
        }

        if (data.message.includes("Email is already in use")) {
          newErrors.email = data.message;
        }

        if (
          data.message.includes(
            "Password should be: \n1. minimum 8 character \n2. combination of letters, numbers and symbols"
          )
        ) {
          newErrors.password = data.message;
        }

        if (Object.keys(newErrors).length > 0) {
          // If there are errors, set the state and do not proceed with form submission
          setErrors(newErrors);
          return;
        }
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }

    // Clear form fields and errors
    username.current.value = "";
    email.current.value = "";
    password.current.value = "";
    setErrors({});
  };

  const isValidEmail = (email) => {
    // You can implement a more sophisticated email validation if needed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const InputFieldStyle = { margin: errors.length > 0 ? "10px 0 0" : "10px 0" };

  return (
    <Form
      className={signupClicked ? "sign-up-form sign-in-mode" : "sign-up-form"}
      onSubmit={handleSignupSubmit}
    >
      <Title>Sign up</Title>
      <InputField style={InputFieldStyle}>
        <Input type="text" placeholder="username" ref={username} />
      </InputField>
      {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
      <InputField style={InputFieldStyle}>
        <Input type="text" placeholder="email" ref={email} />
      </InputField>
      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      <InputField style={InputFieldStyle}>
        <Input type="password" placeholder="password" ref={password} />
      </InputField>
      {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      <Button type="submit" className="sign-up-btn">
        Sign up
      </Button>
      <SocialText>Or Sign up with social platforms</SocialText>
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

export default Signup;
