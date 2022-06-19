import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { InputForm } from "../input/input";

interface IFormValues {
  [k: string]: any;
}

export const TimeInput = forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ label, ...props }, ref) => {
  return (
    <Wrapper>
      <label>{label}</label>
      <InputForm type={"time"} {...props} ref={ref as any} />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  & > div {
    &:not(&:last-child) {
      margin-right: 16px;
    }

    & > div {
      margin-top: 8px;
    }
  }
`;
