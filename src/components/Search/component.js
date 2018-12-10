import React, { Component } from "react";
import styled from "styled-components";
import SearchList from "../SearchList/component";
import { Label, GreaterInput } from "../../style";

export const SearchWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  flex-direction: column;
`;

class Search extends Component {
  search = evt => {
    const value = evt.target.value;
    this.props.fetch(value);
  };

  render() {
    return (
      <SearchWrapper>
        <Label>Busque por artistas, álbuns ou músicas</Label>
        <GreaterInput
          placeholder="Comece a escrever..."
          onChange={this.search}
        />
        <SearchList albums={this.props.albums} query={this.props.query} />
      </SearchWrapper>
    );
  }
}

export default Search;
