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
            <Col>
              <div className="blueBorder">
                <Calling credentials={this.props.credentials}/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
            <Link to="/">
            <div className="whiteSpace ktaFont" style={{marginBottom:"80px",marginTop:"50px"}}>
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
