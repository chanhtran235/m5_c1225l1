import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./redux/action.js";

const Header = ()=>{
    const account = useSelector(state=>state.user);
    const  dispatch = useDispatch();
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        <Link className="nav-link" to="/info">Info Account</Link>
                    </div>
                </div>
                <div>
                    {
                        (account==null)?(<Link className={'mx-lg-5'} to={'/login'}>Login</Link>):""
                    }

                    <span>{account?.username}</span>
                    {
                        (account !=null)?( <button onClick={()=>{
                          dispatch(logout());
                        }} className={'btn btn-sm mx-lg-5'} >Logout</button>):""
                    }

                </div>
            </div>
        </nav>
    )
}
export default Header;