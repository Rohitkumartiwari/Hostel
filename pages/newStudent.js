import React, { useState, useEffect } from "react";
import Styles from "../styles/dashboard.module.css";
import axios from "axios";
const newStudent = () => {
  const [name, setName] = useState();
  const [fname, setFName] = useState("");
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://apis-new.onrender.com/users")
      .then((res) => setData(res.data));
  }, []);
  const click = () => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("FathersName", fname);
    formData.append("mobile", mobile);
    formData.append("address", address);
    formData.append("image", image);
    formData.append("price", parseInt(price));
    axios
      .post("https://apis-new.onrender.com/users", formData)
      .then((res) => setData(res.data));
  };
  return (
    <div className="container">
      <div className="row">
        <div className={Styles.newStudent_wrapper}>
          <h3 className="mb-4 text-center text-success">
            Student Registration Form
          </h3>
          <div className="col-md-8 mx-auto">
            <div className={Styles.newStudent_form}>
              <div class="form-group">
                <label className="mb-2">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <label className="mb-2">Fathers Name</label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
              />

              <label className="mb-2">Mobile</label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <label className="mb-2">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <label className="mb-2">Address</label>
              <textarea
                className="form-control mb-2"
                id="address"
                rows="3"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>

              <label className="mb-2">Student Image</label>
              <br />
              <input
                type="file"
                className="form-control-file mb-3"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <br />
              <div className="d-flex justify-content-center ">
                <button
                  type="button"
                  className="btn btn-secondary btn-md "
                  onClick={click}
                >
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

export default newStudent;
