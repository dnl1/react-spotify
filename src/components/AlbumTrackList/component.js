import React, { Component } from "react";
import styled from "styled-components";
import { msToMinutesAndSeconds } from "../../helpers/utils";
import { Label } from "../../style";

const AlbumTrackListWrapper = styled.div`
  display: inline-flex;
  flex-flow: column;
  width: 70%;
`;

const OrderedList = styled.ol`
  color: ${props => props.theme.fontColor};
  margin: 0;
  counter-reset: item;
  list-style-type: none;

  li {
    cursor: pointer;
    p {
      display: inline-flex;
      margin: 8px;
    }
  }

  li:before {
    content: counter(item) ". ";
    counter-increment: item;
    display: inline-flex;
    color: ${props => props.theme.greyColor};
    width: 25px;
    height: 25px;
  }

  li:hover {
    :before {
      content: "";
      background-image: url(/assets/images/play.svg);
      background-repeat: no-repeat;
      vertical-align: middle;
      margin-right: 6px;
      margin-left: -6px;
    }
  }

  li.active {
    :before {
      content: "";
      background-image: url(/assets/images/pause.svg);
      background-repeat: no-repeat;
      vertical-align: middle;
      margin-right: 6px;
      margin-left: -6px;
    }
  }
`;

const StyledLabel = styled(Label)`
  float: right;
`;

class AlbumTrackList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getTrackByAlbumById(this.props.albumId);
  }

  play = file => {
    if (window.audio === undefined || window.audio.src !== file) {
      window.audio = new Audio(file);
    }

    window.audio.play();
  };

  pause = () => {
    if (window.audio) window.audio.pause();
  };

  playAndPause = (item, evt) => {
    const target = evt.target.classList.contains("sound_track")
      ? evt.target
      : evt.target.closest(".sound_track");
    const isPlaying = target.classList.contains("active");

    document.querySelectorAll(".sound_track").forEach(item => {
      item.classList.remove("active");
    });

    this.pause();

    if (!isPlaying) {
      target.classList.add("active");
      this.play(item.preview_url);

      window.audio.onended = () => {
        target.classList.remove("active");
        window.audio = undefined;
      };
    }
  };

  render() {
    const { tracks } = { ...this.props };

    return (
      <AlbumTrackListWrapper>
        <OrderedList>
          {tracks.items.map(item => (
            <li
              key={item.id}
              className="sound_track"
              onClick={() => this.playAndPause(item, event)}
            >
              <p>{item.name}</p>
              <StyledLabel small dark>
                {msToMinutesAndSeconds(item.duration_ms)}
              </StyledLabel>
            </li>
          ))}
        </OrderedList>
      </AlbumTrackListWrapper>
    );
  }
}

export default AlbumTrackList;
