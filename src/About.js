import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
// import cv from './files/Hemang_Katariya_resume.pdf'
import Layout from './Layout'


import David from "./images/portfolio02.jpg";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import img1 from './images/portfolio03.png'
import img2 from './images/portfolio04.png'
import img3 from './images/portfolio05.png'
import img4 from './images/portfolio06.png'


export default function About(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const back = () => {
        window.location.reload(true)
    }

    return (
        <div id='Home'>
            <Layout />

            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-5 col-md-5 col-sm-12 d-flex flex-row-reverse '>
                        <img src={David} className='img-fluid' style={{ widows: 'auto', height: '300px', marginRight: '50px' }}></img>
                    </div>
                    <div className='col-lg-7 col-md-7 col-sm-12 mt-5 d-flex justify-content-around flex-column' >
                        <div>
                            <h2 style={{ fontWeight: '900' }}>
                                HEMANG <span className='green' >KATARIYA</span>
                            </h2>
                            <p className='developer' style={{ marginLeft: '3px', letterSpacing: '0.5rem', fontWeight: '600' }}>Creative DEVELOPER</p>
                            <p className='font-italic text-monospace p-2 text-break' style={{ width: '400px' }}>
                                My name is Hemang Katariya. I am a Web developer. and I'm very passionate and dedicated to my work. With Hardwork and Patient
                                I have acquired the skills and knowledge.
                            </p>

                            {/* <div className='container'>
                                <div className='row'>

                                </div>
                            </div> */}

                            <>
                                <Button className='butt' onClick={handleShow}>
                                    Learn More
                                </Button>

                                <Modal show={show} onHide={handleClose} size="lg" className='text-break'>

                                    <Modal.Body>
                                        <Container>
                                            <Row style={{ marginTop: '50px', marginBottom: '20px' }}>
                                                <Col xs={12} md={4} className='d-flex justify-content-center text-center'>
                                                    <div>
                                                        <img src={David} height="118px" width="118px" style={{ borderRadius: '50%' }}></img>
                                                        <h4 style={{ fontWeight: '600', marginBottom: '40px' }}>HEMANG <span className='green'>KATARIYA</span></h4>

                                                        <div className=' mt-2 d-flex text-center  ' style={{ borderBottom: '1px dashed grey' }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 bi bi-person-fill" viewBox="0 0 16 16">
                                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" style={{ color: '#66B95C' }} />
                                                            </svg>
                                                            <p style={{ marginLeft: '20px', opacity: '0.7' }} >Hemang Katariya</p>
                                                        </div>

                                                        <div className='mt-2 d-flex text-center' style={{ borderBottom: '1px dashed grey' }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" mt-1 bi bi-calendar-day-fill" viewBox="0 0 16 16">
                                                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16v9zm-4.785-6.145a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43c0 .238.192.425.43.425zm.336.563h-.672v4.105h.672V8.418zm-6.867 4.105v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105z" style={{ color: '#66B95C' }} />
                                                            </svg>
                                                            <p style={{ marginLeft: '20px', opacity: '0.7' }} >11.04.2003</p>
                                                        </div>

                                                        <div className='mt-2 d-flex text-center' style={{ borderBottom: '1px dashed grey' }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 bi bi-globe-central-south-asia" viewBox="0 0 16 16">
                                                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.882 1.731a.482.482 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.721.721 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a.996.996 0 0 0-.462-.04 7.03 7.03 0 0 1 2.45-2.027Zm-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.78.78 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.454.454 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282a.61.61 0 0 0 .04-.001 7.003 7.003 0 0 1-12.658.905Z" style={{ color: '#66B95C' }} />
                                                            </svg>
                                                            <p style={{ marginLeft: '20px' }} className='intro d-flex text-center flex-row justify-content-start' >Surat, Gujarat, India</p>
                                                        </div>

                                                        <div className='mt-2 d-flex text-center' style={{ borderBottom: '1px dashed grey' }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 bi bi-telephone-fill" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" style={{ color: '#66B95C' }} />
                                                            </svg>
                                                            <p style={{ marginLeft: '20px' }} className='intro d-flex text-center flex-row justify-content-start' >+91 7874638438</p>
                                                        </div>

                                                        <div className='d-flex text-center mt-2 mb-o' style={{ borderBottom: '1px dashed grey' }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                                                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" style={{ color: '#66B95C' }} />
                                                                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" style={{ color: '#66B95C' }} />
                                                            </svg>
                                                            <p style={{ marginLeft: '20px' }} className='intro d-flex text-center flex-row justify-content-start' >Hemangk50@gmail.com</p>
                                                        </div>

                                                        {/* <a href={cv} download="Hemang_CV" target='_blank'>
                                                            <Button className='butt'>Download CV</Button>
                                                        </a> */}
                                                    </div>
                                                </Col>

                                                <Col xs={12} md={8} style={{ borderLeft: '1px dashed grey', marginTop: '20px' }} className='d-flex justify-content-center'>
                                                    <div>

                                                        <h5 style={{ fontWeight: '600' }}>About <span className='green'>Me</span></h5>
                                                        <p style={{ opacity: '0.7' }}> My name is Hemang Katariya. I am a Web developer.
                                                            and I'm very passionate and dedicated to my work. With Hardwork and Patient
                                                            I have acquired the skills and knowledge. </p>
                                                        <h5 style={{ marginTop: '60px', fontWeight: '600', borderBottom: '1px dashed grey', paddingBottom: '10px', marginBottom: '40px' }}>Quality <span className='green'>Services</span></h5>
                                                        <div className='d-flex'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill mt-1" viewBox="0 0 16 16">
                                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" style={{ color: '#66B95C' }} />
                                                            </svg>
                                                            <p style={{ marginLeft: '20px', opacity: '0.7' }}>Website Development</p>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill mt-1" viewBox="0 0 16 16">
                                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" style={{ color: '#66B95C' }} />
                                                            </svg>
                                                            <p style={{ marginLeft: '20px', opacity: '0.7' }}>Shared Web Hosting</p>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill mt-1" viewBox="0 0 16 16">
                                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" style={{ color: '#66B95C' }} />
                                                            </svg>
                                                            <p style={{ marginLeft: '20px', opacity: '0.7' }}>Social Media Design</p>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill mt-1" viewBox="0 0 16 16">
                                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" style={{ color: '#66B95C' }} />
                                                            </svg>
                                                            <p style={{ marginLeft: '20px', opacity: '0.7' }}>Content Marketing</p>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill mt-1" viewBox="0 0 16 16">
                                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" style={{ color: '#66B95C' }} />
                                                            </svg>
                                                            <p style={{ marginLeft: '20px', opacity: '0.7' }}>Digital Experience</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>


                                        </Container>
                                        <Container>
                                            <Row style={{ borderTop: '1px dashed grey' }}>
                                                <Col xs={12} md={8} >
                                                    <div >
                                                        <div xs={12} md={12} style={{ marginTop: '20px' }}>
                                                            <h3 style={{ fontWeight: '600' }}>Programming <span className='green'>Skills</span> </h3>
                                                            <div className='d-flex justify-content-between ' style={{ marginTop: '30px', opacity: '0.7' }}>
                                                                <p ><pre>HTML5 & CSS3  </pre></p>
                                                                <p ><pre>95%</pre></p><br></br>

                                                            </div>
                                                            <div style={{ border: '1px solid grey', borderRadius: '20px' }}>
                                                                <div style={{ border: '1px solid #66B95C ', width: '95%' }}></div>
                                                            </div>

                                                            <div className='d-flex justify-content-between' style={{ marginTop: '30px', opacity: '0.7' }}>
                                                                <p ><pre>Bootstrap     </pre></p>
                                                                <p ><pre>90%</pre></p><br></br>

                                                            </div>
                                                            <div style={{ border: '1px solid grey', borderRadius: '20px' }}>
                                                                <div style={{ border: '1px solid #66B95C ', width: '90%' }}></div>
                                                            </div>

                                                            <div className='d-flex justify-content-between' style={{ marginTop: '30px', opacity: '0.7' }}>
                                                                <p ><pre>JavaScript    </pre></p>
                                                                <p ><pre>85%</pre></p><br></br>

                                                            </div>
                                                            <div style={{ border: '1px solid grey', borderRadius: '20px' }}>
                                                                <div style={{ border: '1px solid #66B95C ', width: '85%' }}></div>
                                                            </div>

                                                            <div className='d-flex justify-content-between' style={{ marginTop: '30px', opacity: '0.7' }}>
                                                                <p ><pre>React JS      </pre></p>
                                                                <p ><pre>80%</pre></p><br></br>

                                                            </div>
                                                            <div style={{ border: '1px solid grey', borderRadius: '20px' }}>
                                                                <div style={{ border: '1px solid #66B95C ', width: '80%' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div>

                                                    </div>
                                                </Col>
                                                <Col xs={12} md={4} style={{ borderLeft: '1px dashed grey', marginTop: "20px" }}>

                                                    <div >
                                                        <h3 style={{ fontWeight: '600', marginBottom: '30px' }}>
                                                            Language <span className='green'>Skills</span>
                                                        </h3>


                                                        <div className='d-flex'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 bi bi-chevron-double-right" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" style={{ color: '#66B95C' }} />
                                                                <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" style={{ color: '#66B95C' }} />
                                                            </svg>
                                                            <p className='intro' style={{ marginLeft: '20px', opacity: '0.7' }}> English</p>
                                                        </div>

                                                        <div className='d-flex'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 bi bi-chevron-double-right" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" style={{ color: '#66B95C' }} />
                                                                <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" style={{ color: '#66B95C' }} />
                                                            </svg>
                                                            <p className='intro' style={{ marginLeft: '20px', opacity: '0.7' }}> Hindi</p>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 bi bi-chevron-double-right" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" style={{ color: '#66B95C' }} />
                                                                <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" style={{ color: '#66B95C' }} />
                                                            </svg>
                                                            <p className='intro' style={{ marginLeft: '20px', opacity: '0.7' }}> Gujarati</p>
                                                        </div>

                                                        <div style={{ borderTop: '1px dashed grey' }}><h5 style={{ fontWeight: '600', marginTop: '10px' }}>
                                                            My<span className='green'> Partners
                                                            </span>
                                                        </h5>

                                                            <img src={img1} style={{ opacity: '0.7', margin: '10px' }} ></img>
                                                            <img src={img2} style={{ opacity: '0.7', margin: '10px' }} ></img>
                                                            <img src={img3} style={{ opacity: '0.7', margin: '10px' }} ></img>
                                                            <img src={img4} style={{ opacity: '0.7', margin: '10px' }} ></img>
                                                        </div>
                                                    </div>
                                                </Col>

                                            </Row>
                                        </Container>
                                        <Container>
                                            <Row style={{ marginTop: '30px', borderTop: '1px dashed grey' }}>
                                                <h3 style={{ fontWeight: '600', marginTop: '20px', marginBottom: '20px' }}>Education <span className='green'>Timeline</span></h3>
                                                <Col xs={12} md={6}>


                                                    <div className='d-flex'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" style={{ color: '#66B95C' }} />
                                                        </svg>
                                                        <div>
                                                            <p style={{ marginLeft: '20px' }}>SSC</p>
                                                            <p style={{
                                                                marginLeft: '20px', opacity: '0.7', marginTop: '0',
                                                                fontSize: '0.9rem'
                                                            }}>GSEB <br></br>March 2018 </p>
                                                        </div>


                                                    </div>

                                                    <div className='d-flex'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" style={{ color: '#66B95C' }} />
                                                        </svg>
                                                        <div>
                                                            <p style={{ marginLeft: '20px' }}>HSC</p>
                                                            <p style={{
                                                                marginLeft: '20px', opacity: '0.7', marginTop: '0',
                                                                fontSize: '0.9rem'
                                                            }}>GSEB <br></br>March 2020 </p>
                                                        </div>


                                                    </div>
                                                </Col>



                                                <Col xs={12} md={6}>


                                                    <div className='d-flex'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" style={{ color: '#66B95C' }} />
                                                        </svg>
                                                        <div>
                                                            <p style={{ marginLeft: '20px' }}>Bachelor of Commerce</p>
                                                            <p style={{
                                                                marginLeft: '20px', opacity: '0.7', marginTop: '0',
                                                                fontSize: '0.9rem'
                                                            }}>Veer Narmad South Gujarat University <br></br>May 2023 </p>
                                                        </div>


                                                    </div>

                                                    <div className='d-flex'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" style={{ color: '#66B95C' }} />
                                                        </svg>
                                                        <div>
                                                            <p style={{ marginLeft: '20px' }}>Web Developer</p>
                                                            <p style={{
                                                                marginLeft: '20px', opacity: '0.7', marginTop: '0',
                                                                fontSize: '0.9rem'
                                                            }}>Decode Softtech <br></br>From August 2022...  </p>
                                                        </div>


                                                    </div>
                                                    <button className='butt d-flex justify-content-center align-items-center text-center' onClick={back}>BACK</button>
                                                </Col>

                                            </Row>

                                        </Container>

                                    </Modal.Body>

                                </Modal>
                            </>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    )
}
