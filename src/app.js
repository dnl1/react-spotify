import React, { Component } from "react";
import SideMenu from "./components/SideMenu";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Wrapper, GlobalStyle } from "./style";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import AuthenticationHelper from "./helpers/authenticationHelper";
import './assets/images/favicon.png';

const supportsHistory = "pushState" in window.history;

class App extends Component {
  componentWillMount = () => {
    const authenticationHelper = new AuthenticationHelper();
    authenticationHelper.verify();
  };

  render() {
    return (
      <Router forceRefresh={!supportsHistory} basename={process.env.BASENAME}>
        <ThemeProvider theme={theme}>
          <Wrapper className="App">
            <SideMenu />
            <Routes />
            <GlobalStyle />
          </Wrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
