import { FunctionComponent, ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  btnText: string;
}

const Btn = styled.button`
  background-color: #42aaff;
  border-radius: 8px;
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
  border: none;
  color: white;
  font-weight: 700;
  &:hover {
    background-color: #42aaffa1;
  }
`;

const Button: FunctionComponent<ButtonProps> = ({ btnText, ...props }) => {
  return (
    <>
      <Btn {...props}>{btnText}</Btn>
    </>
  );
};

export default Button;
