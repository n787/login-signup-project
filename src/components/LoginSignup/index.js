import React, { useState } from "react";
import {
  Button,
  Container,
  Content,
  Form,
  FormsContainer,
  Image,
  Input,
  InputField,
  LoginSignupForms,
  Panel,
  PanelContainer,
  SocialIcon,
  SocialMedia,
  SocialText,
  SubText,
  Text,
  Title,
} from "./LoginSignupStyles";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ReactComponent as LoginImage } from "../../assets/login_img.svg";
import { ReactComponent as RegisterImage } from "../../assets/register_img.svg";

const LoginSignup = () => {
  const [signupClicked, setSignupClicked] = useState(false);

  const handleSignupClicked = () => {
    setSignupClicked(!signupClicked);
  };

  return (
    <Container className={signupClicked ? "sign-up-mode" : null}>
      <FormsContainer>
        <LoginSignupForms className={signupClicked ? "sign-up-mode" : null}>
          <Form
            className={
              signupClicked ? "sign-in-form sign-up-mode" : "sign-in-form"
            }
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
          <Form
            className={
              signupClicked ? "sign-up-form sign-in-mode" : "sign-up-form"
            }
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
        </LoginSignupForms>
      </FormsContainer>

      <PanelContainer>
        <Panel
          className={
            signupClicked ? "left-panel sign-up-mode-left" : "left-panel"
          }
        >
          <Content className={signupClicked ? "left-panel" : null}>
            <Text>New here ?</Text>
            <SubText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, exercitationem mollitia ab et minima quibusdam
              inventore laboriosam ad quos neque cum excepturi rem debitis atque
              suscipit adipisci perferendis alias voluptates.
            </SubText>
            <Button className="btn-transparent" onClick={handleSignupClicked}>
              Sign up
            </Button>
          </Content>
          <Image
            as={LoginImage}
            className={signupClicked ? "left-panel" : null}
          />
        </Panel>

        <Panel
          className={
            signupClicked ? "right-panel sign-up-mode-right" : "right-panel"
          }
        >
          <Content
            className={
              signupClicked ? "right-panel sign-up-mode" : "right-panel"
            }
          >
            <Text>One of us ?</Text>
            <SubText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, exercitationem mollitia ab et minima quibusdam
              inventore laboriosam ad quos neque cum excepturi rem debitis atque
              suscipit adipisci perferendis alias voluptates.
            </SubText>
            <Button
              className="btn-transparent"
              onClick={() => setSignupClicked(!signupClicked)}
            >
              Sign in
            </Button>
          </Content>
          <Image
            as={RegisterImage}
            className={
              signupClicked ? "right-panel sign-up-mode" : "right-panel"
            }
          />
        </Panel>
      </PanelContainer>
    </Container>
  );
};

export default LoginSignup;
