import "../../assets/style/register.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { ValidateRegister } from "../../validation/register";

export default function Register() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const defaultError={
    firstnameError: "",
    lastnameError: "",
    emailError: "",
    passwordError: ""
  }
  const [
    { firstnameError, lastnameError, emailError, passwordError },
    setError
  ] = useState(defaultError);
  // const [error, setError] = useState({
  //   firstnameError: "Enter proper name",
  //   lastnameError: "Enter proper name",
  //   emailError: "Enter valid mail id",
  //   passwordError: "Enter valid mail id",
  // });

  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { firstname, lastname, email, password } = state;
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstnameError)
    // console.log(state)
    // setState(change)
    // console.log(state)
    // if (!firstname || !lastname || !email || !password) {
    //   console.log("enter data");
    // } else {
    //   console.log(state);
    //   dispatch(addUser(state));
    //   navigate("/login");
    // }
    function clearState()
    {
      setError(defaultError)
    }
    const validate=ValidateRegister(state)
    if(validate==true)
    {
      clearState()
      dispatch(addUser(state));
      navigate("/login");
    }
    else
    {
      setError(validate)
      console.log(firstnameError,lastnameError,emailError,passwordError)
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
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="row">
            <div className="form-group col-md-6">
              <label>FIRST NAME</label>
              <input
                className="form-control form-input"
                type={"text"}
                name="firstname"
                onChange={handleInputChange}
              />
              <p className="register-error color-red" >{firstnameError}</p>
            </div>
            <div className="form-group col-md-6">
              <label>LAST NAME</label>
              <input
                className="form-control form-input"
                type={"text"}
                name="lastname"
                onChange={handleInputChange}
              />
              <p className="register-error color-red" >{lastnameError}</p>
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
            <p className="register-error color-red" >{emailError}</p>
          </div>
          <div className="form-group">
            <label>PASSWORD</label>
            <input
              className="form-control form-input"
              type={"text"}
              name="password"
              onChange={handleInputChange}
            />
            <p className="register-error color-red" >{passwordError}</p>
          </div>
          <div className="form-check">
            <input required
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