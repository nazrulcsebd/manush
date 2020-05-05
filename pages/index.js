import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import PageDetails from "../components/details/pageDetails";
import Partner from "../components/partners/partner";

import HeatMaps from "../components/googleMap/HeatMaps";
//import HeatMaps from "../components/googleMap/GoogleMaps";

const Home = (props) => (
  <Container fluid style={{ backgroundColor: "#F9F9F9" }}>
    <Row>
      <Col xs={12} md={12} lg={12}>
        <Header />
      </Col>
    </Row>

    <Row>
      <Col>

        <Row>
          <Col xs={12} sm={12} md={8} lg={8} style={{ height: "50vh" }}>
            <HeatMaps />
          </Col>
          <Col xs={12} md={4} lg={4}>
            <PageDetails />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12} lg={12}>
            <Partner />
          </Col>
        </Row>

      </Col>
    </Row>


    <Row>
      <Col xs={12} md={12} lg={12}>
        <Footer />
      </Col>
    </Row>
  </Container>
)

export default Home
