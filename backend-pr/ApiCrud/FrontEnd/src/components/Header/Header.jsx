import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-blue-600 py-4 shadow-md">
      <div className="container mx-auto flex  items-center px-4">
        <Link to="/" className="text-white font-bold text-2xl">
          My App
        </Link>

        <div className="ml-auto flex space-x-4">
          <Link to="/" className="text-white font-medium hover:underline">
            Home
          </Link>

          <Link
            to="/viewData"
            className="text-white font-medium hover:underline"
          >
            ViewData
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
