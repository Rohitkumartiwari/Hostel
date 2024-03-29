import React from "react";
import Styles from "../../styles/dashboard.module.css";
import { useRouter } from "next/router";
import {
  FcDatabase,
  FcMenu,
  FcRules,
  FcConferenceCall,
  FcPuzzle,
  FcHome,
  FcKindle,
} from "react-icons/fc";
const dashboard = () => {
  const router = useRouter();

  return (
    <div className={Styles.sidebar_wrapper}>
      <div className={Styles.header_name} onClick={() => router.push("/")}>
        <h4 className="text-white text-center mb-3">
          <span>
            <FcHome fontSize={75} />
          </span>
        </h4>
      </div>

      <div className={Styles.sidebar} onClick={() => router.push("/dashboard")}>
        <div className="row ">
          <div className="d-flex justify-content-between">
            <span>
              <FcRules fontSize={35} />
            </span>
            <h5>Dashboard</h5>
          </div>
        </div>
      </div>
      <div className={Styles.sidebar} onClick={() => router.push("/")}>
        <div className="row ">
          <div className="d-flex justify-content-between">
            <span>
              <FcDatabase fontSize={35} />
            </span>
            <h5>Detail</h5>
          </div>
        </div>
      </div>

      <div
        className={Styles.sidebar}
        onClick={() => router.push("/newStudent")}
      >
        <div className="row ">
          <div className="d-flex justify-content-between">
            <span>
              <FcConferenceCall fontSize={35} />
            </span>
            <h5>Add New </h5>
          </div>
        </div>
      </div>
      <div className={Styles.sidebar} onClick={() => router.push("/update")}>
        <div className="row ">
          <div className="d-flex justify-content-between">
            <span>
              <FcPuzzle fontSize={35} />
            </span>
            <h5>Update</h5>
          </div>
        </div>
      </div>
      <div className={Styles.sidebar} onClick={() => router.push("/chat")}>
        <div className="row ">
          <div className="d-flex justify-content-between">
            <span>
              <FcKindle fontSize={35} />
            </span>
            <h5>Chat</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
