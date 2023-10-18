import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="lg:flex justify-between mt-10 mb-9 container mx-auto lg:px-16 md:px-10 px-5">
      <div className="flex justify-end">
        <p className="ml-2 font-semibold text-primary">Logo</p>
      </div>
      <div className="flex text-gray-600 justify-end lg:text-base text-sm lg:font-medium font-medium lg:mt-0 mt-3">
        <Link to="/">
          <p className="lg:ml-10 md:ml-5 ml-2 hover:text-red-600 cursor-pointer">Home</p>
        </Link>
        <Link to="/collages">
          <p className="lg:ml-10 md:ml-5 ml-2 hover:text-red-600 cursor-pointer">Collages</p>
        </Link>
        <Link to="/admission">
          <p className="lg:ml-10 md:ml-5 ml-2 hover:text-red-600 cursor-pointer">Admission</p>
        </Link>

        <Link to="/mycollage" className="lg:ml-10 md:ml-5 ml-2 hover:text-red-600 cursor-pointer">
          My Collage
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
