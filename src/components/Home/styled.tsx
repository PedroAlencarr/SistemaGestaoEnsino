import styled from "styled-components/native";

export type UserProps = {
    name?: string,
    password?: string,
    label?: string,
    title?: string,
}

export const InputText = styled.TextInput`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 18px;
    color: black;
    border-color: black;
    border-width: 1px;
    margin: 10px;
    width: 300px;
    padding: 5px;
`

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
    background-color: white;

`

export const Label = styled.Text`
    color: black;
    font-size: 24px;
    padding: 20px;
`

export const ButtonUtil = styled.TouchableOpacity`
    background-color: white;
    width: 300px;
    padding: 25px;
    border-radius: 50px;
    border-color: black;
    border-width: 1px;
    margin: 5px;
`