import { sendPasswordResetEmail } from "firebase/auth";
import { useForm } from "react-hook-form";
import { database } from "../../Context/AuthProvider";

const PasswordReset = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const email = data.email;

    sendPasswordResetEmail(database, email)
      .then((data) => {
        alert("Check your email", data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="container mx-auto lg:px-16 md:px-10 px-5">
      <h2 className="font-sans text-2xl lg:text-3xl font-bold py-4 mb-2">Password Reset</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-3 ">
          <input
            className="p-2 pl-5 text-sm text-gray-900 rounded-lg border border-gray-300 w-1/2 focus:outline-none"
            type="email"
            placeholder="Enter your Email"
            {...register("email", {
              required: "email is Required",
            })}
          />
          {errors?.email && <p className="text-red-600 text-xs mt-1">{errors?.email?.message}</p>}
        </div>

        <button
          type="submit"
          className="text-center w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default PasswordReset;
