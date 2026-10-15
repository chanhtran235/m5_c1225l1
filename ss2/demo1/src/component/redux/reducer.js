import {combineReducers} from "redux";

const initUser = null;
const userReducer = (state=initUser,action)=>{
    switch (action.type){
        case "SAVE_ACCOUNT":
            return action.payload;
        case "REMOVE_ACCOUNT":
            return null;
        default:
            return state;
    }
}
const cartReducer = (state=[],action)=>{
    switch (action.type){
        case "ADD":
            return [
                ...state,
                action.payload
            ];
        case "REMOVE_ACCOUNT":
            return [];
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})
