import React, { Component } from "react";
import styled from "styled-components";
import Svg from "../../assets/images/spotify-icon.svg";
import Icon from "../../assets/images/spotify-icon.png";

const SideMenuWrapper = styled.aside`
  width: 100px;
  padding: 5px;
  display: inline-flex;
  flex-flow: column;
  vertical-align: top;
`;

const TempSvg = styled(Svg)`
  background: white;
  border-radius: 99px;
`;

class SideMenu extends Component {
  render() {
    return (
      <SideMenuWrapper>
        <img src={Icon} width="85" height="85"/>
      </SideMenuWrapper>
    );
  }
}

export default SideMenu;
