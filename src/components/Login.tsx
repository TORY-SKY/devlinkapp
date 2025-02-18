import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState, FocusEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignInput, SigninErrors } from "./Interface";
import { toast, ToastContainer } from "react-toastify";
import google from "../assets/images/google.svg";
import { useUser } from "../common/LoginContext";

import "../common/cssFile/ai.css";

const Login = () => {
  // the navigate variable for navigation
  const navigate = useNavigate();
  const [showPasswrd, setShowPasswrd] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string>("");
  const [buttonDisable, setButtonDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [UserInput, setUserInput] = useState<SignInput>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<SigninErrors>({
    email: "",
    password: "",
    network: "",
    general: "",
    successMessage: "",
  });

  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocusedField(e.target.id);
  };
  const handleInputBlur = () => {
    setFocusedField("");
  };
  //sound handling
  const validateInput = () => {
    let valid = true;
    const newErrors: SigninErrors = {
      email: "",
      password: "",
      network: "",
      general: "",
      successMessage: "",
    };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(UserInput.email)) {
      newErrors.email = "Invalid email format.";
      valid = false;
    }
    // Check for empty fields
    if (!UserInput.email || !UserInput.password) {
      newErrors.general = "All fields are required.";
      valid = false;
    }
    if (UserInput.password === "") {
      // setHasError(true);
      console.log(hasError);
      newErrors.password = "Please enter your password.";

      valid = false;
    }
    // Return true if no errors
    //Object.values(errors).every((error) => error === "")
    setErrors(newErrors);
    return valid;
  };
  // submit function

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!validateInput()) {
      setLoading(false);
      return;
    }

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(
        auth,
        UserInput.email,
        UserInput.password
      );
      toast.success("Login successful!");
      navigate("/addlink");
    } catch (error: any) {
      // handle errors (function)
      toast.success("Login unsuccessful!");

      handleError(error);
    } finally {
      setLoading(false);
    }
  };
  const handleError = (error: any) => {
    let newErrors = { ...errors };
    switch (error.code) {
      case "auth/invalid-credential":
        newErrors.email = "Invalid email or password.";
        break;
      case "auth/missing-password":
        newErrors.password = "Please enter your password damn it!!";
        setHasError(true);
        break;
      case "auth/user-disabled":
        newErrors.email = "Account disabled.";
        break;
      case "auth/network-request-failed":
        newErrors.general = "Check your internet connection.";
        // navigate("/addlink");
        break;
      default:
        toast.error("An unexpected error occurred");
        break;
    }
    setErrors(newErrors);
  };
  // login inputs extractions
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserInput((prevInput) => ({ ...prevInput, [name]: value }));
    // firebase authentication
  }
  // function for enabling the login button provided the input fields are no longer empty
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setButtonDisabled(UserInput.email !== "" && UserInput.password !== "");
      return () => clearTimeout(timeOut);
    }, 500);
  }, [UserInput.email, UserInput.password]);

  // google signin method
  const { signInWithGoogle } = useUser();
  // googleSigin function


  return (
    <div className="LOGIN-CONTAINER">
      <ToastContainer />

      <div className="login-form-container login-form-h">
        <div className="app-logo-container headerr">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.61875 27.38C6.57341 29.3334 9.71475 29.3334 16.0001 29.3334C22.2854 29.3334 25.4281 29.3334 27.3801 27.38C29.3334 25.4294 29.3334 22.2854 29.3334 16C29.3334 9.71469 29.3334 6.57202 27.3801 4.61869C25.4294 2.66669 22.2854 2.66669 16.0001 2.66669C9.71475 2.66669 6.57208 2.66669 4.61875 4.61869C2.66675 6.57335 2.66675 9.71469 2.66675 16C2.66675 22.2854 2.66675 25.428 4.61875 27.38ZM12.6667 11.6667C11.8097 11.6667 10.9719 11.9208 10.2593 12.397C9.54666 12.8731 8.99125 13.5499 8.66327 14.3417C8.33529 15.1335 8.24948 16.0048 8.41668 16.8454C8.58388 17.686 8.99659 18.4581 9.60262 19.0641C10.2086 19.6702 10.9808 20.0829 11.8214 20.2501C12.6619 20.4173 13.5332 20.3315 14.325 20.0035C15.1169 19.6755 15.7936 19.1201 16.2698 18.4075C16.7459 17.6949 17.0001 16.8571 17.0001 16C17.0001 15.7348 17.1054 15.4804 17.293 15.2929C17.4805 15.1054 17.7349 15 18.0001 15C18.2653 15 18.5197 15.1054 18.7072 15.2929C18.8947 15.4804 19.0001 15.7348 19.0001 16C19.0001 17.2526 18.6286 18.4771 17.9327 19.5186C17.2368 20.5601 16.2477 21.3719 15.0904 21.8513C13.9331 22.3306 12.6597 22.456 11.4312 22.2117C10.2026 21.9673 9.07414 21.3641 8.18841 20.4784C7.30267 19.5926 6.69948 18.4641 6.45511 17.2356C6.21073 16.007 6.33616 14.7336 6.81551 13.5764C7.29487 12.4191 8.10663 11.43 9.14814 10.734C10.1896 10.0381 11.4141 9.66669 12.6667 9.66669C12.932 9.66669 13.1863 9.77204 13.3739 9.95958C13.5614 10.1471 13.6667 10.4015 13.6667 10.6667C13.6667 10.9319 13.5614 11.1863 13.3739 11.3738C13.1863 11.5613 12.932 11.6667 12.6667 11.6667ZM23.6667 16C23.6667 17.1493 23.2102 18.2515 22.3975 19.0641C21.5849 19.8768 20.4827 20.3334 19.3334 20.3334C19.0682 20.3334 18.8138 20.4387 18.6263 20.6262C18.4388 20.8138 18.3334 21.0681 18.3334 21.3334C18.3334 21.5986 18.4388 21.8529 18.6263 22.0405C18.8138 22.228 19.0682 22.3334 19.3334 22.3334C20.586 22.3334 21.8105 21.9619 22.852 21.266C23.8935 20.5701 24.7053 19.5809 25.1847 18.4237C25.664 17.2664 25.7894 15.993 25.5451 14.7644C25.3007 13.5359 24.6975 12.4074 23.8118 11.5217C22.926 10.6359 21.7975 10.0328 20.569 9.78838C19.3404 9.54401 18.067 9.66943 16.9098 10.1488C15.7525 10.6281 14.7634 11.4399 14.0674 12.4814C13.3715 13.5229 13.0001 14.7474 13.0001 16C13.0001 16.2652 13.1054 16.5196 13.293 16.7071C13.4805 16.8947 13.7349 17 14.0001 17C14.2653 17 14.5197 16.8947 14.7072 16.7071C14.8947 16.5196 15.0001 16.2652 15.0001 16C15.0001 14.8507 15.4566 13.7485 16.2693 12.9359C17.0819 12.1232 18.1841 11.6667 19.3334 11.6667C20.4827 11.6667 21.5849 12.1232 22.3975 12.9359C23.2102 13.7485 23.6667 14.8507 23.6667 16Z"
              fill="#633CFF"
            />
          </svg>
          <p className="appName">devlinks</p>
        </div>
        {/* /\login form */}
        <form className="login-form the-login-form" onSubmit={handleSubmit}>
          <div className="form-cont">
            <h1 className="login-text">Login</h1>
            <p className="body-m">
              Add your details below to get back into the app
            </p>
          </div>
          <div className="form-input-container">
            <div className="input-field">
              <label htmlFor="email">Email address</label>
              <div
                className={`input ${focusedField == "email" ? "focused" : ""} ${
                  errors.email !== "" ? "error" : ""
                }`}
              >
                <div className="input-svg">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 3H2C1.86739 3 1.74021 3.05268 1.64645 3.14645C1.55268 3.24021 1.5 3.36739 1.5 3.5V12C1.5 12.2652 1.60536 12.5196 1.79289 12.7071C1.98043 12.8946 2.23478 13 2.5 13H13.5C13.7652 13 14.0196 12.8946 14.2071 12.7071C14.3946 12.5196 14.5 12.2652 14.5 12V3.5C14.5 3.36739 14.4473 3.24021 14.3536 3.14645C14.2598 3.05268 14.1326 3 14 3ZM13.5 12H2.5V4.63688L7.66187 9.36875C7.75412 9.45343 7.87478 9.50041 8 9.50041C8.12522 9.50041 8.24588 9.45343 8.33813 9.36875L13.5 4.63688V12Z"
                      fill="#737373"
                    />
                  </svg>

                  <input
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    type="email"
                    placeholder="e.g. alex@email.com"
                    id="email"
                    value={UserInput.email}
                    name="email"
                  />
                </div>

                <p
                  className={`input-error-message ${
                    errors.email == ""
                      ? "hide-error-message"
                      : "show-error-message"
                  }`}
                >
                  {errors.email}
                </p>
              </div>
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <div
                className={`input ${
                  focusedField == "password" ? "focused" : ""
                } ${errors.password !== "" ? "error" : ""}`}
              >
                <div className="input-svg">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 5H11V3.5C11 2.70435 10.6839 1.94129 10.1213 1.37868C9.55871 0.81607 8.79565 0.5 8 0.5C7.20435 0.5 6.44129 0.81607 5.87868 1.37868C5.31607 1.94129 5 2.70435 5 3.5V5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V6C14 5.73478 13.8946 5.48043 13.7071 5.29289C13.5196 5.10536 13.2652 5 13 5ZM8.5 9.91438V11.5C8.5 11.6326 8.44732 11.7598 8.35355 11.8536C8.25979 11.9473 8.13261 12 8 12C7.86739 12 7.74021 11.9473 7.64645 11.8536C7.55268 11.7598 7.5 11.6326 7.5 11.5V9.91438C7.16639 9.79643 6.88522 9.56434 6.70618 9.25914C6.52715 8.95393 6.46177 8.59526 6.5216 8.24651C6.58144 7.89776 6.76264 7.58139 7.03317 7.35332C7.3037 7.12525 7.64616 7.00016 8 7.00016C8.35384 7.00016 8.6963 7.12525 8.96683 7.35332C9.23736 7.58139 9.41856 7.89776 9.4784 8.24651C9.53823 8.59526 9.47285 8.95393 9.29382 9.25914C9.11478 9.56434 8.83361 9.79643 8.5 9.91438ZM10 5H6V3.5C6 2.96957 6.21071 2.46086 6.58579 2.08579C6.96086 1.71071 7.46957 1.5 8 1.5C8.53043 1.5 9.03914 1.71071 9.41421 2.08579C9.78929 2.46086 10 2.96957 10 3.5V5Z"
                      fill="#737373"
                    />
                  </svg>

                  <input
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    type={!showPasswrd ? "password" : "text"}
                    placeholder="Enter your password"
                    id="password"
                    name="password"
                    value={UserInput.password}
                  />
                </div>

                <p
                  className={`input-error-message ${
                    errors.password == ""
                      ? "hide-error-message"
                      : "show-error-message"
                  }`}
                >
                  {errors.password}
                </p>
              </div>
            </div>
            <div className="radio">
              <input
                style={{ marginRight: "8px" }}
                type="radio"
                name="radio"
                id=""
                checked={showPasswrd}
                onChange={() => setShowPasswrd((prev) => !prev)}
              />{" "}
              <span>see password</span>
            </div>
            <div
              className="forgot-password"
              style={{ marginTop: "8px", marginBottom: "8px" }}
            >
              <Link to="/forgotPassword" style={{ textDecoration: "none" }}>
                forgot password
              </Link>
            </div>
            <button
              style={{ cursor: !buttonDisable ? "not-allowed" : "pointer" }}
              className={`login-btn ${
                !buttonDisable ? "login-btn-disabled" : ""
              }`}
              type="submit"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
          <div className="link-to-create-account">
            <p>Don't have an accout? </p>{" "}
            <Link to="/signup">Create Account</Link>
          </div>
        </form>
        {/* sign in with google button */}
        <button onClick={signInWithGoogle} className="google-singin-btn">
          <img
            src={google}
            alt="googleIcon"
            style={{ width: "30px", height: "30px" }}
          />
          <p>Continue with google</p>
        </button>
        <button
          className="Gemini-button google-singin-btn"
          onClick={() => navigate("/geminillm")}
        >
          Ask Gemini{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
