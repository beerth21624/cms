import { observer, inject } from 'mobx-react';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
const BackOfficeCustomer = (props) => {
  useEffect(() => {});
  const router = useRouter();

  return (
    <Layout title="ZDECOR | รายชื่อลูกค้า">
      <body className="backoffice">
        <div className="Content col-lg-9 col-xl-10 col-md-8 ml-auto ">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div
                className="d-none d-lg-block"
                style={{ height: '20px' }}
              ></div>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col" className="text-center">
                      วันที่ชำระ
                    </th>
                    <th scope="col" className="text-center">
                      ชื่อ-นามสกุล
                    </th>
                    <th scope="col" className="text-center">
                      เบอร์โทร
                    </th>
                    <th scope="col" className="text-center">
                      ข้อความ
                    </th>
                    <th scope="col" className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">สนใจ</td>
                    <td className="text-center">
                      <a href="#" className="nav-link ">
                        <i className="fa fa-trash text-main fa-lg"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">สนใจมาก</td>
                    <td className="text-center">
                      <a href="#" className="nav-link ">
                        <i className="fa fa-trash text-main fa-lg"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">สนใจ</td>
                    <td className="text-center">
                      <a href="#" className="nav-link ">
                        <i className="fa fa-trash text-main fa-lg"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">สนใจมาก</td>
                    <td className="text-center">
                      <a href="#" className="nav-link ">
                        <i className="fa fa-trash text-main fa-lg"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">สนใจ</td>
                    <td className="text-center">
                      <a href="#" className="nav-link ">
                        <i className="fa fa-trash text-main fa-lg"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">สนใจมาก</td>
                    <td className="text-center">
                      <a href="#" className="nav-link ">
                        <i className="fa fa-trash text-main fa-lg"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">สนใจ</td>
                    <td className="text-center">
                      <a href="#" className="nav-link ">
                        <i className="fa fa-trash text-main fa-lg"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">สนใจมาก</td>
                    <td className="text-center">
                      <a href="#" className="nav-link ">
                        <i className="fa fa-trash text-main fa-lg"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">สนใจ</td>
                    <td className="text-center">
                      <a href="#" className="nav-link ">
                        <i className="fa fa-trash text-main fa-lg"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">สนใจมาก</td>
                    <td className="text-center">
                      <a href="#" className="nav-link ">
                        <i className="fa fa-trash text-main fa-lg"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">สนใจ</td>
                    <td className="text-center">
                      <a href="#" className="nav-link ">
                        <i className="fa fa-trash text-main fa-lg"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">สนใจมาก</td>
                    <td className="text-center">
                      <a href="#" className="nav-link ">
                        <i className="fa fa-trash text-main fa-lg"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1">
                      <i className="fa fa-chevron-left  text-main"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fa fa-chevron-right  text-main"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </body>
    </Layout>
  );
};

export default inject('example')(observer(BackOfficeCustomer));
