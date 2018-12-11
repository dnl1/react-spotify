import React, { Component } from "react";
import AuthenticationHelper from "../../helpers/authenticationHelper";
import AlbumTrackList from "../AlbumTrackList";
import { Label, media } from "../../style";
import styled from "styled-components";
import BackButton from "../BackButton";
import { withRouter } from "react-router-dom";
import { resolvePath } from "../../helpers/routeHelper";

const notFoundPath = resolvePath('/assets/images/not-found.png');

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: end;
  width: 95%;

    ${media.tablet`
      width: 99%;
      position: absolute;
      top: 0;
      background-color: ${props => props.theme.backgroundColor};
      padding: 4%;
  `}
`;

const AlbumWrapper = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;

  ${media.tablet`
    flex-flow: column;
  `}
`;

const AlbumLogoWrapper = styled.div`
  display: inline-flex;
  flex-flow: column;
  align-items: center;

  img {
    background-image: url(${notFoundPath});
    background-position-x: -94px;
    text-indent: -9999px;
    max-width: 400px;
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

    this.props.getAlbumById(id);
  }

  componentWillUnmount() {
    this.props.reset();
  }

  backButtonClick = () => {
    const { history } = this.props;

    if (window.audio) window.audio.pause();
    if (window.history.state && window.history.state.key) window.history.back();
    else history.push("/");
  };

  saveFavoriteAlbum = (id, name, artists, images) => {
    const jsonFavoriteAlbum = localStorage.getItem('favoriteAlbums');
    const favoriteAlbums = jsonFavoriteAlbum ? JSON.parse(jsonFavoriteAlbum) : [];

    const repeated = favoriteAlbums.map(item => item.id === id).filter(item => item === true);

    if (repeated.length === 0 || (repeated && repeated[0] === false)) {

      favoriteAlbums.push({
        id,
        name,
        artists,
        images
      });
      localStorage.setItem('favoriteAlbums', JSON.stringify(favoriteAlbums));
    }
  }

  render() {
    console.log('album props', this.props);
    const { images, name, artists, id } = { ...this.props };

    const artist = artists !== undefined ? artists[0] : {};
    const largeImage = images !== undefined ? images[0] : {};

    if (id && artists && images)
      this.saveFavoriteAlbum(id, name, artists, images);

    return (
      <Wrapper className="component-wrapper">
        <BackButton className="back-button" onClick={this.backButtonClick}>
          Voltar
        </BackButton>
        <AlbumWrapper className="album-wrapper">
          <AlbumLogoWrapper>
            <img src={largeImage.url} width="100%" height="auto" />
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
