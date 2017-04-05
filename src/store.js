import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { mainReducer } from "./mainAR";

const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const store = function(data) {
  var reducer = combineReducers({ main: mainReducer });

  //let finalCreateStore;

  if (process.env.NODE_ENV !== "production") {
    //finalCreateStore = applyMiddleware(logger, thunk)(createStore)
    return applyMiddleware(logger, thunk)(createStore)(reducer, data);
  } else {
    //finalCreateStore = applyMiddleware(thunk)(createStore)
    return applyMiddleware(thunk)(createStore)(reducer, data);
  }
  //return  finalCreateStore(reducer, data)
};
export default store;
