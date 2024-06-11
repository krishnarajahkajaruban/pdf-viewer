import React, { useEffect, useState, useRef } from 'react';

const Header = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary pt-3 pb-3">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`} href="/"><b>Upload</b></a>
                            </li>
                            <li class="nav-item">
                                <a class={`nav-link ${window.location.pathname === '/files' ? 'active' : ''}`} href="/files"><b>Files</b></a>
                            </li>
                        </ul>

                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <a class="btn btn-outline-primary me-3" aria-current="page" href="/sign-up">Signup</a>
                            </li>
                            <li class="nav-item">
                                <a class="btn btn-primary" aria-current="page" href="/sign-in">Signin</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;