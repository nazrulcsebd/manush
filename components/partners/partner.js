import react from "react";
import { Row, Col, Image } from "react-bootstrap";

const Partner = () => {
    return (
        <>
            <Row>
                <Col xs={12} md={12} lg={12} style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <h6 style={{ color: "#8B8B8B", textAlign: "center" }}>Our Partners</h6>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
                    &nbsp;&nbsp;<Image src="/static/images/Biddanando.png" thumbnail style={{ height: "100px", marginTop: "3px", marginBottom: "3px" }} />
                    &nbsp;&nbsp;
                    <Image src="/static/images/bylc.png" thumbnail style={{ height: "100px", marginTop: "3px", marginBottom: "3px" }} />
                </Col>
            </Row>
        </>
    );
}

export default Partner;