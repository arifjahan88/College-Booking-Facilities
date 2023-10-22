import { useLoaderData } from "react-router-dom";

const CollageDetails = () => {
  const item = useLoaderData();

  return (
    <div className="p-3 grid grid-cols-3 gap-5 border-t border-b">
      <img className="rounded-lg w-full col-span-2" src={item.image} alt="" />
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
            className="font-sans my-1 text-green-700 w-full text-center rounded-xl p-3 text-lg bg-orange-100 hover:bg-cyan-300 duration-500 font-bold mt-3"
          >
            Research History : {item.research_history}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollageDetails;
