import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlelogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className="lg:flex items-center justify-between mt-10 mb-9 container mx-auto lg:px-16 md:px-10 px-5">
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
      <div className="flex gap-5 ">
        {user?.uid ? (
          <>
            <button
              onClick={handlelogout}
              className="rounded-md p-2 bg-orange-100 hover:bg-green-300 duration-500 "
            >
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link to="/signin">
              <button className="rounded-md p-2 bg-orange-100 hover:bg-green-300 duration-500 ">
                SignIn
              </button>
            </Link>
            <Link to="/signup">
              <button className="rounded-md p-2 bg-orange-100 hover:bg-green-300 duration-500 ">
                SignUp
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
