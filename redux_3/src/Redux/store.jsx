import { todoReducer } from "./todos/reducer";
import { authReducer } from "./auth/reducer";
import {combineReducers, createStore} from 'redux'



const rootReducer=combineReducers({
    auth:authReducer,
    app:todoReducer
})

export const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())