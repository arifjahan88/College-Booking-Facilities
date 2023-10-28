import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Review = () => {
  const { user } = useContext(AuthContext);
  const [reviewData, setreviewData] = useState([]);

  useEffect(() => {
    axios
      .get("https://project-phserver.vercel.app/review")
      .then((res) => {
        setreviewData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handledelete = (id) => {
    const proceed = window.confirm("Are you sure to Delete?");
    if (proceed) {
      fetch(`https://project-phserver.vercel.app/review/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Delete Successfully");
            const remaining = reviewData.filter((rev) => rev._id !== id);
            setreviewData(remaining);
          }
        });
    }
  };
  return (
    <>
      <h2 className="text-center font-sans text-2xl lg:text-5xl font-bold py-4 mb-5">All Review</h2>

      <div className="container mx-auto lg:px-16 md:px-10 px-5 grid grid-cols-2 gap-5">
        {reviewData.map((item) => {
          return (
            user?.uid && (
              <div
                className="border p-2 bg-slate-200 rounded-xl hover:shadow-xl duration-300"
                key={item._id}
              >
                <img src={item.photo} alt="" />
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold text-orange-600">{item.name}</h2>
                  <button
                    onClick={() => handledelete(item._id)}
                    className="text-center bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
                <h2>Depertment : {item.subject}</h2>
                <p>Email : {item.email}</p>
                <p>
                  <small>{item.date}</small>
                </p>
                <div className="border border-blue-300 my-3"></div>
                <p className="text-red-600">
                  <small>{item.review}</small>
                </p>
              </div>
            )
          );
        })}
      </div>
      <div>
        {!user?.uid && (
          <>
            <p className="text-center font-bold text-5xl mb-5">Please Login to see Review.</p>
          </>
        )}
      </div>
      <div>
        {reviewData.length <= 0 && user?.uid && (
          <>
            <p className="text-center font-mono font-bold text-5xl mb-5">
              There is no Review. Please Review.
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Review;
