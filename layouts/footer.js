import react from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <Row>
            <Col xs={12} md={12} lg={12}
                style={{
                    backgroundColor: "#0E9FD5",
                    // position: "fixed"
                }}>

                <div
                    style={{
                        paddingTop: "11px"
                    }}
                >
                    &nbsp;&nbsp;
                </div>
            </Col>
        </Row>
    );
}

export default Footer;