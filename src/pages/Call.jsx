import React, { Component } from 'react'
import Calling from '../components/Calling'
import {Container,Row,Col} from 'reactstrap'
import {Link} from 'react-router-dom'

export default class Call extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="gradient">
        <center>
        <Container>
          <Row>
            <Col md="12">
              <div className="blueBorder">
                <Calling credentials={this.props.credentials}/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
            <Link to="/">
            <div className="whiteSpace ktaFont" style={{ marginTop:"50px",width:"800px"}}>
              AKHIRI SESI
            </div>
            </Link>
            </Col>
          </Row>
        </Container>
        </center>
      </div>
    )
  }
}
