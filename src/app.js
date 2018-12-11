import React, { Component } from "react";
import SideMenu from "./components/SideMenu";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Wrapper, GlobalStyle } from "./style";
import { Router } from "react-router-dom";
import Routes from "./routes";
import AuthenticationHelper from "./helpers/authenticationHelper";
import createBrowserHistory from 'history/createBrowserHistory';
import './assets/images/favicon.png';

const supportsHistory = "pushState" in window.history;
const history = createBrowserHistory({ basename: process.env.BASENAME });

class App extends Component {
  componentWillMount = () => {  
    const authenticationHelper = new AuthenticationHelper();
    authenticationHelper.verify();
  };

  render() {
    return (
      <Router forceRefresh={!supportsHistory} history={history}>
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
