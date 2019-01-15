import React, { Component } from 'react'
import {Container,Row,Col} from 'reactstrap'
import {Link} from 'react-router-dom'


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
            KLINIK KTA
          </div>
          </Col>
          <Col>
          <div className="whiteSpace">
            KLINIK KTA
          </div>
          </Col>
        </Row>
        </Container>
        </center>
      </div >
    )
  }
}
