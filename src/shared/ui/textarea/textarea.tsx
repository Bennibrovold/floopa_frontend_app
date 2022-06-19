import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { color } from "../../libs/color";

export const TextArea: any = forwardRef(({ ...props }, ref) => {
  return (
    <Wrapper>
      <InputForm {...props} ref={ref as any} />
    </Wrapper>
  );
});

const Wrapper = styled.div``;
const InputForm = styled.textarea<{ error?: boolean }>`
  resize: none;
  min-height: 300px;
  width: 100%;
  padding: 12px;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  transition: all 0.2s;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px ${color("primary-05")};
  }

  ${({ error }) =>
    error &&
    css`
      &:focus {
        box-shadow: none;
        outline: 1px solid ${color("red")};
      }
    `}
`;
