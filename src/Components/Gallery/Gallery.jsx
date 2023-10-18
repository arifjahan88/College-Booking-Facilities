const Gallery = () => {
  return (
    <div>
      <h2 className="text-center font-sans text-2xl lg:text-5xl font-bold py-4 mb-5">
        Image Gallery
      </h2>
      <p className="w-full lg:w-1/2 mx-auto text-center mb-4">
        Welcome to our university campus! Our entrance gate is a symbol of the knowledge and
        opportunities that await you.
      </p>
      <div>
        <div className="grid lg:flex items-center justify-center">
          <div className="w-96 hover:scale-105 duration-500 m-4">
            <img
              className="rounded-xl"
              alt="Not Found in the server"
              src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            />
          </div>
          <div className="w-96 hover:scale-105 duration-500 m-4 rounded">
            <img
              className="rounded-xl"
              alt="Not Found in the server"
              src="https://plus.unsplash.com/premium_photo-1681505720432-f7476737c644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            />
          </div>
          <div className="w-96 hover:scale-105 duration-500 m-4 rounded">
            <img
              className="rounded-xl"
              alt="Not Found in the server"
              src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
          </div>
        </div>
        <div className="avatar grid lg:flex items-center justify-center">
          <div className="w-96 hover:scale-105 duration-500 rounded m-4">
            <img
              className="rounded-xl"
              alt="Not Found in the server"
              src="https://images.unsplash.com/photo-1619512673224-91cfb2688284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
          </div>
          <div className="w-96 hover:scale-105 duration-500 m-4 rounded">
            <img
              className="rounded-xl"
              alt="Not Found in the server"
              src="https://images.unsplash.com/photo-1613902059328-4a860a118dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
