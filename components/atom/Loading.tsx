const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-20 h-20 rounded-full border-8 border-gray-300 animate-spin">
        <div className="w-6 h-6 rounded-full bg-black translate-x-3"></div>
      </div>
      <div className="w-20 h-20 rounded-full border-8 border-gray-300 animate-spin">
        <div className="w-6 h-6 rounded-full bg-black translate-x-3"></div>
      </div>
    </div>
  );
};

export default Loading;
