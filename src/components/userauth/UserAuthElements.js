import styled from "styled-components";
import { motion } from "framer-motion";

export const BoxContainer = styled.div`
  max-width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  overflow: hidden;
  margin: auto;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  border-radius: 19px;

  @media screen and (max-width: 760px) {
    height: 100vh;
    width: 100%;
  }
`;

export const BackDrop = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  width: 130%;
  height: 600px;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgb(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
  top: -290px;
  left: -100px;
  transform: rotate(8deg);
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

export const HeaderContainer = styled.div`
width: 100%
display: flex;
flex-direction: column;
margin: 0;
`;

export const HeaderText = styled.h2`
  position: relative;
  font-size: 30pt;
  font-weight: 600;
  line-height: 1.25;
  color: white;
  z-index: 10;
  text-transform: uppercase;
  letter-spacing: 0.3em;
`;

export const SmallText = styled.h5`
  position: relative;
  color: white;
  font-weight: 500;
  font-size: 15pt;
  z-index: 10;
  margin: 0;
  margin-top: -5px;
`;

export const InnerContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BackdropVariance = {
  expanded: {
    width: "180%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(8deg)",
  },
  collapsed: {
    width: "130%",
    height: "600px",
    borderRadius: "50%",
    transform: "rotate(8deg)",
  },
};

export const expandedTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};
