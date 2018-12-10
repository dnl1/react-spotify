import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.main``;

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

    html{
        background-color: ${props => props.theme.backgroundColor};
    }

    body {
        margin: 0;
        padding: 5px;
        font-family: ${props => props.theme.fontFamily}
    }

    * {
        box-sizing: border-box;
    }
`;

export const Input = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 1px solid;
  font-weight: bold;
  line-height: 1.4;
  outline: 0;
  padding: 0 5px;
  width: 100%;
  border-color: ${props => props.theme.greyColor};
  color: ${props => props.theme.fontColor};
`;

export const GreaterInput = styled(Input)`
  font-size: ${props => props.theme.fontSize.greater};
`;

export const Label = styled.label`
  color: ${props =>
    props.dark ? props.theme.greyColor : props.theme.fontColor};
  font-size: ${props =>
    props.small
      ? props.theme.fontSize.small
      : props.regular
      ? props.theme.fontSize.regular
      : props.theme.fontSize.tiny};
  display: block;
  padding: 0 5px;
`;

export const RegularLabel = styled(Label)`
  font-size: ${props => props.theme.fontSize.regular};
  color: ${props =>
    props.dark ? props.theme.greyColor : props.theme.fontColor};
`;

export const DefaultLink = styled(Link)`
  text-decoration: none;
  color: ${props =>
    props.dark ? props.theme.greyColor : props.theme.fontColor};
  display: flex;
  flex-flow: column;

  :hover {
    text-decoration: underline;
  }
`;
