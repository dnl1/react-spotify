import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

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

export const SearchWrapper = styled.div`
  display: inline-block;
  margin-left: 30px;
  width: 85%;
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

export const Label = styled.label`
  color: ${props => props.theme.fontColor};
  font-size: ${props => props.theme.fontSize.tiny};
  display: block;
  padding: 0 5px;
`;