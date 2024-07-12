function Tools() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-start self-center px-4 py-2">
        <p className="font-poppins font-bold">Chrome Dev Tools </p>
      </div>
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold">React Dev Tools</p>
      </div>

      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-start self-center px-4 py-2">
        <p className="font-poppins font-bold">Windows</p>
      </div>
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p>VS Code</p>
      </div>
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold">Postman</p>
      </div>
    </div>
  );
}

export default Tools;
