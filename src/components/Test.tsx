import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState, FocusEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignInput, SigninErrors } from "./Interface";
import { toast, ToastContainer } from "react-toastify";

const Test = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [userInput, setUserInput] = useState<SignInput>({
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

  const validateInput = () => {
    let valid = true;
    const newErrors: SigninErrors = {
      email: "",
      password: "",
      network: "",
      general: "",
      successMessage: "",
    };

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInput.email)) {
      newErrors.email = "Invalid email format.";
      valid = false;
    }

    if (!userInput.email || !userInput.password) {
      newErrors.general = "All fields are required.";
      valid = false;
    }

    if (userInput.password === "") {
      newErrors.password = "Please enter your password.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

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
        userInput.email,
        userInput.password
      );
      navigate("/addlink");
      toast.success("Login successful!");
    } catch (error: any) {
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
        newErrors.password = "Please enter your password.";
        setHasError(true);
        break;
      case "auth/invalid-email":
        newErrors.email = "Invalid email.";
        break;
      case "auth/user-disabled":
        newErrors.email = "Account disabled.";
        break;
      case "auth/network-request-failed":
        newErrors.general = "Check your internet connection.";
        break;
      default:
        toast.error("An unexpected error occurred.");
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="login-form-container">
        <div className="app-logo-container">
          {/* App logo SVG */}
          <p className="appName">devlinks</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
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
                className={`input ${
                  focusedField === "email" ? "focused" : ""
                } ${errors.email ? "error" : ""}`}
              >
                <div className="input-svg">
                  {/* SVG icon for email */}
                  <input
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    type="email"
                    placeholder="e.g. alex@email.com"
                    id="email"
                    value={userInput.email}
                    name="email"
                  />
                </div>
                <p
                  className={`input-error-message ${
                    errors.email ? "show-error-message" : "hide-error-message"
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
                  focusedField === "password" ? "focused" : ""
                } ${errors.password ? "error" : ""}`}
              >
                <div className="input-svg">
                  {/* SVG icon for password */}
                  <input
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    id="password"
                    name="password"
                    value={userInput.password}
                  />
                </div>
                <p
                  className={`input-error-message ${
                    errors.password
                      ? "show-error-message"
                      : "hide-error-message"
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
                name="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword((prev) => !prev)}
              />
              <label>Show Password</label>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={loading || buttonDisabled}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
          <Link to="/forgot-password">Forgot Password?</Link>
        </form>
      </div>
    </div>
  );
};

export default Test;
