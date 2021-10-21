import { observer, inject } from 'mobx-react';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';

const BackofficeInformationClientSeleted = (props) => {
  useEffect(() => {});

  return (
    <Layout title="ZDECOR | ข้อมูลที่ลูกค้าเลือก">
      <body className="backoffice">
        {/* <nav className="navbar navbar-expand-md bg-dark  navbar-light">

                <h4 className="text-light text-uppercase mb-0 py-2"> ข้อมูลที่ลูกค้าเลือก</h4>
                <button className="navbar-toggler ml-auto mx-2 bg-light my-3" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse " id="myNavbar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-xl-2 col-md-4 sidebar fixed-top">
                                <a href="#" className="navbar-brand text-white d-block mx-auto text-center mb-4 bottom-border pb-2">
                                    <div className=""><img src="/logo/Logo Color_clear2.png" alt="" width="100%" /></div>
                                </a>

                                <img src="/avatar.png" width="50" height="50" alt="nice" className="rounded-circle mr-3" />
                                <a href="#" className="text-white ">Parada Susuk </a>
                                <div className="border-bottom pb-3"></div>
                                <ul className="navbar-nav flex-column mt-4">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-light p-3 mb-2 sidebar-link ">  เมนูสลิปจ่ายเงิน

                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-light p-3 mb-2  sidebar-link">  รายชื่อลูกค้า

                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-light p-3 mb-2 sidebar-link">  Package & items

                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-light p-3 mb-2  current">  ข้อมูลที่ลูกค้าเลือก

                                        </a>
                                    </li>


                                </ul>
                            </div>

                            <div className="col-lg-9 col-xl-10 col-md-8 ml-auto bg-dark   fixed-top py-2 top-navbar">
                                <div className="row align-items-center">
                                    <div className="col-md-4 d-none d-lg-block">
                                        <h4 className="text-light text-uppercase mb-0 py-2">  ข้อมูลที่ลูกค้าเลือก</h4>
                                    </div>
                                    <div className="col-md-5">

                                    </div>
                                    <div className="col-md-3">
                                        <ul className="navbar-nav">

                                            <li className="nav-item ml-md-auto ">
                                                <a href="#" className="nav-link "><i className="fa fa-sign-out text-white fa-lg"></i></a>
                                            </li>
                                        </ul>

                                    </div>

                                </div>





                            </div>


                        </div>
                    </div>
                </div>

            </nav> */}

        <div className="Content col-lg-9 col-xl-10 col-md-8 ml-auto   ">
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
                      วันที่
                    </th>
                    <th scope="col" className="text-center">
                      ชื่อ-นามสกุล
                    </th>
                    <th scope="col" className="text-center">
                      อีเมล
                    </th>
                    <th scope="col" className="text-center">
                      เบอร์โทร
                    </th>
                    <th scope="col" className="text-center">
                      ชนิดของห้อง
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
                    <td className="text-center">abc@gmail.com</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">Living Room</td>
                    <td className="text-center">
                      <a href="#" className="nav-link text-main">
                        ดูรายละเอียดทั้งหมด
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">abc@gmail.com</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">Living Room</td>
                    <td className="text-center">
                      <a href="#" className="nav-link text-main">
                        ดูรายละเอียดทั้งหมด
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">abc@gmail.com</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">Living Room</td>
                    <td className="text-center">
                      <a href="#" className="nav-link text-main">
                        ดูรายละเอียดทั้งหมด
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">abc@gmail.com</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">Living Room</td>
                    <td className="text-center">
                      <a href="#" className="nav-link text-main">
                        ดูรายละเอียดทั้งหมด
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">abc@gmail.com</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">Living Room</td>
                    <td className="text-center">
                      <a href="#" className="nav-link text-main">
                        ดูรายละเอียดทั้งหมด
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">abc@gmail.com</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">Living Room</td>
                    <td className="text-center">
                      <a href="#" className="nav-link text-main">
                        ดูรายละเอียดทั้งหมด
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">abc@gmail.com</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">Living Room</td>
                    <td className="text-center">
                      <a href="#" className="nav-link text-main">
                        ดูรายละเอียดทั้งหมด
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">abc@gmail.com</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">Living Room</td>
                    <td className="text-center">
                      <a href="#" className="nav-link text-main">
                        ดูรายละเอียดทั้งหมด
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">abc@gmail.com</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">Living Room</td>
                    <td className="text-center">
                      <a href="#" className="nav-link text-main">
                        ดูรายละเอียดทั้งหมด
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">abc@gmail.com</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">Living Room</td>
                    <td className="text-center">
                      <a href="#" className="nav-link text-main">
                        ดูรายละเอียดทั้งหมด
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">10:00 20 Oct 2021</td>
                    <td className="text-center">Jhob Doe</td>
                    <td className="text-center">abc@gmail.com</td>
                    <td className="text-center">0834445487</td>
                    <td className="text-center">Living Room</td>
                    <td className="text-center">
                      <a href="#" className="nav-link text-main">
                        ดูรายละเอียดทั้งหมด
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
                    <a className="page-link " href="#">
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

export default inject('example')(observer(BackofficeInformationClientSeleted));
