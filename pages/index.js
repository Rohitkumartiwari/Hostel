import Head from "next/head";
import React, { useState, useEffect } from "react";
import Styles from "../styles/dashboard.module.css";
import Images from "next/image";
import img1 from "../public/1.jpg";
import axios from "axios";
export default function index() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://apis-new.onrender.com/users")
      .then((res) => setData(res.data));
  }, []);
  console.log(data);
  return (
    <div className="container">
      <div className="row">
        <h3 className="text-center text-success mt-4">Student Detail</h3>
        <div className="col-md-12">
          <div className={Styles.home_table}>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Father Name</th>

                  <th scope="col">Mobile</th>

                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => {
                  return (
                    <tr>
                      <th scope="row" key={index}>
                        {index}
                      </th>
                      <td className="d-flex">
                        <div className={Styles.img_wrapper}>
                          <Images
                            src={`https://apis-new.onrender.com/${data.image}`}
                            objectFit="cover"
                            layout="fill"
                          />
                        </div>
                        <span>{data.name}</span>{" "}
                      </td>
                      <td>{data.FathersName}</td>
                      <td>{data.mobile}</td>
                      <td>{data.price}</td>
                    </tr>
                  );
                })}
                {/* <tr>
                  <th scope="row">1</th>
                  <td className="d-flex">
                    <div className={Styles.img_wrapper}>
                      <Images src={img1} objectFit="cover" layout="fill" />
                    </div>
                    <span>Mark</span>{" "}
                  </td>
                  <td>@fat</td>
                  <td>sln</td>
                  <td>2500</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
