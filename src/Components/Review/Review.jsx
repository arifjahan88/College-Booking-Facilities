import axios from "axios";
import { useEffect, useState } from "react";

const Review = () => {
  const [reviewData, setreviewData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/review")
      .then((res) => {
        setreviewData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h2 className="text-center font-sans text-2xl lg:text-5xl font-bold py-4 mb-5">All Review</h2>

      <div className="container mx-auto lg:px-16 md:px-10 px-5 grid grid-cols-2 gap-5">
        {reviewData.map((item) => {
          return (
            <div
              className="border p-2 bg-slate-200 rounded-xl hover:shadow-xl duration-300"
              key={item._id}
            >
              <img src={item.photo} alt="" />
              <h2 className="text-xl font-bold text-orange-600">{item.name}</h2>
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
          );
        })}
      </div>
    </>
  );
};

export default Review;
