import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex justify-between py-10 px-4">
      <div className="relative flex flex-row items-center w-96">
        <FaSearch className="absolute opacity-40 text-lg pl-8 cursor-pointer" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Enter Currency Code ..."
          className="p-4 w-full bg-white shadow-[0_0_3px_3px_rgba(0,0,0,0.03)] border-none rounded-[10px] placeholder-opacity-40 placeholder-text-sm placeholder-text-gray-500 placeholder-font-semibold"
        />
        <button className="absolute opacity-40 text-lg pr-4 cursor-pointer right-0 bg-transparent border-none">X</button>
      </div>
    </div>
  );
};

export default Search;