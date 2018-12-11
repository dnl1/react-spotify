import Album from "./component";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTrackByAlbumById } from "../../actions/albumActions";

const mapStateToProps = state => {
  return {
      ...state.albumsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getTrackByAlbumById
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
