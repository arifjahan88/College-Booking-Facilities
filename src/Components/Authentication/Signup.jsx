import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, seterror] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handlesignup = async (data) => {
    try {
      const result = await createUser(data.email, data.password);
      const userInfo = {
        displayName: data.name,
      };

      updateUser(userInfo);
      const user = result?.user;
      console.log(user);
      const currentUser = {
        name: data.name,
        email: data.email,
        number: data.number,
      };

      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      });
      console.log(response);

      reset();
      navigate(from);
    } catch (error) {
      seterror(error.message);
    }
  };
  return (
    <div>
      <div className="py-5 flex justify-center items-center pb-20 container mx-auto lg:px-16 md:px-10 px-5">
        <div className=" min-h-[45vh] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="px-10 pt-20 lg:col-span-2 pb-5 text-Light">
            <h1 className="text-center text-2xl font-bold mb-3 ">
              Welcome To Collage Booking System
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum illo
              doloribus quaerat architecto porro cum suscipit sed soluta dolores! Ex praesentium
              nobis quasi, voluptas sapiente harum similique voluptates dolores?
            </p>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-md">
            <h2 className="text-2xl font-bold text-center">Log in</h2>
            <form className="mt-8" onSubmit={handleSubmit(handlesignup)}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-2">
                  Name
                </label>
                <input
                  className="border p-2 w-full rounded outline-none"
                  type="text"
                  placeholder="Enter your Name"
                  {...register("name", { required: "Name is Required" })}
                />
                {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name?.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-2">
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
              </div>
              <div className="mb-4">
                <label htmlFor="number" className="block font-medium mb-2">
                  Mobile Number
                </label>
                <input
                  className="border p-2 w-full rounded outline-none"
                  type="number"
                  placeholder="Enter your Mobile Number"
                  {...register("number", {
                    required: "Mobile Number is Required",
                  })}
                />
                {errors.number && (
                  <p className="text-red-600 text-xs mt-1">{errors.number?.message}</p>
                )}
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
                {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
              </div>

              <button
                type="submit"
                className="text-center bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
              >
                Register
              </button>
            </form>

            <div className="py-2 text-center mt-5">
              <p className="text-slate-500">Have an Account?</p>
              <Link to="/signin" className="border-b text-blue-800">
                Login Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
