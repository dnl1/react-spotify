import React, { Component } from "react";
import styled from "styled-components";
import { DefaultLink } from "../../style";
import { resolvePath } from "../../helpers/routeHelper";

const notFoundPath = resolvePath('/assets/images/not-found.png');

const Wrapper = styled.div`
  max-width: 200px;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 15px 0;
  margin-left: 5px;
  margin-right: 51px;

  img {
    background-image: url(${notFoundPath});
    background-position-x: -197px;
    background-position-y: -96px;
    text-indent: -9999px;
  }

  :hover {
    transform: scale(1.03);
    filter: grayscale(50%);
  }
`;

class SearchListItem extends Component {
  render() {
    const image = this.props.images[1];

    return (
      <Wrapper className="search__list__item">
        <DefaultLink to={resolvePath(`/album/${this.props.id}`)}>
          <img src={image.url} width={200} height={200} />
        </DefaultLink>
        <DefaultLink to={resolvePath(`/album/${this.props.id}`)}>
          {this.props.name}
        </DefaultLink>
        <DefaultLink dark="true" to={this.props.artists[0].href}>
          {this.props.artists[0].name}
        </DefaultLink>
      </Wrapper>
    );
  }
}

export default SearchListItem;
