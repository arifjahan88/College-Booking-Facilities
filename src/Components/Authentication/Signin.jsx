import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthProvider";
import { useContext, useState } from "react";

const Signin = () => {
  const { login, googleSignin } = useContext(AuthContext);
  const [firebaseError, setFirebaseError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset();
        navigate("/");
      })
      .catch((error) => {
        setFirebaseError(error.message);
      });
  };

  const handlegooglelogin = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset();
        navigate("/");
      })
      .catch((error) => {
        setFirebaseError(error.message);
      });
  };

  return (
    <div>
      <div className="py-5 flex justify-center items-center pb-20 container mx-auto lg:px-16 md:px-10 px-5">
        <div className="min-h-[45vh] w-full grid grid-cols-1 md:grid-cols-3 ">
          <div className="px-10 pt-20 col-span-2 pb-5 text-Light">
            <h1 className="text-center text-2xl font-bold mb-3 ">
              Welcome To Collage Booking System
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum illo
              doloribus quaerat architecto porro cum suscipit sed soluta dolores! Ex praesentium
              nobis quasi, voluptas sapiente harum similique voluptates dolores?
            </p>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-md">
            <h2 className="text-2xl font-bold text-center">Log in</h2>
            <form className="mt-8" onSubmit={handleSubmit(handleLogin)}>
              <div className="mb-4">
                <label htmlFor="text" className="block font-medium mb-2">
                  Email
                </label>
                <input
                  className="border p-2 w-full rounded outline-none"
                  type="email"
                  placeholder="Enter your Email"
                  {...register("email", { required: "Email is Required" })}
                />
                {errors.email && (
                  <p className="text-red-600 text-xs mt-1">{errors.email?.message}</p>
                )}
                {firebaseError && <p className="text-red-600 text-xs mt-1">{firebaseError}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block font-medium mb-2">
                  Password
                </label>
                <input
                  className="border p-2 w-full rounded outline-none"
                  type="password"
                  placeholder="Enter your Password"
                  {...register("password", { required: "Password is Required" })}
                />
                {errors.password && (
                  <p className="text-red-600 text-xs mt-1">{errors.password?.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="text-center bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
              >
                Login
              </button>
            </form>
            <div className="text-center">
              <Link to="/forgetpassword" className="py-1 text-slate-500  border-b">
                <small>Forget Password</small>
              </Link>
            </div>
            <div className="flex justify-center mt-5">
              <Link>
                <div className="p-2 bg-slate-300 rounded-full mx-1">
                  <FaFacebookF className="text-blue-900"></FaFacebookF>
                </div>
              </Link>
              <Link>
                <div className="p-2 bg-slate-300 rounded-full mx-1">
                  <FaLinkedinIn className="text-blue-700"></FaLinkedinIn>
                </div>
              </Link>
              <Link>
                <div onClick={handlegooglelogin} className="p-2 bg-slate-300 rounded-full mx-1">
                  <FcGoogle></FcGoogle>
                </div>
              </Link>
            </div>

            <div className="py-2 text-center mt-5">
              <p className="text-slate-500"> You don&apos;t have an Account?</p>
              <Link to="/signup" className="border-b text-blue-800">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
