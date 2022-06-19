import { useForm } from "react-hook-form";
import { Container } from "../../shared/ui/container";
import styled from "styled-components";
import { Input } from "../../shared/ui/input";
import { Checkbox } from "../../shared/ui/checkbox/checkbox";
import { TextArea } from "../../shared/ui/textarea";
import { Button } from "../../shared/ui/button";
import { Select } from "../../shared/ui/select";
import { TimeInput } from "../../shared/ui/time-input/time-input";

export const Profile = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const options = [
    { value: "javascript", label: "Javascript" },
    { value: "c#", label: "C#" },
    { value: "java", label: "Java" },
    { value: "spring", label: "Spring" },
    { value: "React", label: "React" },
    { value: "Angular", label: "Angular" },
    { value: "vue", label: "Vue" },
    { value: "greenfoot", label: "Greenfoot" },
    { value: "net_core", label: "NET Core" },
    { value: "numpy", label: "Numpy" },
    { value: "tensorflow", label: "Tensorflow" },
    { value: "c++", label: "C++" },
    { value: "ruby", label: "Ruby" },
    { value: "pascal", label: "Pascal" },
    { value: "c", label: "C" },
    { value: "unity", label: "Unity" },
    { value: "unreal_engine", label: "Unreal Engine" },
    { value: "wpf", label: "WPF" },
    { value: "asp_net", label: "ASP.NET" },
    { value: "jquery", label: "Jquery" },
    { value: "ajax", label: "Ajax" },
  ];

  return (
    <Container>
      <Title>Личная анкета пользователя</Title>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormWrapper>
            <GroupInput>
              <label>E-mail</label>
              <Input
                {...register("email")}
                error={errors.email}
                placeholder={"E-mail"}
              />
            </GroupInput>
            <GroupInput>
              <label>Знаю</label>
              <Select
                name={"knowledge"}
                control={control}
                error={errors.knowledge}
                options={options}
                placeholder={"Знаю"}
              />
            </GroupInput>
            <GroupInput>
              <label>Хочу узнать</label>
              <Select
                name={"want_knowledge"}
                control={control}
                error={errors.knowledge}
                options={options}
                placeholder={"Знаю"}
              />
            </GroupInput>
            <GroupInput>
              <Checkbox {...register("be_mentor")} label="Хочу быть ментором" />
            </GroupInput>
            <GroupInput>
              <Checkbox {...register("find_mentor")} label="Ищу ментора" />
            </GroupInput>
            <GroupInput>
              <label>О себе</label>
              <TextArea
                {...register("about")}
                error={errors.about}
                placeholder={"О себе"}
              />
            </GroupInput>
            <TimeLabel>Выбор времени обеда по умолчанию</TimeLabel>
            <GroupTwoInput>
              <TimeInput {...register("from")} label="Начало" />
              <TimeInput {...register("to")} label="Конец" />
            </GroupTwoInput>
            <Button type="submit">Сохранить</Button>
          </FormWrapper>
        </form>
      </Content>
    </Container>
  );
};

const Title = styled.h1``;
const Content = styled.div``;
const FormWrapper = styled.div`
  & > div {
    margin-bottom: 16px;
  }
`;
const GroupInput = styled.div`
  margin: 16px 0px;

  & > div {
    margin-top: 8px;
  }
`;

const GroupTwoInput = styled.div`
  display: flex;
  & > div {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;
const TimeLabel = styled.div`
  margin-bottom: 8px;
  font-weight: 500;
`;
