import React from "react";
import {
  Button,
  Form,
  Input,
  InputField,
  SocialIcon,
  SocialMedia,
  SocialText,
  Title,
} from "./LoginSignupStyles";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";

const Login = ({ signupClicked }) => {
  return (
    <Form
      className={signupClicked ? "sign-in-form sign-up-mode" : "sign-in-form"}
    >
      <Title>Sign in</Title>
      <InputField>
        <Input type="text" placeholder="username" />
      </InputField>
      <InputField>
        <Input type="password" placeholder="password" />
      </InputField>
      <Button className="sign-in-btn">Login</Button>
      <SocialText>Or Sign in with social platforms</SocialText>
      <SocialMedia>
        <SocialIcon>
          <FaFacebook />
        </SocialIcon>
        <SocialIcon>
          <FaTwitter />
        </SocialIcon>
        <SocialIcon>
          <FaGoogle />
        </SocialIcon>
        <SocialIcon>
          <FaLinkedin />
        </SocialIcon>
      </SocialMedia>
    </Form>
  );
};

export default Login;
