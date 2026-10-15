import React, {useRef} from "react";
import {checkLogin} from "../../service/accountService.js";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {login, loginSuccess} from "../redux/action.js";

function Login() {
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

       const isSuccess = await dispatch(login(username,password));

       if (isSuccess){
           toast.success("Đăng nhập thành công");
           navigate("/dashboard")
       }else {
           toast.error("Đăng nhập thất bại");
       }

        // const userInfo = await checkLogin(username, password);
        // console.log("-------------------------------------")
        // console.log(userInfo)
        // if (userInfo) {
        //     const {username,role} = userInfo;
        //     //  đưa userInfo lưu trên store (redux)
        //     dispatch(loginSuccess(username,role));
        //     navigate("/dashboard")
        //     toast.success("Đăng nhập thành công");
        // } else {
        //     toast.error("Đăng nhập thất bại");
        // }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">

                        <form className="card shadow p-4">
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input
                                    ref={usernameRef}
                                    name="username"
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    ref={passwordRef}
                                    name="password"
                                    className="form-control"
                                />
                            </div>

                            <button
                                type="button"
                                className="btn btn-primary w-100"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );

}

export default Login;