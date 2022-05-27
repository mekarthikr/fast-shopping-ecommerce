import "../assets/style/register.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { firstname, lastname, email, password } = state;
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password) {
      console.log("enter data");
    } else {
      console.log(state);
      dispatch(addUser(state));
      navigate("/login");
    }
  };

  return (
    <>
      <div className="login-block">
        <h1>
          {" "}
          Hi <br /> Fellow Stranger{" "}
        </h1>
        <p>Please enter your details to create a new account</p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-6">
              <label>FIRST NAME</label>
              <input
                className="form-control form-input"
                type={"text"}
                name="firstname"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>LAST NAME</label>
              <input
                className="form-control form-input"
                type={"text"}
                name="lastname"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>EMAIL ADDERSS</label>
            <input
              className="form-control form-input"
              type={"text"}
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>PASSWORD</label>
            <input
              className="form-control form-input"
              type={"password"}
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input check"
              type="checkbox"
              value=""
            />
            <label className="form-check-label">
              By checking here, you agree to our <strong>Terms</strong>.
            </label>
          </div>
          <button type="submit" className="login-button">
            {" "}
            CONTINUE{" "}
          </button>
        </form>
      </div>
    </>
  );
}
