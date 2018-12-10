import { extractQueryString } from "./utils";

class AuthenticationHelper {
  constructor() {}
  verify = () => {
    const recoveredToken = this.tryRecoverToken();

    if (!recoveredToken) {
      this.redirectToSpotify();
    } else {
      const valid = this.validateExpireToken(recoveredToken);

      this.clearHashToken();

      if (!recoveredToken.authorizationTime) {
        const now = new Date();
        now.setSeconds(now.getSeconds() + parseInt(recoveredToken.expires_in));

        localStorage.setItem(
          "authorization",
          JSON.stringify({
            ...recoveredToken,
            authorizationTime: now
          })
        );
      }

      if (!valid) {
        this.redirectToSpotify();
      }
    }
  };

  validateExpireToken = recoveredToken => {
    const now = new Date();
    const expire = new Date();

    expire.setSeconds(
      expire.getSeconds() + parseInt(recoveredToken.expires_in)
    );

    const expireDate = recoveredToken.authorizationTime
      ? new Date(new Date(new Date(recoveredToken.authorizationTime)))
      : expire;

    const valid = now <= expireDate;

    return valid;
  };

  redirectToSpotify = () => {
    const baseUrl = process.env.REACT_APP_SPOTIFY_ACCOUNTS_BASE_URL;
    const clientId = process.env.REACT_APP_SPOTIFY_API_CLIENT_ID;

    window.location.href = `${baseUrl}authorize?client_id=${clientId}&response_type=token&redirect_uri=${
      process.env.REACT_APP_REDIRECT_URI
    }`;
  };

  clearHashToken = () => {
    if (window.location.href.split("#").length > 1) {
      history.pushState(
        "initial",
        document.title,
        window.location.href.split("#")[0]
      );
    }
  };

  tryRecoverToken = () => {
    var search = window.location.hash.split("#")[1];

    if (search) return extractQueryString(search);
    else {
      const authorization = localStorage.getItem("authorization");
      return JSON.parse(authorization);
    }
  };
}

export default AuthenticationHelper;
