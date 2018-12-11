import React, {
  Component
} from "react";
import styled from "styled-components";
import SearchList from "../SearchList/component";
import FavoriteAlbums from '../FavoriteAlbums/component';
import {
  Label,
  Input,
  media
} from "../../style";

export const SearchWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  flex-direction: column;
`;

export const GreaterInput = styled(Input)
  `
  font-size: ${props => props.theme.fontSize.greater};
  ${
  media.tablet`
      font-size: ${props => props.theme.fontSize.mobileGreater}
      margin: 0 5px;
      width: auto;
    `
  }
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

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: this.props.query || ''
    }
  }
  search = evt => {
    const value = evt.target.value;
    this.setState({ query: value });
    this.props.fetch(value);
  };

  render() {
    return (
      <SearchWrapper>
        <Label>Busque por artistas, álbuns ou músicas</Label>
        <GreaterInput
          placeholder="Comece a escrever..."
          onChange={this.search}
          type="search"
          value={this.state.query}
        />

        {this.props.albums.items.length > 0 ?
          (<SearchList albums={this.props.albums} query={this.state.query} />) :
          this.state.query.length === 0 ? (<FavoriteAlbums />) :
            <RegularLabel>Nenhum resultado encontrado</RegularLabel>}
      </SearchWrapper>
    );
  }
}

export default Search;