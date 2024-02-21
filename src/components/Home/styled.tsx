import styled from "styled-components/native";

export type UserProps = {
    name?: string,
    password?: string,
    label?: string,
    title?: string,
}
export type ButtonProps = {
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
    background-color: #c9d3d3;
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
    background-color: #92c1ec;

`

export const Label = styled.Text`
    color: black;
    font-size: 16px;
    padding: 5px;
`
export const Text = styled.Text`
    color: black;
    font-size: 24px;
    margin: 10px;
    /* padding: 20px; */
    /* margin-bottom: 100px; */
`

export const Container = styled.TouchableOpacity`
    background-color: #80daf586;
    width: 300px;
    padding: 3px;
    align-items: center;
    border-radius: 50px;
    border-color: black;
    border-width: 1px;
    margin: 5px;
    `
export const ViewTitle = styled.View` 
    flex: .5;
    /* border-width: 5px; */
    justify-content: flex-end;
    align-items: center;
    padding: 3px;
    margin-top: 30px;
`
export const ViewLogin = styled.View` 
    flex: .25;
    /* border-width: 2px; */
    justify-content: flex-end;
    align-items: center;
    padding: 3px;
`

export const ViewButton = styled.View` 
    flex: .25;
    /* border-width: 2px; */
    justify-content: flex-start;
    align-items: center;
    padding: 3px;
    margin-bottom: 10px;
`
export const ReservedRights = styled.Text`
    font-style: italic;
    font-size: 10px;
    color: black;
    padding: 3px;
    text-align: center;
`
export const Logo = styled.Image`
    justify-content: center;
    width: 400px;
`