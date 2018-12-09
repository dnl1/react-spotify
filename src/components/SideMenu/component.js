import React, { Component } from "react";
import styled from "styled-components";
import Svg from "../../assets/images/spotify-icon.svg";

const SideMenuWrapper = styled.aside`
  background-color: ${props => props.theme.backgroundColor};
  width: 100px;
  padding: 5px;
  display: inline-block;
`;

class SideMenu extends Component {
  render() {
    return (
      <SideMenuWrapper>
        <Svg />
      </SideMenuWrapper>
    );
  }
}

export default SideMenu;
