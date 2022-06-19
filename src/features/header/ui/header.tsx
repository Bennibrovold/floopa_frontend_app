import styled from "styled-components";
import { color } from "../../../shared/libs/color";
import { Links } from "./links";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <Links />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0px 16px;
  background-color: ${color("primary-05")};
`;
