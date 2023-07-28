import React from 'react'
import Container from 'react-bootstrap/Container';
import Layout from './Layout'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Home() {

  const submit = () => {

    window.location.reload(true)
  }

  return (
    <div id='Home' className='overflow-hidden'>
      <Layout />


      <Container className='container'>

        <Row>
          <Col xs={12} md={5} className='d-flex justify-content-center'>
            <div >

              <h2 className='mt-4 mb-5' style={{ fontWeight: '900' }}>
                Get in <span className='green'>Touch</span>
              </h2>


              <div className='mt-4 d-flex text-center' >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1 bi bi-globe-central-south-asia" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.882 1.731a.482.482 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.721.721 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a.996.996 0 0 0-.462-.04 7.03 7.03 0 0 1 2.45-2.027Zm-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.78.78 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.454.454 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282a.61.61 0 0 0 .04-.001 7.003 7.003 0 0 1-12.658.905Z" style={{ color: '#66B95C' }} />
                </svg>
                <a style={{ marginLeft: '20px' }} className='intro d-flex text-center flex-row justify-content-start' href="https://goo.gl/maps/EKTnaF1HJN6n4vSo8">Surat, Gujarat, India</a>
              </div>

              <div className='mt-4 d-flex text-center' >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1 bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" style={{ color: '#66B95C' }} />
                </svg>
                <a style={{ marginLeft: '20px' }} className='intro d-flex text-center flex-row justify-content-start' href="tel:7874638438">+91 7874638438</a>
              </div>

              <div className='d-flex text-center mt-4 mb-o' >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1 bi bi-envelope-at-fill" viewBox="0 0 16 16">
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" style={{ color: '#66B95C' }} />
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" style={{ color: '#66B95C' }} />
                </svg>
                <a style={{ marginLeft: '20px' }} className='intro d-flex text-center flex-row justify-content-start' href="mailto:hemangk50@gmail.com">hemangk50@gmail.com</a>
              </div>

              <div className='d-flex text-center mt-4 mb-o' >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" style={{ color: '#66B95C' }} />
                </svg>
                <a style={{ marginLeft: '20px' }} className='intro d-flex text-center flex-row justify-content-start' href="https://www.linkedin.com/in/hemang-katariya-7483a824a">Hemang Katariya</a>
              </div>

            </div>
          </Col>
          <Col xs={12} md={7} >
            <div className='mt-5 d-flex justify-content-center text-center' style={{ marginLeft: '40px' }}>
              <div>
                <div className='mt-5 d-flex text-center'>
                  <input type='text' placeholder='Name' required id='text'></input>

                </div>
                <div className='mt-5 d-flex text-center'>

                  <input type='email' placeholder='Email' required id='email'></input>
                </div>
                <div className='mt-5 d-flex text-center'>
                  <input type='text' placeholder='Message' required id='message'></input>

                </div>
                <div className='mt-5 mb-3 d-flex justify-content-center text-center'>
                  <button className='butt' onClick={submit}>SUBMIT</button>
                </div>

              </div>
            </div>


          </Col>
        </Row>
      </Container>
    </div>
  )
}

