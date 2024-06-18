import "./register.scss"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

export default function Register() {

  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    setIsLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });

      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register">

      <div className="left">

        <div className="wrapper">

        <h1>One Step Away <br /> to Your Dream House</h1>

        <form onSubmit={handleSubmit} className="form">
        <div className="inputs">
          <div className="input">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="User123" id="username" name="username" />
          </div>

          <div className="input">
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="user@example.com" id="email" name="email" />
          </div>

          <div className="input">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="••••••••••" id="password" name="password" />
          </div>

          <div className="bottom">

          <div className="policy">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">I agree to Fake Estate's <a href="./terms-of-service">Terms of Service</a> and <a href="./privacy-policy">Privacy Policy</a> . </label>
          </div>
          <button className="button" type="submit">
          Register 
          </button>
          {error && <span>{error}</span>}
          <Link to={"/login"} >Do you have an account?</Link>
          </div>

        </div>
        </form>

        </div>




      </div>

      <div className="right"> 
        <div className="wrapper">
        <h1>Fake Estate</h1>
        <h2>Your Dream Home Search</h2>
        <p>Unlock the Door to Your Next Home
        Log in to explore the best properties, get personalized recommendations, and stay updated with the latest listings.</p>
        <p>Discover a variety of homes that suit your lifestyle and budget. Join our community and make your home search easier and more efficient.</p>
        </div>
        </div>

    </div>
  )
}
