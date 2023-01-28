import { useState, createContext, useEffect } from "react";

const IpContext = createContext();

export const IpProvider = ({ children }) => {
  const [ip, setIp] = useState("");
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const res = await fetch("https://api64.ipify.org/?format=json");
    const data = await res.json();
    console.log(data.ip);
    setIp(data.ip);
    const info = await getInfo(data.ip);
    setLoading(false);
    setInfo(info);
  };

  const getInfo = async (ip) => {
    setLoading(true);
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_izsYZb8r8hsz77B1dYm8S9ToH7Csn&ipAddress=${ip}`
    );
    const data = await res.json();
    setInfo(data);
    setLoading(false);
    return data;
  };

  return (
    <IpContext.Provider
      value={{
        ip,
        loading,
        info,
        getData,
        getInfo,
      }}
    >
      {children}
    </IpContext.Provider>
  );
};

export default IpContext;
