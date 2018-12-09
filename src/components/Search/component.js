import React, { Component } from "react";
import styled from "styled-components";
import SearchList from "../SearchList/component";
import { SearchWrapper, Label, Input } from '../../style';

const GreaterInput = styled(Input)`
  font-size: ${props => props.theme.fontSize.greater};
`;

class Search extends Component {
  search = evt => {
    const value = evt.target.value;

    if (value.length > 1) this.props.fetch(value);
  };

  render() {
    return (
      <SearchWrapper>
        <Label>Busque por artistas, álbuns ou músicas</Label>
        <GreaterInput placeholder="Comece a escrever..." onChange={this.search} />
        <SearchList albums={this.props.albums} query={this.props.query} />
      </SearchWrapper>
    );
  }
}

export default Search;
