const PreviousService = ({ data }) => {
  return (
    <div
      id="previous"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {data.map((singleData, index) => (
        <div
          className="single_item border-2 p-4 rounded-lg shadow-lg"
          key={index}
        >
          <div className="title py-1 mb-3 text-2xl font-medium text-center border-b-2 border-slate-800">
            {singleData.name}
          </div>
          <div className="text-center text-8xl mb-3">
            <img
              src={singleData.icon}
              alt={singleData.name}
              className="w-3/4 mx-auto"
            />
          </div>
          <div className="description mb-3">{singleData.description}</div>
          <div className="w-full flex justify-center">
            <button className="p-4 border border-white rounded-xl bg-blue-700 text-white font-medium col-span-2">
              Show more &gt;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviousService;
