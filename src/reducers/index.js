import {
    combineReducers
} from "redux";
import albumsReducer from './albumsReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    albumsReducer,
    searchReducer
});