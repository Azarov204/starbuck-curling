import { Link } from "react-router-dom";
import Contact from "../../components/Contact/Contact.jsx";

const NotFound = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-30 grow">
        <h1>Seems like you're lost!</h1>
        <h6 className="pt-6">
          {"Click "}
          <Link to="/">
            <button className="cursor-pointer text-starbuck hover:text-header-light font-bold">
              HERE
            </button>
          </Link>
          {" to go back to the home page."}
        </h6>
      </div>
      <Contact />
    </>
  );
};

export default NotFound;
