import Head from "next/head";
import React, { useState, useEffect } from "react";
import Styles from "../styles/dashboard.module.css";
import Images from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoTrashcan } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";

export default function index() {
  const [data, setData] = useState([]);
  const [modal, setModal] = React.useState(false);
  const [info, setInfo] = useState([]);

  const [message, setMessage] = useState(null);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    axios
      .get("https://apis-new.onrender.com/users")
      .then((res) => setData(res.data));
  }, []);

  const del = (id) => {
    const newData = data.filter((a) => a._id !== id);
    setData(newData);
    axios
      .delete(`https://apis-new.onrender.com/users/${id}`)
      .then((res) => console.log(res));
  };

  console.log(info);
  const click = () => {
    let formData = new FormData();
    formData.append("name", info.name);
    formData.append("FathersName", info.FathersName);
    formData.append("mobile", info.mobile);
    formData.append("address", info.address);
    formData.append("image", info.image);
    formData.append("price", parseInt(info.price));
    axios
      .put(`https://apis-new.onrender.com/users/${info._id}`, formData)
      .then((res) => {
        setMessage(res.data.message);
        setModal(!modal);
        toast.success("data update successfully");
      });
  };

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
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(data ? data : []).map((data, index) => {
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
                        <div
                          onClick={() => {
                            setInfo(data);
                            toggle();
                          }}
                          className="cursor-pointer"
                        >
                          <FiEdit fontSize={25}></FiEdit>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <Modal isOpen={modal} toggle={toggle} info={info}>
                <ModalHeader>Update Details</ModalHeader>
                <ModalBody>
                  <div className="col-md-8 mx-auto">
                    <div className={Styles.newStudent_form}>
                      <div class="form-group">
                        <label className="mb-2">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={info.name}
                          onChange={(e) =>
                            setInfo({ ...info, name: e.target.value })
                          }
                        />
                      </div>

                      <label className="mb-2">Fathers Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        value={info.FathersName}
                        onChange={(e) =>
                          setInfo({ ...info, FathersName: e.target.value })
                        }
                      />

                      <label className="mb-2">Mobile</label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        value={info.mobile}
                        onChange={(e) =>
                          setInfo({ ...info, mobile: e.target.value })
                        }
                      />
                      <label className="mb-2">Price</label>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        value={info.price}
                        onChange={(e) =>
                          setInfo({ ...info, price: e.target.value })
                        }
                      />

                      <label className="mb-2">Address</label>
                      <textarea
                        className="form-control mb-2"
                        id="address"
                        rows="3"
                        value={info.address}
                        onChange={(e) =>
                          setInfo({ ...info, address: e.target.value })
                        }
                      ></textarea>

                      <label className="mb-2">Student Image</label>
                      <br />
                      <input
                        type="file"
                        className="form-control-file mb-3"
                        id="image"
                        onChange={(e) =>
                          setInfo({
                            ...info,
                            image: e.currentTarget.files[0],
                          })
                        }
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
                </ModalBody>
              </Modal>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
