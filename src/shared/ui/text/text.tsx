import styled from "styled-components";

export const Text = styled.span<{ isHeadFont?: boolean; [key: string]: any }>`
  font: normal 400 16px/100%;
  color: inherit;
`;
