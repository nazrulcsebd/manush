import react from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {

    return (
        <Row>
            <Col xs={12} md={12} lg={12} style={{
                height: "160px", width: "100vw",
                top: "0", left: "0", padding: "0",
                marginBottom: "12px"
            }}>
                <img
                    src="/static/images/topBanner.png"
                    style={{ width: "100vw", height: "100%" }}
                    alt="Manush"
                />
            </Col>
        </Row>
    )
}

export default Header;