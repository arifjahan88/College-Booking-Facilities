import { useState } from "react";
import { useForm } from "react-hook-form";

const Admission = () => {
  const categoryData = [
    {
      id: 1,
      category: "Seneca Collage",
    },
    {
      id: 2,
      category: "Harvarb Collage",
    },
    {
      id: 3,
      category: "City Collage",
    },
    {
      id: 4,
      category: "Daffodill Collage",
    },
  ];

  const { register, handleSubmit, errors } = useForm();

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
      date: data.date,
      phone: data.number,
      subject: data.subject,
      photo: data.photo,
    };

    // Save Form Data to database
    fetch("http://localhost:5000/applydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        res.json();
        setIsopen(false);
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="container mx-auto lg:px-16 md:px-10 px-5 py-10">
      <h2 className="text-center font-bold text-4xl text-cyan-600 font-mono my-5">
        For Admission, Please Select your Collage. . .
      </h2>
      <div onClick={openmodal} className="grid lg:grid-cols-2 grid-cols-1 gap-10 m-5 w-2/3 mx-auto">
        {categoryData.map((category) => (
          <label
            key={category.id}
            className="shadow-xl cursor-pointer hover:bg-cyan-100 hover:scale-105 duration-200 rounded-2xl"
          >
            <div className="text-center">
              <h2 className="lg:text-6xl md:text-5xl text-4xl text-secondary text-cyan-800 font-bold text-center my-10">
                {category.category}
              </h2>
            </div>
          </label>
        ))}
      </div>
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
                      //   //   defaultValue={user?.displayName}
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
                      //   //   defaultValue={user?.email}
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
                  {/* birth date */}
                  <div className="mb-5">
                    <label htmlFor="dob" className="block font-medium mb-2">
                      Date of Birth
                    </label>
                    <input
                      className="border p-2 w-full rounded outline-none"
                      type="date"
                      placeholder="Date of Birth"
                      //   //   defaultValue={user?.email}
                      {...register("date", {
                        required: "Date of Birth is Required",
                      })}
                    />
                    {errors?.date && (
                      <p className="text-red-600 text-xs mt-1">{errors?.date?.message}</p>
                    )}
                  </div>

                  {/* number */}
                  <div className="mb-5">
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
                      //   //   defaultValue={user?.displayName}
                      {...register("subject", {
                        required: "subject is Required",
                      })}
                    />
                    {errors?.subject && (
                      <p className="text-red-600 text-xs mt-1">{errors?.subject?.message}</p>
                    )}
                  </div>
                  <div className="mb-5">
                    <label htmlFor="photo" className="block font-medium mb-2">
                      Photo url
                    </label>
                    <input
                      className="border p-2 rounded outline-none w-full"
                      type="text"
                      placeholder="Enter your photo url"
                      //   defaultValue={user?.displayName}
                      {...register("photo", {
                        required: "Photo is Required",
                      })}
                    />
                    <small htmlFor="name" className="text-red-600 block text-xs font-medium mb-2">
                      *Please enter a valid link
                    </small>
                    {errors?.photo && (
                      <p className="text-red-600 text-xs mt-1">{errors?.photo?.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex gap-10">
                  <button
                    type="submit"
                    className="text-center bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
                  >
                    Apply
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
};

export default Admission;
