// import {applyMiddleware, compose} from "redux";
// import {configureStore} from "reduxjs/toolkit";

// import {reducers} from "../reducer";
// import thunk from "redux-thunk";

// export const store = configureStore(
//     reducers,
//     compose(
//         applyMiddleware(thunk)
//     )
// );

// store.subscribe(() => console.log(store.getState()))

import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "../reducer";
import thunk from "redux-thunk";

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk)
    )
);

store.subscribe(() => console.log(store.getState()))