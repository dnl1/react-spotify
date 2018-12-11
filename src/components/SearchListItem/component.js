import React, { Component } from "react";
import styled from "styled-components";
import { DefaultLink } from "../../style";
import { resolvePath } from "../../helpers/routeHelper";
import { media } from "../../style";

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
  overflow: hidden;

  img {
    transition: .3s ease;
    background-image: url(${notFoundPath});
    background-position-x: -197px;
    background-position-y: -96px;
    text-indent: -9999px;
  }

  :hover {
    img{
      transform: scale(1.1);
    }
  }

  ${media.tablet`
    justify-content: space-between;
    margin: 2%;
  `}  
`;

const StyledDefaultLink = styled(DefaultLink)`
  overflow: hidden;
`

class SearchListItem extends Component {
  render() {
    const image = this.props.images && this.props.images.length > 1 ? this.props.images[1] : { url: '' };

    return (
      <Wrapper className="search__list__item">
        <StyledDefaultLink to={`/album/${this.props.id}`}>
          <img src={image.url} width={200} height={200} />
        </StyledDefaultLink>
        <DefaultLink to={`/album/${this.props.id}`}>
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
