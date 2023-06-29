import { TextInput } from 'react-native';
import { ViewProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface InputProps extends ViewProps {
  isFilled: boolean,
  isFocused: boolean,
  hasError: boolean
}

export const Container = styled.View`
  margin: 15px;
  margin-top: 25px;
`;

export const InputText = styled(TextInput) <InputProps>`
  width: 100%;
  background-color: #92c3b1;
  color: #fff;
  height: 60pxs;
  border-radius: 5px;
  border-color: #fff;
  border-width: 1px;
  padding: 15px;
  margin-bottom: 10px;

  ${({ isFocused, isFilled }) => (isFocused || isFilled) && css`
  border-bottom-left-radius: 2px;
  border-bottom-color: aliceblue;
  `}

  ${({hasError}) => hasError && css`
    border-bottom-color: red;
  `}

`;
