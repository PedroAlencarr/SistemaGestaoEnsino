import { useState } from "react";
import { InputText, UserProps, Label, Container, ButtonProps , Text, ViewTitle, ReservedRights, Logo } from "./styled";

// const [user, setUser] = useState('');

export const UserName = ({ name }: UserProps) => {
  return <InputText inputMode="email">{name || 'user@email.com'}</InputText>;
};

export const Password = ({ password }: UserProps) => {
    return <InputText inputMode="email">{password || '********' }</InputText>;
  };

export const Button  = ({title} : ButtonProps) => {
    return <Container><Label>{title}</Label></Container>
};

export const AppTitle = () => <ViewTitle><Text>Sistema de Gestão de Ensino</Text></ViewTitle>

export const Copyright = () => <ReservedRights>&copy; Sistema de Gestão de Ensino 2024. Todos os direitos reservados</ReservedRights>

export const LogoType = () => <Logo source={require('../../assets/images/logo_transparent.png')}/>