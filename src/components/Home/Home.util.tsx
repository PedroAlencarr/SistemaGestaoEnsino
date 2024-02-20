import { useState } from "react";
import { InputText, UserProps, ButtonUtil, Label } from "./styled";

// const [user, setUser] = useState('');

export const UserName = ({ name }: UserProps) => {
  return <InputText inputMode="email">{name}</InputText>;
};

export const Password = ({ password }: UserProps) => {
    return <InputText inputMode="email">{password}</InputText>;
  };

export const Button  = ({title} : UserProps) => {
    return <ButtonUtil><Label>{title}</Label></ButtonUtil>
};