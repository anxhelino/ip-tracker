import { useEffect, useContext } from "react";
import IpContext from "../context/IpContext";
import Loading from "./Loading";

function Card() {
  const { loading, getData, info } = useContext(IpContext);

  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className=" w-full flex -mt-20 ">
      <div className=" bg-base-100 shadow-xl mx-auto rounded-lg md:stats lg:stats xl:stats p-9 sm:p-1  xs:p-1 z-10 flex-col sm:w-2/4 xs:w-2/4">
        <div className="stat">
          <p className="font-bold text-Dark text-sm pb-2">IP ADDRESS</p>
          <h2 className="font-bold  text-2xl">{info.ip}</h2>
        </div>
        <div className="stat">
          <p className="font-bold text-Dark text-sm pb-2">LOCATION</p>
          <h2 className="font-bold text-2xl ">
            {info.location?.city},{info.location?.country}
          </h2>
        </div>
        <div className="stat">
          <p className="font-bold text-Dark text-sm pb-2">TIMEZONE</p>
          <h2 className="font-bold text-2xl">UTC {info.location?.timezone}</h2>
        </div>
        <div className="stat">
          <p className="font-bold text-Dark text-sm pb-2">ISP</p>
          <h2 className="font-bold  text-2xl">{info.isp}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
