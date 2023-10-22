import axios from "axios";
import { useEffect, useState } from "react";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const Collages_Route = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    axios
      .get("https://college-booking-facilities-server-two.vercel.app/collageroute")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mx-auto lg:px-16 md:px-10 px-5 grid md:grid-cols-2 grid-cols-1">
      {data.map((data) => {
        return (
          <div key={data._id} className="border m-2 p-5 rounded-2xl hover:bg-pink-100 duration-500">
            <img className="rounded-2xl opacity-90" src={data.image} alt="Image_Box" />
            <h2 className="font-semibold mt-4 text-2xl">{data.collage_name}</h2>
            <div className="flex items-center">
              <div className="flex mr-2">
                <TiStarFullOutline className="text-amber-400" />
                <TiStarFullOutline className="text-amber-400" />
                <TiStarFullOutline className="text-amber-400" />
                <TiStarFullOutline className="text-amber-400" />
                <TiStarHalfOutline className="text-amber-400" />
              </div>
              <p>{data.collage_Rating}</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">Admission Data : {data.admission_Date}</p>
                <small>Research Number : {data.Research_number}</small>
              </div>
              <Link to={`/collages/collagedetails/${data._id}`}>
                <button className="border m-2 rounded-xl p-2 px-4 hover:bg-green-500 hover:text-white duration-500">
                  Details
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Collages_Route;
