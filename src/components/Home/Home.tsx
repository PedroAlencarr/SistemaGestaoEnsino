import { Password, UserName } from "./Home.util";
import { ButtonUtil, UserProps } from "./styled";

export const Login = ({ name, password }: UserProps) => {
  return (
    <>
      <UserName name={name} />
      <Password password={password} />
    </>
  );
};

export const Validations = () => {
  return (
    <>
      <ButtonUtil title="Entrar" />
      <ButtonUtil title="Esqueci a senha" />
    </>
  );
};
