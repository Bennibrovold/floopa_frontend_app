import styled from "styled-components";
import { color } from "../../../shared/libs/color";
import { Link } from "../../../shared/ui/link";
import { Text } from "../../../shared/ui/text/text";

export const Logo = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Text>Floppa app</Text>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Text} {
    color: ${color("text-white")};
  }
`;
