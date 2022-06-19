import styled from "styled-components";
import { color } from "../../../shared/libs/color";
import { Link } from "../../../shared/ui/link";

export const Links = () => {
  const links = [
    { path: "/profile", title: "Профиль" },
    { path: "/auth/login", title: "Авторизация" },
    { path: "auth/registration", title: "Регистрация" },
  ];

  return (
    <Wrapper>
      {links.map(({ path, title }) => (
        <Link to={path} noStyle>
          {title}
        </Link>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > a {
    color: ${color("text-white")};
    margin: 0px 10px;
  }
`;
