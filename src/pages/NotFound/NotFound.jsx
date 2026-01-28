import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const NotFound = () => {
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/starbuck-curling/">
        <button>Go to Home Page</button>
      </Link>
      <Footer />
    </div>
  );
};

export default NotFound;
