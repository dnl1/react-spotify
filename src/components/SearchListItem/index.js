import SearchListItem from "./component";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetch } from "../../actions/searchActions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchListItem);
