import Head from "next/head";
import React, { useState, useEffect } from "react";
import Styles from "../styles/dashboard.module.css";
import Images from "next/image";
import axios from "axios";
import { FcFullTrash } from "react-icons/fc";
import { GoTrashcan } from "react-icons/go";
import { FiEdit } from "react-icons/fi";

export default function index() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://apis-new.onrender.com/users")
      .then((res) => setData(res.data));
  }, []);
  console.log(data);
  const del = (id) => {
    const newData = data.filter((a) => a._id !== id);
    setData(newData);
    axios
      .delete(`https://apis-new.onrender.com/users/${id}`)
      .then((res) => console.log(res));
  };
  // const date = new Date().toLocaleDateString();
  // console.log(date);
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
                  <th scope="col">Date</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
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
                      <td>{new Date().toLocaleDateString()}</td>
                      <td>
                        <div
                          onClick={() => del(data._id)}
                          className="cursor-pointer"
                        >
                          <GoTrashcan fontSize={25}></GoTrashcan>
                        </div>
                        {/* <div
                          onClick={() => edit(data._id)}
                          className="cursor-pointer"
                        >
                          <FiEdit fontSize={25}></FiEdit>
                        </div> */}
                      </td>
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
