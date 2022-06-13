import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../assets/style/userProfile.css"

export default function UserProfile()
{
    let navigate = useNavigate();
    const {user}=useSelector((state)=>state.data)
    console.log("user",user)
    const editHandle = (e) => {
        e.preventDefault();
        navigate("/edit", { state: user });
      };
    return(
        <div className="profile-user">
        <h1>ACCOUNT PROFILE</h1>
        <hr/>
        <div className="profile-img bg-blue">
            <h2 className="color-white">{user.firstname[0]}{user.lastname[0]}</h2>
        </div>
        <table>
            <tbody>
           
            <tr>
                <td>First Name</td>
                <td>{user.firstname}</td>
            </tr>
            <tr>
                <td>Last Name</td>
                <td>{user.lastname}</td>
            </tr>
            <tr>
                <td>Email Id</td>
                <td>{user.email}</td>
            </tr>
            </tbody>
        </table>
        <button className="bg-blue color-white" onClick={editHandle}>
          {" "}
          Edit Profile{" "}
        </button>
        </div>
    )
}
