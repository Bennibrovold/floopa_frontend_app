import { AuthCard } from "../../shared/ui/auth-card/auth-card";
import { Container } from "../../shared/ui/container";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input } from "../../shared/ui/input";
import { Button } from "../../shared/ui/button";
import { Divider } from "../../shared/ui/divider";
import { Link } from "../../shared/ui/link";

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <Wrapper>
      <Container>
        <AuthCard title="Регистрация">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormWrapper>
              <Group>
                <Input
                  {...register("firstname", { required: true })}
                  error={errors.firstname}
                  placeholder={"Имя"}
                />
                <Input
                  {...register("surname", { required: true })}
                  error={errors.surname}
                  placeholder={"Фамилия"}
                />
                {/* include validation with required or other standard HTML validation rules */}
              </Group>
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
              <ButtonWrapper>
                <Button type="submit">Зарегистрироваться</Button>
              </ButtonWrapper>
              <Divider label="Или" />
              <LinkWrapper>
                У вас уже есть аккаунт? -<Link to="/auth/login"> войти</Link>
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
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;

  & > div {
    width: 50%;
    &:not(:last-child) {
      margin-right: 8px;
    }
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

const FormWrapper = styled.div`
  & > div {
    margin-bottom: 16px;
  }
`;
