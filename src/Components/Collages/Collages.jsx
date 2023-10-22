import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Collages = () => {
  const [search, setsearch] = useState("");
  const [collagesdata, setcollagesdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://college-booking-facilities-server-two.vercel.app/collagedata")
      .then((res) => {
        setcollagesdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="container mx-auto lg:px-16 md:px-10 px-5 pb-10">
      <form className="w-full">
        <input
          onChange={(e) => setsearch(e.target.value)}
          type="search"
          id="default-search"
          className="block p-4 pl-5 text-sm text-gray-900 rounded-lg border border-gray-300 w-full focus:outline-none mb-10"
          placeholder="Search by University Name"
        />
      </form>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {collagesdata
          .filter((item) => {
            return item.collage_name.toLowerCase().includes(search.toLowerCase());
          })
          .map((item) => (
            <div
              key={item._id}
              className="hover:bg-slate-100 duration-500 p-3 border rounded-lg hover:-translate-y-2"
            >
              <img className="rounded-lg w-full h-[300px]" src={item.image} alt="" />
              <div>
                <h2 className="text-3xl mt-2 font-semibold">Collage Name : {item.collage_name}</h2>
                <div className="flex items-center mt-4">
                  <div className="bg-green-300 py-1 rounded-xl p-2 text-white font-bold text-xl font-sans flex items-center justify-center my-1">
                    Admission Date : {item.admission_Date}
                  </div>
                </div>
                <p className="mt-2 text-justify">Events : {item.events}</p>

                <div className="flex flex-col">
                  <h2 className="font-sans font-bold text-xl my-1 text-green-700">
                    Our Sports : {item.sports}
                  </h2>
                  <a
                    href={item.research_history}
                    className="font-sans font-bold text-xl my-1 text-green-700"
                  >
                    Research History : {item.research_history}
                  </a>
                </div>
                <Link to={`collagedetails/${item._id}`}>
                  <button className="w-full rounded-xl p-3 text-lg bg-orange-100 hover:bg-green-300 duration-500 font-bold mt-3">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Collages;
