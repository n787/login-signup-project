import React, { useState } from "react";
import {
  Container,
  FormsContainer,
  LoginSignupForms,
} from "./LoginSignupStyles";
import Login from "./Login";
import Signup from "./Signup";
import PanelModal from "./Panel";

const LoginSignup = ({ signupClickedInit }) => {
  const [signupClicked, setSignupClicked] = useState(
    signupClickedInit || false
  );

  const handleSignupClicked = () => {
    setSignupClicked(!signupClicked);
  };

  return (
    <Container className={signupClicked ? "sign-up-mode" : null}>
      <FormsContainer>
        <LoginSignupForms className={signupClicked ? "sign-up-mode" : null}>
          <Login signupClicked={signupClicked} />
          <Signup signupClicked={signupClicked} />
        </LoginSignupForms>
      </FormsContainer>

      <PanelModal
        signupClicked={signupClicked}
        handleSignupClicked={handleSignupClicked}
      />
    </Container>
  );
};

export default LoginSignup;
