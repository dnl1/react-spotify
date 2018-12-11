import React, { Component } from "react";
import SearchListItem from "../SearchListItem";
import { Label, media } from "../../style";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  ${media.tablet`
    justify-content: space-around;
  `}
`;

const RegularLabel = styled(Label)`
  font-size: ${props => props.theme.fontSize.regular};
  margin-top: 45px;
  margin-bottom: 10px;
  margin-left: 3px;

  ${media.tablet`
    margin-top: 20px;
    margin-bottom: 0;
  `}
`;

class FavoriteAlbums extends Component {
  render() {
    let albums = { items: [] };
    const jsonFavoriteAlbums = localStorage.getItem('favoriteAlbums');

    if (jsonFavoriteAlbums) {
      albums = JSON.parse(jsonFavoriteAlbums);
    }

    return jsonFavoriteAlbums && albums.length > 0 ? (
      <div>
        <RegularLabel>Álbuns buscados recentemente</RegularLabel>
        <Wrapper className="search__list">
          {albums.map(item => {
            return (
              <SearchListItem
                key={item.id}
                {...item}
              />
            );
          })}
        </Wrapper>
      </div>
    ) : (
        <span />
      );
  }
}

export default FavoriteAlbums;
