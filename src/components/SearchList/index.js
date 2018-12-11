import SearchList from "./component";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetch } from "../../actions/searchActions";

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList);
