import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";

const MyCollage = () => {
  const [collagedata, setCollagedata] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const { user } = useContext(AuthContext);

  const [isopen, setIsopen] = useState(false);
  const openmodal = () => {
    setIsopen(true);
  };
  const closemodal = () => {
    setIsopen(false);
  };
  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      phone: data.number,
      subject: data.subject,
      review: data.review,
    };
    // Save Form Data to database
    fetch("https://college-booking-facilities-server-two.vercel.app/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      res.json();
      setIsopen(false);
    });
  };

  useEffect(() => {
    axios
      .get("https://college-booking-facilities-server-two.vercel.app/applydata")
      .then((res) => {
        setCollagedata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container mx-auto lg:px-16 md:px-10 px-5 grid grid-cols-2 gap-5">
      {collagedata.map((item) => {
        return (
          <div
            className="border p-2 rounded-xl hover:shadow-xl duration-300 text-center"
            key={item._id}
          >
            <img src={item.photo} alt="" />
            <h2 className="text-xl font-bold text-orange-600">{item.name}</h2>
            <h2>{item.subject}</h2>
            <p>{item.email}</p>
            <p>
              <small>{item.date}</small>
            </p>
            <p>
              <small>{item.phone}</small>
            </p>

            <button
              onClick={openmodal}
              className="rounded-xl p-2 bg-orange-100 hover:bg-green-300 duration-500 mt-3"
            >
              Review
            </button>
            {isopen && (
              <>
                <div className="fixed z-40 inset-0 ">
                  <div className="flex items-center justify-center h-full bg-primary bg-opacity-25 backdrop-blur-3xl backdrop-saturate-150">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="mt-8 w-full container mx-auto lg:px-32 md:px-16 px-10"
                    >
                      {/* name and email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5">
                        {/* name */}
                        <div className="mb-5">
                          <label htmlFor="name" className="block font-medium mb-2">
                            Candidate Name
                          </label>
                          <input
                            className="border p-2 rounded outline-none w-full"
                            type="text"
                            placeholder="Enter your Name"
                            defaultValue={user?.displayName}
                            {...register("name", {
                              required: "Name is Required",
                            })}
                          />
                          {errors?.name && (
                            <p className="text-red-600 text-xs mt-1">{errors?.name?.message}</p>
                          )}
                        </div>
                        {/* email */}
                        <div className="mb-5">
                          <label htmlFor="email" className="block font-medium mb-2">
                            Email
                          </label>
                          <input
                            className="border p-2 w-full rounded outline-none"
                            type="email"
                            placeholder="Enter your Email"
                            defaultValue={user?.email}
                            {...register("email", {
                              required: "Email is Required",
                            })}
                          />
                          {errors?.email && (
                            <p className="text-red-600 text-xs mt-1">{errors?.email?.message}</p>
                          )}
                        </div>
                      </div>
                      {/* birth date and number */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5">
                        {/* number */}
                        <div className="mb-5">
                          <label htmlFor="number" className="block font-medium mb-2">
                            Mobile Number
                          </label>
                          <input
                            className="border p-2 w-full rounded outline-none"
                            type="number"
                            defaultValue={item?.phone}
                            placeholder="Enter your Mobile Number"
                            {...register("number", {
                              required: "Mobile Number is Required",
                            })}
                          />
                          {errors?.number && (
                            <p className="text-red-600 text-xs mt-1">{errors?.number?.message}</p>
                          )}
                        </div>
                        {/* name */}
                        <div className="mb-5">
                          <label htmlFor="name" className="block font-medium mb-2">
                            Subject
                          </label>
                          <input
                            className="border p-2 rounded outline-none w-full"
                            type="text"
                            placeholder="Enter your subject"
                            defaultValue={item?.subject}
                            {...register("subject", {
                              required: "subject is Required",
                            })}
                          />
                          {errors?.subject && (
                            <p className="text-red-600 text-xs mt-1">{errors?.subject?.message}</p>
                          )}
                        </div>
                        <div className="mb-5 col-span-2">
                          <label className="block font-medium mb-2">Write your review</label>
                          <textarea
                            className="border p-2 rounded outline-none w-full"
                            placeholder="Write here your review"
                            {...register("review", {
                              required: "review is Required",
                            })}
                          />
                          {errors?.review && (
                            <p className="text-red-600 text-xs mt-1">{errors?.review?.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-10">
                        <button
                          type="submit"
                          className="text-center bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
                        >
                          Submit
                        </button>
                        <button
                          onClick={closemodal}
                          className="text-center bg-red-500 hover:bg-red-700 w-full text-white font-bold py-2 px-4 rounded"
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MyCollage;
