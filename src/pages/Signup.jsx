import React, { useEffect, useState, useRef } from 'react';
import Header from '../Layout/Header';

const Signup = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <Header />

            <section className='section-padding'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-6 my-auto">
                            <div className='img-area'>
                                <img src="assets/images/signup.svg" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-xl-6">
                            <div className="card pt-5 pb-5 ps-4 pe-4 ps-sm-5 pe-sm-5 custom-card">
                                <h4 className='text-primary text-center'><b>CREATE YOUR ACCOUNT</b></h4>

                                <form action="" className='mt-5'>
                                    <div class="input-group mb-4">
                                        <span class="input-group-text">
                                            <i className='bi bi-person-fill'></i>
                                        </span>
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="userName" placeholder="Username" />
                                            <label for="userName">Username</label>
                                        </div>
                                    </div>

                                    <div class="input-group mb-4">
                                        <span class="input-group-text">
                                            <i className='bi bi-envelope-fill'></i>
                                        </span>
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Email" />
                                            <label for="email">Email</label>
                                        </div>
                                    </div>

                                    <div class="input-group mb-4">
                                        <span class="input-group-text">
                                            <i className='bi bi-lock-fill'></i>
                                        </span>
                                        <div class="form-floating">
                                            <input type={passwordVisible ? 'text' : 'password'} class="form-control" id="password" placeholder="Password" />
                                            <label for="password">Password</label>
                                            <i className={`bi ${passwordVisible ? ' bi-eye-fill' : ' bi-eye-slash-fill'} toggle-pwd`} onClick={togglePasswordVisibility}></i>
                                        </div>
                                    </div>

                                    <div className='text-center mt-4 mb-4'>
                                        <p>Already have an account? <a href="/sign-in"><b>Signin</b></a></p>
                                    </div>

                                    <div className="text-center">
                                        <button className='btn btn-primary btn-lg text-uppercase btn-font'>Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;