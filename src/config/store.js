import { createStore, combineReducers} from "redux";
import playerReducer from "../features/player/playerReducer.js";
import mapReducer from "../features/map/mapReducer.js";

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
    //to see the redux tree,state,actions with redux devtools in my browser
)

export default store;