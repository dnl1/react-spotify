import React, { Component } from "react";

class SearchListItem extends Component {
  render() {
    const image = this.props.images[1];
    return (
      <div>
        <img src={image.url} width={image.width} height={image.height} />
        <a href={this.props.href}>{this.props.name}</a>
        <a href={this.props.artists[0].href}>{this.props.artists[0].name}</a>
      </div>
    );
  }
}

export default SearchListItem;
