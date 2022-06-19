import styled from "styled-components";
import { color } from "../../libs/color";
import { ReactChildren } from "../../types/global";
import { Text } from "../text";

interface ButtonProps {
  [k: string]: any;
}

export const Button = ({ children }: ButtonProps & ReactChildren) => {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  background-color: ${color("primary-04")};
  border: none;
  padding: 12px 8px;
  border-radius: 8px;
  color: ${color("text-white")};

  ${Text} {
    font-size: 16px;
  }

  &:hover {
    background-color: ${color("primary-03")};
  }

  &:active {
    background-color: ${color("primary-02")};
  }
`;
