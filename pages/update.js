import React, { useState, useEffect } from "react";
import Styles from "../styles/dashboard.module.css";
import axios from "axios";
const update = () => {
  const [emptyRooms, setErrom] = useState();
  const [totalPersons, setTpersons] = useState();
  const [totalBoys, setBoys] = useState();
  const [totalGirls, setGirls] = useState();
  const [data, setData] = useState([]);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    axios.get(`https://apis-new.onrender.com/details`).then((res) => {
      setData(res.data);
    });
  }, []);
  const submit = () => {
    axios
      .post(`https://apis-new.onrender.com/details`, {
        emptyRooms: parseInt(emptyRooms),
        totalPersons: parseInt(totalPersons),
        totalBoys: parseInt(totalBoys),
        totalGirls: parseInt(totalGirls),
      })
      .then((res) => {
        setData(res.data);
        setMessage(res.data.message);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className={Styles.newStudent_wrapper}>
          <h3 className="mb-4 text-center text-success">Update Hostel Data</h3>
          {message ? (
            <h4>Data Updated</h4>
          ) : (
            <div className="col-md-8 mx-auto">
              <div className={Styles.newStudent_form}>
                <div class="form-group">
                  <label className="mb-2">Empty Rooms</label>
                  <input
                    type="text"
                    className="form-control"
                    id="errom"
                    value={emptyRooms}
                    onChange={(e) => setErrom(e.target.value)}
                  />
                </div>

                <label className="mb-2">Total Persons</label>
                <input
                  type="text"
                  className="form-control"
                  id="tperson"
                  value={totalPersons}
                  onChange={(e) => setTpersons(e.target.value)}
                />

                <label className="mb-2">Total Boys</label>
                <input
                  type="text"
                  className="form-control"
                  id="boys"
                  value={totalBoys}
                  onChange={(e) => setBoys(e.target.value)}
                />

                <label className="mb-2">Total Girls</label>
                <input
                  type="text"
                  className="form-control"
                  id="girls"
                  value={totalGirls}
                  onChange={(e) => setGirls(e.target.value)}
                />

                <br />
                <div className="d-flex justify-content-center ">
                  <button
                    type="button"
                    className="btn btn-secondary btn-md "
                    onClick={submit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default update;
