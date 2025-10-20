import { useState } from "react";
import "./Login.css";
/* =========================================================
   Login Page Component
   Description: Handles user sign-in with validation
   ========================================================= */
const Login = () => {
  /* -------------------- State Management -------------------- */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  /* -------------------- Validation Function -------------------- */
  const validate = () => {
    if (!email.trim()) {
      setError("Please enter your email.");
      return false;
    }

    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!re.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (!password) {
      setError("Please enter your password.");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }

    setError("");
    return true;
  };

  /* -------------------- Form Submission -------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Login data:", { email, password });
    alert("Demo: login successful (not real)");

    setEmail("");
    setPassword("");
  };

  /* =========================================================
     Component UI
     ========================================================= */
  return (
    <div className="login-page">
      <div className="container">
        {/* ---------- Header Section ---------- */}
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to continue to your account</p>
        </div>

        {/* ---------- Form Section ---------- */}
        <div className="login-form-section">
          <form onSubmit={handleSubmit} className="login-form">
            {/* ---- Email Field ---- */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            {/* ---- Password Field ---- */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-field">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* ---- Error Message ---- */}
            {error && <p className="error-message">{error}</p>}

            {/* ---- Options (Remember + Forgot) ---- */}
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-password">
                Forgot?
              </a>
            </div>

            {/* ---- Submit Button ---- */}
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </form>

          {/* ---------- Sign Up Section ---------- */}
          <div className="signup-link">
            <p>
              Don’t have an account?{" "}
              <a href="#" className="link">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
