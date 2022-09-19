import Head from "next/head";
import Image from "next/image";
import Styles from "../styles/dashboard.module.css";

export default function index() {
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

                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
