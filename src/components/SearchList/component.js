import React, { Component } from "react";
import SearchListItem from "../SearchListItem";
import { Label } from "../../style";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const RegularLabel = styled(Label)`
  font-size: ${props => props.theme.fontSize.regular};
  margin-top: 45px;
  margin-bottom: 10px;
  margin-left: 3px;
`;

class SearchList extends Component {
  render() {
    const { albums, query } = { ...this.props };

    return albums ? (
      <div>
        <RegularLabel>Resultados encontrados para "{query}"</RegularLabel>
        <Wrapper className="search__list">
          {this.props.albums.items.map(item => {
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

export default SearchList;
