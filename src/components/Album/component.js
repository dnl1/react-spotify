import React, { Component } from "react";
import AuthenticationHelper from "../../helpers/authenticationHelper";
import AlbumTrackList from "../AlbumTrackList";
import { Label } from "../../style";
import styled from "styled-components";
import BackButton from "../BackButton";
import { withRouter } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: end;
  width: 95%;
`;

const AlbumWrapper = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
`;

const AlbumLogoWrapper = styled.div`
  display: inline-flex;
  flex-flow: column;
  align-items: center;

  img {
    background-image: url(/assets/images/not-found.png);
    background-position-x: -94px;
    text-indent: -9999px;
  }
`;

const StyledLabel = styled(Label)`
  margin-top: 10px;
`;

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ""
    };
  }

  componentWillMount() {
    const authenticationHelper = new AuthenticationHelper();
    authenticationHelper.verify();

    const { id } = this.props.match.params;

    console.log('will mount');
    this.props.getAlbumById(id);
  }

  backButtonClick = () => {
    this.props = {};
    if (window.audio) window.audio.pause();
    if (window.history.state && window.history.state.key) window.history.back();
    else this.props.history.push("/");
  };

  render() {
    const { images, name, artists, id, loading } = { ...this.props };

    const artist = artists !== undefined ? artists[0] : {};
    const largeImage = images !== undefined ? images[0] : {};

    return loading ? (
      <span />
    ) : (
      <Wrapper className="album__wrapper">
        <BackButton className="back_button" onClick={this.backButtonClick}>
          Voltar
        </BackButton>
        <AlbumWrapper>
          <AlbumLogoWrapper>
            <img src={largeImage.url} width={400} height={400} />
            <StyledLabel regular>{name}</StyledLabel>
            <StyledLabel dark="true" small>
              {artist.name}
            </StyledLabel>
          </AlbumLogoWrapper>
          {id ? <AlbumTrackList albumId={id} /> : <span />}
        </AlbumWrapper>
      </Wrapper>
    );
  }
}

export default withRouter(Album);
