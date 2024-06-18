import { useContext, useState } from "react";
import "./login.scss"
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {updateUser} = useContext(AuthContext);


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      updateUser(res.data);


      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">

      <div className="left">

        <div className="wrapper">

        <h1>Welcome Again!</h1>

        <form onSubmit={handleSubmit} className="form" >
        <div className="inputs">
          <div className="input">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="User123" id="username" name="username" />
          </div>

          <div className="input">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="••••••••••" id="password" name="password" />
          </div>

          <div className="bottom">
          {error && <p>{error}</p>}

          <button className="button" type="submit" disabled={isLoading}>
          Log In 
          </button>
          <a href="/">Forgot Password?</a>
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
