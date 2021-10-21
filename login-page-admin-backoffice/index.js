import { observer, inject } from "mobx-react";
import { useEffect, useState } from "react";
import Head from "next/head";

const LoginPageAdminBackoffice = (props) => {
    useEffect(() => { });

    return (
        <body className="">


            <main className="container-fluid bg-color13">

                <div className="container ">
                    <div className="My-SignUp">


                        <div className="tb">


                            <div className="row justify-content-center gx-5">

                                <div className="col-lg-6 ">
                                </div>
                                <div className="col-lg-6 ">
                                    <br /><br />     <br /><br />
                                    <div className="f-box2">





                                        <div className="container">

                                            <div className="fm">


                                                <div className="row">


                                                    <div className="col-md-12">

                                                        <br />


                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label">อีเมล</label>
                                                            <input type="text" className="form-control" id="Fullname" placeholder="กรุณากรอก Email ของคุณ" />

                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="exampleFormControlInput1" className="form-label">รหัสผ่าน</label>
                                                            <input type="password" className="form-control" id="Fullname" placeholder="กรุณากรอกรหัสผ่านของคุณ" />
                                                            <a className="btn-resent text-start">
                                                                อีเมลหรือรหัสผ่านของคุณไม่ถูกต้อง
                                                            </a>
                                                        </div>
                                                    </div>




                                                    <div className="container ">
                                                        <div className="row justify-content-center">

                                                            <div className="col-lg-8 mt-1">

                                                                <button className="btn btn-main-next btn-block  btn-lg" type="button">เข้าสู่ระบบ</button>

                                                            </div>
                                                        </div>
                                                    </div>




                                                </div>

                                            </div>
                                            <br />




                                        </div>


                                    </div>
                                </div>


                            </div>







                        </div>
                    </div>



                </div>

            </main >
        </body >
    );
};

export default inject("example")(observer(LoginPageAdminBackoffice));
