import { useState, useContext } from "react";
import IpContext from "../context/IpContext";

function Search() {
  const [ip, setIp] = useState("");

  const { getInfo } = useContext(IpContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getInfo(ip);
      }}
    >
      <div className="form-control ">
        <div className="relative md:w-1/3 lg:w-1/3 sm:w-2/3 xs:w-2/3 mx-auto">
          <input
            onChange={(e) => setIp(e.target.value)}
            value={ip}
            className="w-full p-2 input input-md text-black rounded-lg font-semibold text-lg placeholder:text-base placeholder:font-medium "
            type="text"
            placeholder="Search for any IP addres or domain"
          />
          <button
            type="submit"
            className="absolute top-0 -right-1 rounded-l-none btn bg-Black"
          >
            &gt;
          </button>
        </div>
      </div>
    </form>
  );
}

export default Search;
