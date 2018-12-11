import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-flow: row;
  color: ${props => props.theme.fontColor};
  cursor: pointer;
  margin-bottom: 30px;

  :hover {
    color: ${props => props.theme.greyColor};
  }
`;

const StyledBackButton = styled.i`
  border: 1.5px solid;
  border-right: 0;
  border-bottom: 0;
  transform: rotate(-45deg);
  height: 15px;
  width: 15px;
`;

class BackButton extends Component {
  render() {
    return (
      <Wrapper onClick={this.props.onClick}>
          <StyledBackButton />
          {this.props.children}
      </Wrapper>
    );
  }
}

export default BackButton;
