import { AppTitle, Button, LogoType, Password, UserName } from "./Home.util";
import { Label, UserProps, ViewButton, ViewLogin, ViewTitle } from "./styled";

export const TitleApp = () => <ViewTitle><LogoType /></ViewTitle>

export const Login = ({ name, password }: UserProps) => {
  return (
    <ViewLogin>
      
      <UserName name={name} />
      <Password password={password} />
      <Label onPress={() => console.log('clicou')}>Esqueci a senha</Label>
    </ ViewLogin>
  );
};

export const Validations = () => {
  return (
    <ViewButton>
      <Button title="Entrar" />
      <Button title="Cadastrar" />
    </ ViewButton>
  );
};


export const HomeCard = () => {
  return(
    <>
      <TitleApp />
      <Login />
      <Validations />
    </>
  )
}