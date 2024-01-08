import React from "react";
import {
  Button,
  Content,
  Image,
  Panel,
  PanelContainer,
  SubText,
  Text,
} from "./LoginSignupStyles";
import { ReactComponent as LoginImage } from "../../assets/login_img.svg";
import { ReactComponent as RegisterImage } from "../../assets/register_img.svg";

const PanelModal = ({ signupClicked, handleSignupClicked }) => {
  return (
    <PanelContainer>
      <Panel
        className={
          signupClicked ? "left-panel sign-up-mode-left" : "left-panel"
        }
      >
        <Content className={signupClicked ? "left-panel" : null}>
          <Text>New here ?</Text>
          <SubText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            exercitationem mollitia ab et minima quibusdam inventore laboriosam
            ad quos neque cum excepturi rem debitis atque suscipit adipisci
            perferendis alias voluptates.
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
            signupClicked ? "right-panel sign-up-mode-right" : "right-panel"
          }
        >
          <Text>One of us ?</Text>
          <SubText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            exercitationem mollitia ab et minima quibusdam inventore laboriosam
            ad quos neque cum excepturi rem debitis atque suscipit adipisci
            perferendis alias voluptates.
          </SubText>
          <Button className="btn-transparent" onClick={handleSignupClicked}>
            Sign in
          </Button>
        </Content>
        <Image
          as={RegisterImage}
          className={
            signupClicked ? "right-panel sign-up-mode-right" : "right-panel"
          }
        />
      </Panel>
    </PanelContainer>
  );
};

export default PanelModal;
