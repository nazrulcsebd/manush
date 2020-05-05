import react from "react";
import { Row, Col } from "react-bootstrap";
import EmergencyContract from "./emergencyContract";


const PageDetails = () => {
    return (
        <Row>
            <Col xs={12} md={12} lg={12}>
                <h5 style={{ color: "#0E9FD5" }}>Lorem ipsum is simple dummy</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    <EmergencyContract />
                </p>
            </Col>
        </Row>
    );
}

export default PageDetails;