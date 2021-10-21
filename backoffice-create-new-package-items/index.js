import { observer, inject } from 'mobx-react';
import { useEffect, useState } from 'react';
import Link from 'next/Link';
import Head from 'next/head';
import Layout from '../../components/Layout';

const BackOfficeCCreateNewPackageItem = (props) => {
  useEffect(() => {});

  return (
    <Layout title="">
      <div className="backoffice bg-brown ">
        <div className="Content col-lg-9 col-xl-10 col-md-8 ml-auto bg-brown ">
          <div className="row align-items-center">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div style={{ height: '50px' }}></div>
              <div className="fm">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <div className="form-group files color">
                        <label>เพิ่มรูปภาพหน้าปก Package</label>
                        <input
                          type="file"
                          className="form-control"
                          multiple=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        ชื่อ Package
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Fullname"
                        placeholder="กรุณาใส่ชื่อ Package"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        รายการสินค้า
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Fullname"
                        placeholder="กรุณากรอกรายการสินค้า"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        ราคา
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="sub-district"
                        placeholder="กรุณากรอกราคา"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        จำนวน
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="sub-district"
                        placeholder="กรุณากรอกจำนวน"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <div className="form-group files color">
                        <label>เพิ่มรูปสินค้า</label>
                        <input
                          type="file"
                          className="form-control"
                          multiple=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 mt-1">
                    <button
                      className="btn btn-main-next btn-block  btn-lg"
                      type="button"
                    >
                      <i className="fa fa-plus"></i> &nbsp;เพิ่มรายการสินค้า
                    </button>
                  </div>
                  <div className="col-lg-6 mt-1">
                    <button
                      className="btn btn-cancel btn-block  btn-lg"
                      type="button"
                    >
                      ยกเลิก
                    </button>
                  </div>
                  <div className="col-lg-6 mt-1">
                    <button
                      className="btn btn-save btn-block  btn-lg"
                      type="button"
                    >
                      บันทึก
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-block" style={{ height: '50px' }}>
            &nbsp;
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default inject('example')(observer(BackOfficeCCreateNewPackageItem));
