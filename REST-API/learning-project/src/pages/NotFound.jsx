import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
       <br/>
        Go back to Home
        
      </Link>
      <div></div>
    </div>
  );
};

export default NotFound;
