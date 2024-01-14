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

const Signup = ({ signupClicked }) => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const [errors, setErrors] = useState({});

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    const usernameElement = username.current.value;
    const emailElement = email.current.value;
    const passwordElement = password.current.value;
    console.log(usernameElement, emailElement, passwordElement);
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
    console.log(usernameValue, emailValue, passwordValue);

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
