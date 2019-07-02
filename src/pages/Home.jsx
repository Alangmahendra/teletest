import React, { Component } from 'react'
import {Container,Row,Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import kcpm from '../Logo-KCPM.png'
import logo from '../Logo.png'
// d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(35,250,250)"

export default class Home extends Component {
  render() {
    return (
      <div className="gradient">
      <center>
      <Container>
        <Row>
          <Col md="12">
            <div className="yellowButton">
            <Link to="/call">
            <svg viewBox="75 75 350 350">
              {/* <path id="curve" fill="transparent" d="M250,400
                a150,150 0 0,1 0,-350a150" transform="rotate(90,250,250)"/> */}
                <path id="circle" fill="transparent"  d="M250,400
                  a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(129,250,250)"/>
              <text className="ctx" width="500">
                <textPath href="#circle">
                  KONSULTASI DOKTER
                </textPath>
              </text>
            </svg>
              <div className="logz">
                <img src={logo} alt="logo"/>
              </div>
            </Link>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div>
              <Row>
              <Col>
                <img src={kcpm} alt="logo kcpm" className="logoKcpm"/>
              </Col>
              </Row>
          </div>
          </Col>
        </Row>
        </Container>
        </center>
      </div >
    )
  }
}
