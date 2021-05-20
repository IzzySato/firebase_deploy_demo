import styled from "styled-components";
import { Link } from "react-router-dom";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MutedLink = styled.a`
  font-size: 12px;
  color: lightgrey;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  margin: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const BoldLink = styled(Link)`
  font-size: 12px;
  color: black;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  outline: none;
  height: 42px;
  width: 300px;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(241, 196, 15);
  }

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
`;
