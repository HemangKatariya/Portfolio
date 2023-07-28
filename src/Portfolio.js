// import React from 'react';
import Container from 'react-bootstrap/Container';
import Layout from './Layout'

import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';


import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import img1 from "./images/portfolio11.jpg";
import img2 from "./images/portfolio15.jpg";
import img3 from "./images/portfolio16.jpg";
import img4 from "./images/portfolio17.jpg";
import img5 from "./images/portfolio18.jpg";
import img6 from "./images/portfolio19.jpg";
import img7 from "./images/portfolio12.jpg";





export default function Portfolio() {
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [show5, setShow5] = useState(false);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const [show6, setShow6] = useState(false);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);


  const back = () => {
    window.location.reload(true)
  }
  return (
    <>
      <div className="home">
        <Layout />



      </div >


      <Container >
        <Row >
          <Col xs={12} md={4} className='d-flex justify-content-center '>
            <img src={img1} className='  mt-5' height='200px' width='250px' onClick={handleShow1} style={{ borderRadius: '50px' }}></img>

          </Col>
          <Col xs={12} md={4} className='d-flex justify-content-center '>
            <img src={img2} className='  mt-5' height='200px' width='210px' onClick={handleShow2} style={{ borderRadius: '50px' }}></img>
          </Col>
          <Col xs={12} md={4} className='d-flex justify-content-center '>
            <img src={img3} className='  mt-5  mb-3' height='300px' width='250px' onClick={handleShow3} style={{ borderRadius: '50px' }}></img>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col xs={12} md={4} className='d-flex justify-content-center '>
            <img src={img4} className='  mb-5   abcd' height='300px' width='250px' onClick={handleShow4} style={{ marginBottom: '-3rem', borderRadius: '50px' }}></img>
          </Col>
          <Col xs={12} md={4} className='d-flex justify-content-center '>

            <img src={img5} className='  mt-5    abcd2' height='300px' width='250px' onClick={handleShow5} style={{ borderRadius: '50px' }}></img>
          </Col>
          <Col xs={12} md={4} className='d-flex justify-content-center '>
            <img src={img6} className='   mt-5 ' height='200px' width='210px' onClick={handleShow6} style={{ borderRadius: '50px' }}></img>
          </Col>
        </Row>
      </Container>


      <div>
        <Modal show={show1} onHide={handleClose1} size="md" class="mt-5  modal-dialog modal-dialog-centered modal-dialog-scrollable text-break bg-dark">
          <img src={img1} style={{ borderRadius: '50px', backgroundColor: 'black' }}></img>
          <h2 style={{ marginTop: '20px' }}>Delicious Apple</h2>
          <p style={{ fontSize: '1rem', opacity: '0.7' }}>Detail</p>
          <p style={{ marginTop: '30px', fontSize: '0.8rem', opacity: '0.7' }}>An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.</p>
          <p style={{ marginTop: '30px', fontSize: '0.8rem', opacity: '0.7' }}>
            Apples grown from seed tend to be very different from those of the parents, and the resultant fruit frequently lack desired characteristics. Generally then, apple cultivars are propagated by clonal grafting onto rootstocks. Apple trees grown without rootstocks tend to be larger and much slower to fruit after planting.
          </p>
          <img src={img7} style={{ borderRadius: '50px', marginTop: '20px', height: '250px', width: 'auto' }}></img>
          <div className='d-flex justify-content-center'>
            <button className='butt d-flex justify-content-center align-items-center text-center' onClick={back}>BACK</button>

          </div>
        </Modal>

        <Modal show={show2} onHide={handleClose2} size="lg" className='text-break '>
          <iframe width="727" height="409" src="https://www.youtube.com/embed/7e90gBu4pas" title="Working at Envato" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className='d-flex justify-content-center'>
            <button className='butt d-flex justify-content-center align-items-center text-center' onClick={back}>BACK</button>

          </div>
        </Modal>

        <Modal show={show3} onHide={handleClose3} size="lg" className='text-break'>
          <iframe className='col-lg-12 col-md-12 col-sm-12' width="727" height="409" src="https://www.youtube.com/embed/7e90gBu4pas" title="Working at Envato" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className='d-flex justify-content-center'>
            <button className='butt d-flex justify-content-center align-items-center text-center' onClick={back}>BACK</button>

          </div>
        </Modal>

        <Modal show={show4} onHide={handleClose4} size="lg" className='text-break d-flex justify-content-center pt-5  '>
          <h2 style={{ opacity: '0.7' }}>
            Mockup Cream
          </h2>
          <p style={{ opacity: '0.7' }}>Image</p>
          <img src={img4} height='300px' width='300px' style={{ borderRadius: '20px' }}></img>
        </Modal>

        <Modal show={show5} onHide={handleClose5} size="lg" className='text-break d-flex justify-content-center pt-5  '>
          <h2 style={{ opacity: '0.7' }}>
            Blue Lemon
          </h2>
          <p style={{ opacity: '0.7' }}>Image</p>
          <img src={img5} height='300px' width='300px' style={{ borderRadius: '20px' }}></img>
        </Modal>

        <Modal show={show6} onHide={handleClose6} size="lg" className='text-break d-flex justify-content-center pt-5  '>
          <h2 style={{ opacity: '0.7' }}>
            Sweet Chee  ry
          </h2>
          <p style={{ opacity: '0.7' }}>Image</p>
          <img src={img6} height='300px' width='300px' style={{ borderRadius: '20px' }}></img>
        </Modal>
      </div>


    </>

  );
}
