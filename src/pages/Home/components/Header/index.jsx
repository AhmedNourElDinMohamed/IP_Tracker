import { useState } from "react";
import arrowIcon from "../../../../assets/images/icon-arrow.svg";

const Header = () => {
  const [data, setData] = useState({});
  const [ip, setIp] = useState("");

  const getData = async (ip) => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_glMF6F7Tc6qykHybk8Vx4Ox4fElbA&ipAddress=${ip}`
    );
    const data = await res.json();

    setData(data);
  };

  return (
    <section className="header__wrapper">
      <div className="container">
        <div className="form__wrapper">
          <h1>IP Adress Tracker</h1>
          <div className="input__data">
            <input
              type="text"
              onChange={(e) => setIp(e.target.value)}
              placeholder="Enter IP"
            />
            <span onClick={() => getData(ip)}>
              <img src={arrowIcon} alt="" />
            </span>
          </div>
        </div>
        <div className="location__data">
          <div className="location__data-ip">
            <span>ip address</span>
            <p>{data?.ip ? data?.ip : "No Data"}</p>
          </div>
          <div className="location__data-location">
            <span>location</span>
            <p>
              {data?.location?.country ? data?.location?.country : "No Data"}
            </p>
          </div>
          <div className="location__data-timezone">
            <span>timezone</span>
            <p>
              {data?.location?.timezone ? data?.location?.timezone : "No Data"}
            </p>
          </div>
          <div className="location__data-isp">
            <span>isp</span>
            <p>{data?.isp ? data?.isp : "No Data"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
