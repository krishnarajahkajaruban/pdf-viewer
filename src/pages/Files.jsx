import React, { useEffect, useState, useRef } from 'react';
import Header from '../Layout/Header';
import Swal from 'sweetalert2';
import { Dropdown } from 'primereact/dropdown';
import { FloatLabel } from 'primereact/floatlabel';

const Files = () => {

    const [selectedUser, setSelectedUser] = useState(null);
    const users = [
        { name: 'User 1' },
        { name: 'User 2' },
        { name: 'User 3' },
        { name: 'User 4' },
        { name: 'User 5' }
    ];

    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { name: 'Option 1' },
        { name: 'Option 2' },
        { name: 'Option 3' },
        { name: 'Option 4' },
        { name: 'Option 5' },
        { name: 'Option 6' },
        { name: 'Option 7' },
        { name: 'Option 8' },
    ];

    const selectedOptionTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const optionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <div>{option.name}</div>
            </div>
        );
    };

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to delete this file?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
            }
        });
    };

    return (
        <>
            <Header />
            <section className='section-padding'>
                <div className="container">
                    <div className="page-header-area">
                        <div className="row">
                            <div className="col-12 col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-4 mb-lg-0">
                                <h4 className='text-primary mb-0'><b>Files</b></h4>
                            </div>
                            <div className="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-4 mb-sm-0">
                                <FloatLabel className="w-full">
                                    <Dropdown inputId="selectUser" value={selectedUser} onChange={(e) => setSelectedUser(e.value)} options={users} optionLabel="name" placeholder='Select' className="w-full w-100" />
                                    <label htmlFor="selectUser">Select User</label>
                                </FloatLabel>
                            </div>
                            <div className="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <FloatLabel className="w-full h-100">
                                    <Dropdown inputId="selectOption" value={selectedOption} onChange={(e) => setSelectedOption(e.value)} options={options} optionLabel="name" placeholder='Select'
                                        filter valueTemplate={selectedOptionTemplate} itemTemplate={optionTemplate} className="w-full w-100 h-100" />
                                    <label htmlFor="selectOption">Select</label>
                                </FloatLabel>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card custom-card file-view-area p-3">
                                <div className="card-body pt-0 pb-4 pe-0 ps-0">
                                    <div className="row files-show-area">
                                        {/* map files here */}
                                        <div className="col-12 col-xl-4 col-md-6 col-sm-6">
                                            <article className='file-item'>
                                                <img src="assets/images/pdf-file.png" alt="" />
                                                <div className='file-detail'>
                                                    <h6 className='file_name'>Sample pdf file</h6>
                                                    <p className='upload_date'>10-06-2024</p>
                                                    <p className='file_size'>197.35 KB</p>
                                                </div>
                                                <button className='file-action-button'
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu file-action-menu">
                                                    <li>
                                                        <a class="dropdown-item text-dark mb-1" href="/file-view">
                                                            <i className='bi bi-eye-fill me-3'></i>
                                                            View
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item text-danger" href="#" onClick={handleDelete}>
                                                            <i className='bi bi-trash-fill me-3'></i>
                                                            Delete
                                                        </a>
                                                    </li>
                                                </ul>
                                            </article>
                                        </div>

                                        <div className="col-12 col-xl-4 col-md-6 col-sm-6">
                                            <article className='file-item'>
                                                <img src="assets/images/pdf-file.png" alt="" />
                                                <div className='file-detail'>
                                                    <h6 className='file_name'>Sample pdf file</h6>
                                                    <p className='upload_date'>10-06-2024</p>
                                                    <p className='file_size'>197.35 KB</p>
                                                </div>
                                                <button className='file-action-button'
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu file-action-menu">
                                                    <li>
                                                        <a class="dropdown-item text-dark mb-1" href="/file-view">
                                                            <i className='bi bi-eye-fill me-3'></i>
                                                            View
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item text-danger" href="#" onClick={handleDelete}>
                                                            <i className='bi bi-trash-fill me-3'></i>
                                                            Delete
                                                        </a>
                                                    </li>
                                                </ul>
                                            </article>
                                        </div>
                                        {/*  */}


                                    </div>
                                </div>
                                <div className="card-footer d-flex align-items-center justify-content-between p-3">
                                    <div className="file-count">
                                        <h6 className='mb-1 text-dark'>Total files : 50</h6>
                                        <p className='mb-0'>Page : 1 of 10</p>
                                    </div>
                                    <nav aria-label="...">
                                        <ul class="pagination mb-0">
                                            <li class="page-item disabled">
                                                <a class="page-link">Previous</a>
                                            </li>
                                            <li class="page-item active" aria-current="page">
                                                <a class="page-link" href="#">1</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">2</a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Files;