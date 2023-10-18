import axios from "axios";
import { useEffect, useState } from "react";

const MyCollage = () => {
  const [collagedata, setCollagedata] = useState([]);
  console.log(collagedata);
  useEffect(() => {
    axios
      .get("http://localhost:5000/applydata")
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
            <h2>{item.name}</h2>
            <h2>{item.subject}</h2>
            <p>{item.email}</p>
            <p>{item.date}</p>
            <p>{item.phone}</p>
            <button className="rounded-xl p-2 bg-orange-100 hover:bg-green-300 duration-500 mt-3">
              Review
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MyCollage;
