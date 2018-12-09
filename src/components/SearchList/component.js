import React, { Component } from "react";
import SearchListItem from "../SearchListItem";
import { Label } from '../../style';

class SearchList extends Component {
  render() {
    const { albums, query } = { ...this.props };
    return albums ? (
      <div>
        <Label>Resultados encontrados para "{query}"</Label>
        {this.props.albums.items.map(item => {
          return (
            <SearchListItem
              key={item.id}
              name={item.name}
              href={item.href}
              images={item.images}
              artists={item.artists}
            />
          );
        })}
      </div>
    ) : (
      <span />
    );
  }
}

export default SearchList;
