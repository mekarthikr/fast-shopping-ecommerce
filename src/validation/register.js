// import { useSelector } from "react-redux";

export function ValidateRegister(state)
{
    const nameRegex = /^[a-zA-Z]{2,15}$/;
    const emailRegex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/;
    const passwordRegex = /^[A-Za-z0-9]{7,15}$/;
    const error={
        firstnameError: "",
        lastnameError: "",
        emailError: "",
        passwordError: ""
    }
    console.log("called",state)
    // if(state.firstname==""||state.lastname==""||state.email==""||state.password==="")
    // {
    //     // firstnameError="error"
    //     error.firstnameError= "errr"
    //     error.lastnameError= "eee"
    //     error.emailError= "err"
    //     error.passwordError= "errr"
    // }
    // if(state.firstname=="")
    // return(error)
    if(state.firstname === "") {
         error.firstnameError = "First Name field is required";
    }
    else if(!nameRegex.test(state.firstname)) {
        error.firstnameError = "Please provide a valid name";
    }
    if(state.lastname === "") {
        error.lastnameError = "Last Name field is required";
   }
   else if(!nameRegex.test(state.lastname)) {
       error.lastnameError = "Please provide a valid name";
   }
    if(state.email === "") {
        error.emailError = "Email field is required";
    }
    else if(!emailRegex.test(state.email)) {
        error.emailError = "Please provide a valid Email";
    }
    if(state.password === "") {
        error.passwordError = "Password field is required";
    }
    else if(!passwordRegex.test(state.password)) {
        error.passwordError = "Please provide a valid Password";
    }

    if(error.firstnameError || error.lastnameError || error.emailError || error.passwordError) {
        return error;
    }

    return true
}