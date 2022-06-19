import { isRouter } from "../../libs/router";
import { Link as RouterLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { Text } from "../text";
import { color } from "../../libs/color";

export type LinkType = React.HTMLAttributes<{}> & {
  className?: string;
  white?: boolean;
  href?: string;
  to?: string;
  noStyle?: boolean;
  noUnderline?: boolean;
};

export const Link = ({
  children,
  to,
  href,
  className = "",
  ...props
}: LinkType) => {
  const link = !isRouter ? { href: to || href } : { to, href };
  const router = isRouter && to ? RouterLink : "a";

  return (
    <StyledLink className={className} as={router} {...link} {...props}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Text as any)<{ noStyle?: boolean }>`
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;
  color: ${color("primary-04")};

  &:hover {
    text-decoration: underline;
  }

  ${({ noStyle }) =>
    noStyle &&
    css`
      color: inherit;
      &:hover {
        text-decoration: none;
      }
    `}
`;
