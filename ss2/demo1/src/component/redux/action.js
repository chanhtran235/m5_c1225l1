import {checkLogin} from "../../service/accountService.js";


export const loginSuccess = (username,role)=>{
    return {
        type:"SAVE_ACCOUNT",
        payload: {
            username: username,
            role: role
        }
    }
}
export const login = (username,password)=>{
    return async (dispatch)=>{
        // call api
        let userInfo = await checkLogin(username,password);
        if (userInfo){
            const {username,role}= userInfo;
            dispatch(loginSuccess(username,role));
            return true;
        }else {
            return false
        }
    }
}


export const logout=()=>{
    return {
        type:"REMOVE_ACCOUNT"
    }
}


