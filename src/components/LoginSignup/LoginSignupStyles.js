import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background: linear-gradient(-45deg, #4481eb, #04befe);
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    z-index: 6;
    transition: 1.8s ease-in-out;
  }

  &.sign-up-mode::before {
    transform: translate(100%, -50%);
    right: 52%;
  }

  @media (max-width: 870px) {
  }
`;

export const FormsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const LoginSignupForms = styled.div`
  position: absolute;
  width: 50%;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
  transition: 1s 0.7s ease-in-out;

  &.sign-up-mode {
    left: 25%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 1/2;
  grid-row: 1/2;
  padding: 0 5rem;
  overflow: hidden;
  transition: 0.2s 0.7s ease-in-out;

  &.sign-in-form {
    z-index: 2;
  }
  &.sign-up-form {
    z-index: 1;
    opacity: 0;
  }

  &.sign-up-mode {
    z-index: 1;
    opacity: 0;
  }

  &.sign-in-mode {
    z-index: 2;
    opacity: 1;
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
`;

export const InputField = styled.div`
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 55px;
  display: flex;
  //grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
  width: 90%;
  height: 50%;

  &::placeholder {
    color: #aaa;
    font-weight: 500;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 49px;
  border: none;
  outline: none;
  border-radius: 49px;
  cursor: pointer;
  background-color: #5995fd;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5s;

  &:hover {
    background-color: #4d84e2;
  }

  &.btn-transparent {
    margin: 0;
    background: none;
    border: 2px solid #fff;
    width: 130px;
    height: 41px;
    font-weight: 600;
    font-size: 0.8rem;
  }
`;

export const SocialText = styled.p`
  padding: 0%.7rem 0;
  font-size: 1rem;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialIcon = styled.a`
  height: 46px;
  width: 46px;
  border: 1px solid #333;
  margin: 0 0.45rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
  border-radius: 50%;
  transition: 0.3s;

  &:hover {
    color: #4481eb;
    border-color: #4481eb;
  }
`;

export const PanelContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  //color: #fff;
  z-index: 7;

  &.left-panel {
    pointer-events: all;
    padding: 3rem 17% 2rem 12%;
  }

  &.sign-up-mode-left {
    pointer-events: none;
  }
  &.right-panel {
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
  }

  &.sign-up-mode-right {
    pointer-events: all;
  }
`;

export const Content = styled.div`
  color: #fff;
  transition: 0.9s 0.6s ease-in-out;

  &.right-panel {
    transform: translateX(800px);
  }

  &.sign-up-mode {
    transform: translateX(0px);
  }

  &.left-panel {
    transform: translateX(-800px);
  }
`;

export const Text = styled.h3`
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
`;

export const SubText = styled.p`
  font-size: 0.95rem;
  padding: 0.7rem 0;
`;

export const Image = styled.svg`
  width: 90%;
  height: 90%;
  transition: 1.1s 0.4s ease-in-out;

  &.right-panel {
    transform: translateX(800px);
  }

  &.sign-up-mode {
    transform: translateX(0px);
  }

  &.left-panel {
    transform: translateX(-800px);
  }
`;
