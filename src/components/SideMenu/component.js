import React, { Component } from "react";
import styled from "styled-components";
import Svg from "../../assets/images/spotify-icon.svg";
import Icon from "../../assets/images/spotify-icon.png";
import { media } from "../../style";

const SideMenuWrapper = styled.aside`
  width: 15%;
  max-width: 130px;
  padding: 5px;
  display: inline-flex;
  flex-flow: column;
  vertical-align: top;
  ${media.tablet`
    flex-flow: row;
    display:flex;
    width: auto;
  `}
`;

const TempSvg = styled(Svg)`
  background: white;
  border-radius: 99px;
`;

class SideMenu extends Component {
  render() {
    return (
      <SideMenuWrapper>
        <img src={Icon} width="85" height="85" />
      </SideMenuWrapper>
    );
  }
}

export default SideMenu;
