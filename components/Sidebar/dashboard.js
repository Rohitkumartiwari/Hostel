import React from "react";
import Styles from "../../styles/dashboard.module.css";
import { useRouter } from "next/router";
import {
  FcDatabase,
  FcMenu,
  FcRules,
  FcConferenceCall,
  FcPuzzle,
} from "react-icons/fc";
const dashboard = () => {
  const router = useRouter();
  return (
    <div className={Styles.sidebar_wrapper}>
      <div className={Styles.sidebar} onClick={() => router.push("/")}>
        <div className="row ">
          <div className="d-flex justify-content-between">
            <span>
              <FcDatabase fontSize={25} />
            </span>
            <h5>Home</h5>
          </div>
        </div>
      </div>
      <div className={Styles.sidebar} onClick={() => router.push("/dashboard")}>
        <div className="row ">
          <div className="d-flex justify-content-between">
            <span>
              <FcRules fontSize={25} />
            </span>
            <h5>Dashboard</h5>
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
              <FcConferenceCall fontSize={25} />
            </span>
            <h5>New Student</h5>
          </div>
        </div>
      </div>
      <div className={Styles.sidebar} onClick={() => router.push("/update")}>
        <div className="row ">
          <div className="d-flex justify-content-between">
            <span>
              <FcPuzzle fontSize={25} />
            </span>
            <h5>Update</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;