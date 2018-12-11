import Album from "./component";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAlbumById, reset } from "../../actions/albumActions";

const mapStateToProps = state => {
  return {
      ...state.albumsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getAlbumById,
      reset
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
