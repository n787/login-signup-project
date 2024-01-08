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

const Signup = ({ signupClicked }) => {
  return (
    <Form
      className={signupClicked ? "sign-up-form sign-in-mode" : "sign-up-form"}
    >
      <Title>Sign up</Title>
      <InputField>
        <Input type="text" placeholder="username" />
      </InputField>
      <InputField>
        <Input type="text" placeholder="email" />
      </InputField>
      <InputField>
        <Input type="password" placeholder="password" />
      </InputField>
      <Button className="sign-up-btn">Sign up</Button>
      <SocialText>Or Sign up with social platforms</SocialText>
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

export default Signup;
