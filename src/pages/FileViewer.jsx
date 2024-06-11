import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Layout/Header';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

const FileViewer = () => {
    const navigate = useNavigate();
    const [pdfUrl, setPdfUrl] = useState('assets/files/Sample-pdf.pdf');
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <>
            <Header />
            <section className='section-padding'>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className='mb-5'>
                                <button className='go-back-btn' onClick={handleGoBack}>
                                    <i className='bi bi-arrow-left me-2'></i>
                                    Go Back
                                </button>
                            </div>
                            <Worker workerUrl={pdfjsWorker}>
                                <Viewer
                                    fileUrl={pdfUrl}
                                    plugins={[defaultLayoutPluginInstance]}
                                />
                            </Worker>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default FileViewer;