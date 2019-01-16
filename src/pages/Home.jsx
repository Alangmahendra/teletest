import React, { Component } from 'react'
import {Container,Row,Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import kta from '../kta-logo.jpeg'
// d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(35,250,250)"

export default class Home extends Component {
  render() {
    return (
      <div className="gradient">
      <center>
      <Container>
        <Row>
          <Col>
            <div className="yellowButton">
            <Link to="/call">
            <svg viewBox="75 50 400 400">
              <path id="curve" fill="transparent" d="M250,400
                a150,150 0 0,1 0,-350a150" transform="rotate(90,250,250)"/>
              <text className="ctx" width="500">
                <textPath href="#curve">
                  TEKAN UNTUK KONSULTASI DOKTER UMUM
                </textPath>
              </text>
            </svg>
            </Link>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className="whiteSpace">
              <Row>
              <Col>
                <img src={kta} alt="logo"/>
              </Col>
              <Col>
                    <Row>
                    <div className="ktaFont kiri">KLINIK KTA</div> 
                    </Row>
                    <Row>
                      <div className="ktaFont2 kiri2">SRENGSENG JUNCTION</div>
                    </Row>
              </Col>
              </Row>
          </div>
          </Col>
          <Col>
          <div className="whiteSpace practech">
            PRACTECH
          </div>
          </Col>
        </Row>
        </Container>
        </center>
      </div >
    )
  }
}
