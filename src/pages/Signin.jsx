import React, { useEffect, useState, useRef } from 'react';
import Header from '../Layout/Header';

const Signin = () => {
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
                                <img src="assets/images/signin.svg" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-xl-6">
                            <div className="card pt-5 pb-5 ps-4 pe-4 ps-sm-5 pe-sm-5 custom-card">
                                <h4 className='text-primary text-center '><b>SIGN IN</b></h4>

                                <form action="" className='mt-5'>
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
                                        <p>Don't have an account? <a href="/sign-up"><b>Signup</b></a></p>
                                    </div>

                                    <div className="text-center">
                                        <button className='btn btn-primary btn-lg btn-block text-uppercase btn-font'>Login</button>
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

export default Signin;