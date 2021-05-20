import React, { useState } from "react";
import { AccountContext } from "./accountContext";
import LoginForm from "./Signin";
import SignupForm from "./Signup";
import {
  BoxContainer,
  BackDrop,
  TopContainer,
  HeaderContainer,
  HeaderText,
  SmallText,
  InnerContainer,
  BackdropVariance,
  expandedTransition,
} from "./UserAuthElements";

const UserAuth = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signup");

  const playExpandedAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandedTransition.duration * 1100 - 1500);
  };

  const switchToSignup = () => {
    playExpandedAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 1000);
  };

  const switchToSignin = () => {
    playExpandedAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 1000);
  };
  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={BackdropVariance}
            transition={expandedTransition}
          />

          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Hi</HeaderText>
              <HeaderText>InSync-er</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>

        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
};

export default UserAuth;
