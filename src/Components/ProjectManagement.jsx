function ProjectManagement() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-end self-center px-4 py-2">
        <p className="font-poppins font-bold">Github</p>
      </div>
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold">Heroku</p>
      </div>
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-start self-center px-4 py-2">
        <p className="font-poppins font-bold">Google Drive</p>
      </div>
    </div>
  );
}

export default ProjectManagement;
