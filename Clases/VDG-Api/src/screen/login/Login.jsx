
import { useState } from "react"
import "./Login.css"
import { useAuth } from "../../contexts/AuthProvider"

export default function Login() {
  
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail ] = useState("")
    const [password, setPassword] = useState("")

    const { login } = useAuth()

    

    const handleSubmit = () => {
       login({email, password})

    }


  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-switcher">
          <button className={`switcher-btn ${isLogin ? "active" : ""}`} onClick={() => setIsLogin(true)}>
            Login
          </button>
          <button className={`switcher-btn ${!isLogin ? "active" : ""}`} onClick={() => setIsLogin(false)}>
            Register
          </button>
          <div className={`switcher-indicator ${!isLogin ? "right" : ""}`} />
        </div>

        <div className="form-header">
          <h1 className="form-title">{isLogin ? "Welcome back" : "Create account"}</h1>
          <p className="form-subtitle">
            {isLogin ? "Enter your credentials to access your account" : "Sign up to get started with your account"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input type="text" id="name" className="form-input" placeholder="John Doe" required />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input" 
              placeholder="you@example.com" 
              required />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input" 
            placeholder="••••••••" 
            required />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirm-password" className="form-label">
                Confirm Password
              </label>
              <input type="password" id="confirm-password" className="form-input" placeholder="••••••••" required />
            </div>
          )}

          {isLogin && (
            <div className="form-footer">
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-link">
                Forgot password?
              </a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "Sign in" : "Create account"}
          </button>

        </form>

        <p className="signup-text">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button type="button" className="signup-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  )
}
