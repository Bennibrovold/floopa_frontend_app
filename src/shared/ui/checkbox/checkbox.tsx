import { forwardRef } from "react";
import styled from "styled-components";

export const Checkbox = forwardRef(
  ({ label, ...props }: { label: string }, ref) => {
    return (
      <Wrapper>
        <CheckboxForm {...props} ref={ref as any} type="checkbox" />
        <Label>{label}</Label>
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.div`
  margin: 8px 0px;
`;
const CheckboxForm = styled.input`
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin: 0px;
  margin-right: 8px;
`;
