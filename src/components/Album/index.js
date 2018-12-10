import Album from "./component";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAlbumById } from "../../actions/albumActions";

const mapStateToProps = state => {
  return {
      ...state.albumsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getAlbumById
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
