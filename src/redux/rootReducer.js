import { combineReducers } from "redux";
import { asyncIncrement } from "./actions";
import { ASYNC_INCREMENT, DECREMENT, INCREMENT, THEME_CHANGE } from "./types";

 

function СounterReducer(state=0, action) {
    
    if(action.type === INCREMENT) {
            return state +1;
    }
    else if(action.type === DECREMENT) {
        if(state > 0)
        return state -1;
    }
    else if (action.type === ASYNC_INCREMENT){
        setTimeout(() => {
        
    }, 1000);
}
    return state
}

const initialState = {
    theme: "light"
} 

function themeReducer(state, action) {
    if(action.type === THEME_CHANGE ) {
        return state;
    }
    return state;
}

export const rootReducer   = combineReducers(
    {
    counter: СounterReducer,
    theme: themeReducer
    }
)