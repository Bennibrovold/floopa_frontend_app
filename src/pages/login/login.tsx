import { AuthCard } from "../../shared/ui/auth-card/auth-card";
import { Container } from "../../shared/ui/container";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input } from "../../shared/ui/input";
import { Button } from "../../shared/ui/button";
import { Divider } from "../../shared/ui/divider";
import { Link } from "../../shared/ui/link";
import { Checkbox } from "../../shared/ui/checkbox/checkbox";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <Wrapper>
      <Container>
        <AuthCard title="Авторизация">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormWrapper>
              <Input
                {...register("email", { required: true })}
                error={errors.email}
                placeholder={"E-mail"}
              />
              <Input
                {...register("password", { required: true })}
                error={errors.password}
                placeholder={"Пароль"}
              />

              <Checkbox {...register("remember_me")} label="Запомнить меня" />
              <ButtonWrapper>
                <Button type="submit">Войти</Button>
              </ButtonWrapper>
              <Divider label="Или" />
              <LinkWrapper>
                Вы ещё не зарегестрированы? -{" "}
                <Link to="/auth/registration">Регистрация</Link>
              </LinkWrapper>
            </FormWrapper>
          </form>
        </AuthCard>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > div {
    margin-top: 60px;
    & > div {
      display: flex;
      justify-content: center;
    }
  }

  ${Input} {
    margin-bottom: 16px;
  }
`;

const FormWrapper = styled.div`
  & > div {
    margin-bottom: 16px;
  }
`;

const ButtonWrapper = styled.div``;
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > a {
    margin-left: 5px;
  }
`;
