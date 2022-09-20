import React, { useEffect, useState } from "react";
import axios from "axios";
import Styles from "../styles/dashboard.module.css";
import { BiBuildingHouse, BiMale, BiFemale } from "react-icons/bi";
import { BsHouseDoor, BsFillPeopleFill } from "react-icons/bs";
import { FaMale, FaFeMale } from "react-icons/fa";
const dashboard = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    axios.get(`https://apis-new.onrender.com/details`).then((res) => {
      setData(res.data);
    });
  }, []);
  const value = data.slice(-1);

  return (
    <div>
      <div className={Styles.dashboard_wrapper}>
        <h3 className=" mb-5">Dashboard</h3>
        <div className="row">
          <div className="col-md-4">
            <div className={`${Styles.trooms} d-flex justify-content-between`}>
              <span>
                <BiBuildingHouse fontSize={35} />
              </span>
              Total Rooms 14
            </div>
          </div>
          {value.map((a) => {
            return (
              <>
                <div className="col-md-4">
                  <div
                    className={`${Styles.erooms} d-flex justify-content-between`}
                  >
                    <span>
                      <BsHouseDoor fontSize={35} />
                    </span>
                    Empty Rooms {a.emptyRooms}
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className={`${Styles.tstudent} d-flex justify-content-between`}
                  >
                    <span>
                      <BsFillPeopleFill fontSize={35} />
                    </span>
                    Total Persons {a.totalPersons}
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className={`${Styles.boys} d-flex justify-content-between`}
                  >
                    <span>
                      <BiMale fontSize={35} />
                    </span>
                    Total Boys {a.totalBoys}
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className={`${Styles.girls} d-flex justify-content-between`}
                  >
                    <span>
                      <BiFemale fontSize={35} />
                    </span>
                    Total girls {a.totalGirls}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default dashboard;
