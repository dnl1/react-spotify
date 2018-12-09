import Search from "./component";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetch } from "../../actions/searchActions";

const mapStateToProps = state => {
  return {
      ...state.albumsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetch
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
