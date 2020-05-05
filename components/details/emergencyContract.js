import react from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

const EmergencyContract = () => {
    return (
        <>
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <h6 style={{ color: "#8B8B8B" }}>Emergency Phones</h6>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6} lg={6}>
                    <p>
                        <FontAwesomeIcon icon={faPhoneSquare} style={{ color: "#0E9FD5" }} /> +880 19838 27821
                    </p>
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <p>
                        <FontAwesomeIcon icon={faPhoneSquare} style={{ color: "#0E9FD5" }} /> +880 19838 27831
                    </p>
                </Col>
            </Row>
        </>
    );
}

export default EmergencyContract;