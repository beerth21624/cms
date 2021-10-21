import { observer, inject } from 'mobx-react';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const BackofficeMoreDetail = (props) => {
  useEffect(() => {});

  return (
    <body className="backoffice bg-brown ">
      {/* <nav className="navbar navbar-expand-md bg-dark navbar-light">
        <h4 className="text-light text-uppercase mb-0 py-2">
          ข้อมูลที่ลูกค้าเลือก
        </h4>
        <button
          className="navbar-toggler ml-auto mx-2 bg-light my-3"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="myNavbar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-xl-2 col-md-4 sidebar fixed-top">
                <a
                  href="#"
                  className="navbar-brand text-white d-block mx-auto text-center mb-4 bottom-border pb-2"
                >
                  <div className="">
                    <img
                      src="/logo/Logo Color_clear2.png"
                      alt=""
                      width="100%"
                    />
                  </div>
                </a>

                <img
                  src="/avatar.png"
                  width="50"
                  height="50"
                  alt="nice"
                  className="rounded-circle mr-3"
                />
                <a href="#" className="text-white ">
                  Parada Susuk{' '}
                </a>
                <div className="border-bottom pb-3"></div>
                <ul className="navbar-nav flex-column mt-4">
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-light p-3 mb-2 sidebar-link "
                    >
                      {' '}
                      เมนูสลิปจ่ายเงิน
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-light p-3 mb-2 sidebar-link"
                    >
                      {' '}
                      รายชื่อลูกค้า
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-light p-3 mb-2  sidebar-link"
                    >
                      {' '}
                      Package & items
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-light p-3 mb-2  current"
                    >
                      {' '}
                      ข้อมูลที่ลูกค้าเลือก
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-9 col-xl-10 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
                <div className="row align-items-center">
                  <div className="col-md-4 d-none d-lg-block">
                    <h4 className="text-light text-uppercase mb-0 py-2">
                      ข้อมูลที่ลูกค้าเลือก
                    </h4>
                  </div>
                  <div className="col-md-5"></div>
                  <div className="col-md-3">
                    <ul className="navbar-nav">
                      <li className="nav-item ml-md-auto ">
                        <a href="#" className="nav-link ">
                          <i className="fa fa-sign-out text-white fa-lg"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      <div className="Content col-lg-9 col-xl-10 col-md-8 ml-auto bg-brown  ">
        <div className="row align-items-center  ">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="row ">
              <div className="col-md-6">
                <div style={{ height: ' 50px' }}></div>
                <div className="fm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          ID
                        </label>
                        <input
                          readonly
                          type="text"
                          value="002"
                          className="form-control"
                          id="Fullname"
                          placeholder="กรุณาใส่ชื่อ"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          วันที่
                        </label>
                        <input
                          readonly
                          type="text"
                          value="10:00 20/02/2020"
                          className="form-control"
                          id="Surename"
                          placeholder="กรุณาใส่นามสกุล"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          ชื่อจริง
                        </label>
                        <input
                          readonly
                          value="Jone"
                          type="text"
                          className="form-control"
                          id="Fullname"
                          placeholder="กรุณาใส่ชื่อ"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          นามสกุล
                        </label>
                        <input
                          readonly
                          value="Dobe"
                          type="text"
                          className="form-control"
                          id="Surename"
                          placeholder="กรุณาใส่นามสกุล"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          อีเมล
                        </label>
                        <input
                          readonly
                          value="Hataiphat.30@gmail.com"
                          type="text"
                          className="form-control"
                          id="Fullname"
                          placeholder="กรุณากรอกอีเมลล์ของคุณ"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          ไอดีไลน์
                        </label>
                        <input
                          readonly
                          value="ff.cute"
                          type="text"
                          className="form-control"
                          id="Surename"
                          placeholder="กรุณากรอกไอดีไลน์"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          ที่อยู่
                        </label>
                        <input
                          readonly
                          value="ไอดีโอ สาธร - วงเวียนใหญ่"
                          type="text"
                          className="form-control"
                          id="Address"
                          placeholder="กรุณากรอกที่อยู่"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          แขวง/ตำบล
                        </label>
                        <input
                          readonly
                          value="คลองสาน"
                          type="text"
                          className="form-control"
                          id="Fullname"
                          placeholder="กรุณากรอกแขวง/ตำบล"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          เขต/อำเภอ
                        </label>
                        <input
                          readonly
                          value="คลองต้นไทร"
                          type="text"
                          className="form-control"
                          id="sub-district"
                          placeholder="กรุณากรอกเขต/อำเภอ"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          จังหวัด
                        </label>
                        <input
                          readonly
                          value="กรุงเททพมหานคร"
                          type="text"
                          className="form-control"
                          id="province"
                          placeholder="กรุณากรอกจังหวัด"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          รหัสไปรษณีย์
                        </label>
                        <input
                          readonly
                          value="10100"
                          type="text"
                          className="form-control"
                          id="Postnumber"
                          placeholder="กรุณากรอกรหัสไปรษณีย์"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          โปรเจค
                        </label>
                        <input
                          readonly
                          value="Ideo"
                          type="text"
                          className="form-control"
                          id="Project"
                          placeholder="กรณากรอกโปรเจค"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          ชนิดห้อง
                        </label>
                        <input
                          readonly
                          value="ห้องนอน"
                          type="text"
                          className="form-control"
                          id="Project"
                          placeholder="กรณากรอกโปรเจค"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          สไตล์การแต่งบ้าน
                        </label>
                        <input
                          readonly
                          value="Minimal"
                          type="text"
                          className="form-control"
                          value="Minimal"
                          id="Project"
                          placeholder="กรณากรอกโปรเจค"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{ height: '50px' }}></div>
                <div className="fm">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          พื้นที่ห้องที่ต้องการตกแต่ง (ตารางเมตร) Room size (m2)
                          *
                        </label>
                        <input
                          readonly
                          value="27.1"
                          type="text"
                          className="form-control"
                          id="size"
                          placeholder="กรุณาใส่ขนาดห้อง"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          งบประมาณในการตกแต่งของคุณ (บาท) Your budget (baht)
                        </label>
                        <input
                          readonly
                          value="250,000"
                          type="text"
                          className="form-control"
                          id="budget"
                          placeholder="กรุณาใส่งบประมาณ"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          จำนวนคนของผู้อยู่อาศัยร่วมกัน{' '}
                        </label>
                        <input
                          readonly
                          value="1"
                          type="text"
                          className="form-control"
                          id="Member"
                          placeholder="กรุณาใส่จำนวนคน"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          ความต้องการในการตกแต่ง (Which are you looking for?)
                        </label>
                        <input
                          readonly
                          value="Dobe"
                          type="text"
                          className="form-control"
                          id="Need"
                          placeholder="กรุณาใส่ความต้องการ"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          วันที่ต้องการให้ตกแต่งเสร็จ และส่งมอบห้อง
                        </label>
                        <input
                          readonly
                          value="เรียบ หรู"
                          type="text"
                          className="form-control"
                          id="Project"
                          placeholder="กรุณาใส่วันที่"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Lifestyle ส่วนตัว เช่น ชอบดู Netflix, ชอบอ่านหนังสือ
                        </label>
                        <input
                          readonly
                          value="ดูหนัง ฟังเพลง"
                          type="text"
                          className="form-control"
                          id="Lifestyle"
                          placeholder="กรุณาใส่ขนาด Lifestyle"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          ความชอบพิเศษในเรื่องสไตล์ เช่น ชอบพื้นที่กว้างๆ
                        </label>
                        <input
                          readonly
                          value="ชอบพื้นที่กว้างๆ"
                          type="text"
                          className="form-control"
                          id="Style"
                          placeholder="กรุณาใส่ความชอบพิเศษ"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          ฟังก์ชันที่ต้องการพิเศษ เช่น ขอตู้เก็บของใหญ่ๆ
                        </label>
                        <input
                          readonly
                          value="ขอตู้เก็บของใหญ่ๆ"
                          type="text"
                          className="form-control"
                          id="Function"
                          placeholder="กรุณาใส่ฟังก์ชันพิเศษ"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          ความต้องการอื่นๆ เพิ่มเติม
                        </label>
                        <input
                          readonly
                          value="เลี้ยงหมา"
                          type="text"
                          className="form-control"
                          id="Others"
                          placeholder="กรุณาใส่อื่นๆ"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div style={{ height: '10px' }}></div>
                <div className="fm">
                  <div className="My-Package">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Package และ items ที่ลูกค้าเลือก
                          </label>

                          <div className="tb">
                            <div className="row no-gutters">
                              <div className="col-lg-5 ">
                                <div className="row no-gutters">
                                  <div className="col">
                                    <div className="cell text-center b  t th">
                                      <div className="product-th text-center">
                                        <div className="p text-center">
                                          {' '}
                                          Mellow Beach House
                                        </div>
                                        <div className="p text-center">
                                          160,000 บาท
                                        </div>
                                      </div>
                                    </div>
                                    <div className="p-5 cell ">
                                      <img
                                        src="/package/16.png"
                                        alt=""
                                        width="100%"
                                        className="rounded"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-7 ">
                                <div className="row no-gutters">
                                  <div className="col-7">
                                    <div className="cell b t l th text-center font-th">
                                      รายการสินค้า
                                    </div>
                                  </div>
                                  <div className="col-2">
                                    <div className="cell b l t  th text-center font-th">
                                      จำนวน
                                    </div>
                                  </div>
                                  <div className="col-3">
                                    <div className="cell b l  t th text-center font-th">
                                      ราคารวม(บาท)
                                    </div>
                                  </div>
                                </div>
                                <div className="row no-gutters tb-record">
                                  <div className="col-7">
                                    <div className="cell b l  th text-center font-th">
                                      <div className="product-text">
                                        <div className="p"> 3 seat couch</div>
                                        <div className="p">12,000 บาท</div>
                                      </div>
                                      <div className="product-image">
                                        <img
                                          src="/product/Group 79.png"
                                          alt=""
                                          height="92%"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-2">
                                    <div className="cell b l  th text-center font-th">
                                      1
                                    </div>
                                  </div>
                                  <div className="col-3">
                                    <div className="cell b l  th text-center font-th">
                                      12,000
                                    </div>
                                  </div>
                                </div>
                                <div className="row no-gutters tb-record">
                                  <div className="col-7">
                                    <div className="cell b l  th text-center font-th">
                                      <div className="product-text">
                                        <div className="p"> Love seat</div>
                                        <div className="p">12,000 บาท</div>
                                      </div>
                                      <div className="product-image">
                                        <img
                                          src="/product/Group 82.png"
                                          alt=""
                                          height="92%"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-2">
                                    <div className="cell b l  th text-center font-th">
                                      1
                                    </div>
                                  </div>
                                  <div className="col-3">
                                    <div className="cell b l  th text-center font-th">
                                      12,000
                                    </div>
                                  </div>
                                </div>

                                <div className="row no-gutters tb-record">
                                  <div className="col-7">
                                    <div className="cell b l   th text-center font-th">
                                      <div className="product-text">
                                        <div className="p">Coffee table</div>
                                        <div className="p">12,000 บาท</div>
                                      </div>
                                      <div className="product-image">
                                        <img
                                          src="/product/Group 85.png"
                                          alt=""
                                          height="92%"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-2">
                                    <div className="cell b l  th text-center font-th">
                                      1
                                    </div>
                                  </div>
                                  <div className="col-3">
                                    <div className="cell b l  th text-center font-th">
                                      12,000
                                    </div>
                                  </div>
                                </div>

                                <div className="row no-gutters tb-record">
                                  <div className="col-7">
                                    <div className="cell b l  th text-center font-th">
                                      <div className="product-text">
                                        <div className="p">Armchair</div>
                                        <div className="p">12,000 บาท</div>
                                      </div>
                                      <div className="product-image">
                                        <img
                                          src="/product/Group 88.png"
                                          alt=""
                                          height="92%"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-2">
                                    <div className="cell b l  th text-center font-th">
                                      1
                                    </div>
                                  </div>
                                  <div className="col-3">
                                    <div className="cell b l  th text-center font-th">
                                      12,000
                                    </div>
                                  </div>
                                </div>

                                <div className="row no-gutters tb-record">
                                  <div className="col-7">
                                    <div className="cell b l  th text-center font-th">
                                      <div className="product-text">
                                        <div className="p">Side table</div>
                                        <div className="p">12,000 บาท</div>
                                      </div>
                                      <div className="product-image">
                                        <img
                                          src="/product/Group 91.png"
                                          alt=""
                                          height="92%"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-2">
                                    <div className="cell b l  th text-center font-th">
                                      2
                                    </div>
                                  </div>
                                  <div className="col-3">
                                    <div className="cell b l  th text-center font-th">
                                      24,000
                                    </div>
                                  </div>
                                </div>

                                <div className="row no-gutters tb-record">
                                  <div className="col-7">
                                    <div className="cell b l  th text-center font-th">
                                      <div className="product-text">
                                        <div className="p"> Carpet</div>
                                        <div className="p">12,000 บาท</div>
                                      </div>
                                      <div className="product-image">
                                        <img
                                          src="/product/Group 94.png"
                                          alt=""
                                          height="92%"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-2">
                                    <div className="cell b l  th text-center font-th">
                                      1
                                    </div>
                                  </div>
                                  <div className="col-3">
                                    <div className="cell b l  th text-center font-th">
                                      12,000
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block" style={{ height: '50px' }}>
          &nbsp;
        </div>
      </div>
    </body>
  );
};

export default inject('example')(observer(BackofficeMoreDetail));
