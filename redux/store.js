import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import persistState from "redux-localstorage";
const middlewares = [thunk];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer =
  typeof window === "object"
    ? composeEnhancers(
        applyMiddleware(...middlewares)
        // persistState(['filters'], /*config*/)
      )
    : composeEnhancers(applyMiddleware(...middlewares));

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

// export default createStore(rootReducer, enhancer);

const initStore = () => {
  return createStore(reducer, enhancer);
};

export const wrapper = createWrapper(initStore);
