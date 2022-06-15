import { useSelector } from "react-redux";
import { useNavigate,useLocation } from "react-router-dom";


export default function ValidateSession() {
    const location = useLocation()
    let navigate = useNavigate();
    console.log(location)
    const { isLogin } = useSelector((state) => state.data)
    let url = window.location.href;

    if (url.indexOf('login') > -1 || url.indexOf('register') > -1 || url.indexOf('admin') > -1 || url === 'http://localhost:3000/') {
        console.log("in route",isLogin)
        return true
    }
    else
    {
        if(!isLogin)
        {
            navigate("/")
            return (false)
        }
    }
}