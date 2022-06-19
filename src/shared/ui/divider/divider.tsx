import styled from "styled-components";

interface DividerProps {
  label?: string;
}

export const Divider = ({ label }: DividerProps) => {
  return (
    <Wrapper>
      <Div>{label && <Label>{label}</Label>}</Div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px 0px;
  display: flex;
`;

const Div = styled.div`
  position: relative;
  height: 1px;
  width: 100%;
  background-color: #e4e4e4;
`;

const Label = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  padding: 0px 10px;
`;
