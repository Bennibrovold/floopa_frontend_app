import { ReactChildren } from "../../types/global";
import styled from "styled-components";

interface ContainerProps {
  isFluid?: boolean;
}

export const Container = ({
  isFluid,
  children,
}: ContainerProps & ReactChildren) => {
  return (
    <Helper>
      <Wrapper isFluid={isFluid}>{children}</Wrapper>
    </Helper>
  );
};

const Wrapper = styled.div<{ isFluid?: boolean }>`
  padding: 0px 16px;
  max-width: 1060px;
  width: 100%;
`;

const Helper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
