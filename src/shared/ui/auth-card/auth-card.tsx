import React from "react";
import styled from "styled-components";
import { ReactChildren } from "../../types/global";
import { Text } from "../text";

interface AuthCardProps {
  title: string;
}

export const AuthCard = ({
  title,
  children,
}: AuthCardProps & ReactChildren) => {
  return (
    <Wrapper>
      <Title>
        <Text>{title}</Text>
      </Title>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  max-width: 580px;
  width: 100%;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15), 0px 4px 12px rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  padding: 16px;
`;
export const Title = styled.div`
  ${Text} {
    font-size: 22px;
    font-weight: 500;
  }
`;
export const Content = styled.div`
  margin-top: 16px;
`;
