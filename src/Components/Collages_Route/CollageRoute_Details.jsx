import { Link, useLoaderData } from "react-router-dom";

const CollageRoute_Details = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="m-2 p-5 rounded-2xl container mx-auto lg:px-16 md:px-10 px-5">
      <img className="rounded-2xl opacity-90" src={data.image} alt="Image_Box" />
      <h2 className="font-semibold mt-4 text-5xl">{data.collage_name}</h2>
      <div className="flex items-center">
        <p>Collage Rating : {data.collage_Rating}</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold">Admission Data : {data.admission_Date}</p>
          <small>Research Number : {data.Research_number}</small>
        </div>
        <Link to={`/collages`}>
          <button className="border m-2 rounded-xl p-2 px-4 hover:bg-green-500 hover:text-white duration-500">
            Back to collages
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CollageRoute_Details;
