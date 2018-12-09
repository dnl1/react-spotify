import React, { Component } from "react";
import SideMenu from "./components/SideMenu";
import Search from "./components/Search";
import { ThemeProvider } from "styled-components";
import { extractQueryString } from "./helpers/utils";
import theme from "./theme";
import { Wrapper, GlobalStyle } from "./style";

class App extends Component {
  componentWillMount = () => {
    const recoveredToken = this.tryRecoverToken();

    if (!recoveredToken) {
      this.redirectToSpotify();
    } else {
      if (window.location.hash.length === 0) this.validateExpireToken(recoveredToken);

      this.clearHashToken();

      localStorage.setItem(
        "authorization",
        JSON.stringify({
          ...recoveredToken,
          authorizationTime: new Date()
        })
      );
    }
  };

  validateExpireToken = (recoveredToken) => {
    const now = new Date();
    const expireDate = new Date(
      new Date(recoveredToken.authorizationTime).setSeconds(3600)
    );
    const keepValid = now <= expireDate;
    if (!keepValid) {
      this.redirectToSpotify();
    }
  };

  redirectToSpotify = () => {
    const baseUrl = process.env.REACT_APP_SPOTIFY_ACCOUNTS_BASE_URL;
    const clientId = process.env.REACT_APP_SPOTIFY_API_CLIENT_ID;

    window.location.href = `${baseUrl}authorize?client_id=${clientId}&response_type=token&redirect_uri=${"http://localhost:8080"}`;
  };

  clearHashToken = () => {
    history.pushState(
      "initial",
      document.title,
      window.location.href.split("#")[0]
    );
  };

  tryRecoverToken = () => {
    var search = window.location.hash.split("#")[1];

    if (search) return extractQueryString(search);
    else {
      const authorization = localStorage.getItem("authorization");
      return JSON.parse(authorization);
    }
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper className="App">
          <SideMenu />
          <Search />
          <GlobalStyle />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
