import React, { useState } from "react";
import Styles from "../styles/dashboard.module.css";
const update = () => {
  const [eroom, setErrom] = useState(0);
  const [tpersons, setTpersons] = useState(0);
  const [boys, setBoys] = useState(0);
  const [girls, setGirls] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div className={Styles.newStudent_wrapper}>
          <h3 className="mb-4 text-center text-success">Update Hostel Data</h3>
          <div className="col-md-8 mx-auto">
            <div className={Styles.newStudent_form}>
              <div class="form-group">
                <label className="mb-2">Empty Rooms</label>
                <input
                  type="text"
                  className="form-control"
                  id="errom"
                  value={eroom}
                  onChange={() => setErrom(e.target.value)}
                />
              </div>

              <label className="mb-2">Total Persons</label>
              <input
                type="text"
                className="form-control"
                id="tperson"
                value={tpersons}
                onChange={() => setTpersons(e.target.value)}
              />

              <label className="mb-2">Total Boys</label>
              <input
                type="text"
                className="form-control"
                id="boys"
                value={boys}
                onChange={() => setBoys(e.target.value)}
              />

              <label className="mb-2">Total Girls</label>
              <input
                type="text"
                className="form-control"
                id="girls"
                value={girls}
                onChange={() => setGirls(e.target.value)}
              />

              <br />
              <div className="d-flex justify-content-center ">
                <button type="button" className="btn btn-secondary btn-md ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default update;
