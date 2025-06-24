import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Reset error and redirect
    setError('');
    
    navigate('/dashboard');
  };

  return (

    

<div className="position-relative">
  
  <div
     style={{
      position: 'relative',
      top: '21px',
      left: '50px',
      width: '68px',
      height: '39px',
      fontWeight: '600',
      fontSize: '28px', 
      lineHeight: '39px',
    }}
  >
    LMS
  </div>

<div className="container-fluid bg-white">
  <div className="row w-100" style={{ marginTop: '60px' }}> 
    {/* Left Side Image */}
    <div
      className="col-md-6 d-none d-md-block p-5"
      style={{ height: '648px' }}
    >
      <img
        src="images/login_img.jpg"
        alt="Kid learning online"
        className="img-fluid rounded h-100 w-100"
        style={{ objectFit: 'cover' }}
      />
    </div>

    {/* Right Side Form */}
    <div
      className="col-md-6 d-flex align-items-center justify-content-center p-5"
      style={{ height: '648px' }}
    >
      <div
        className="shadow-sm border rounded p1-4"
        style={{
          width: '609px',
          borderWidth: '1px',
          borderColor: '#e0e0e0',
          height: '100%',
        }}
      >
        <h4 className="mb-4 text-center fw-semibold text-secondary">
          Login to your account
        </h4>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={togglePassword}
              >
                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="alert alert-danger py-2" role="alert">
              {error}
            </div>
          )}

          {/* Remember Me + Forgot Password */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="remember" />
              <label className="form-check-label" htmlFor="remember">
                Remember me
              </label>
            </div>
            <a href="#" className="text-danger text-decoration-none small">
              Forgot Password
            </a>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-dark w-100">Login</button>

          {/* Signup Link */}
          <p className="mt-3 text-center">
            Don’t have an account? <a href="#" className="text-primary">Signup</a>
          </p>
        </form>
         </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default LoginPage;
