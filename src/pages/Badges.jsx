import {Container, Row, Col} from "react-bootstrap";

const Badges = () => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                <h1>Badges</h1>
                <span className="badge bg-rounded-pill bg-primary">bg-primary</span><br/>
                <span className="badge bg-rounded-pill bg-secondary">bg-secondary</span><br/>
                <span className="badge bg-rounded-pill bg-success">bg-success</span><br/>
                <span className="badge bg-rounded-pill bg-danger">bg-danger</span><br/>
                <span className="badge bg-rounded-pill bg-warning">bg-warning</span><br/>
                <span className="badge bg-rounded-pill bg-info">bg-info</span><br/>
                <span className="badge bg-rounded-pill bg-dark">bg-dark</span><br/>
                <span className="badge bg-rounded-pill bg-light text-dark">bg-light</span><br/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <button className="btn btn-primary">
                        Messages &nbsp;
                        <span className="badge bg-danger bg-rounded-pill">999+</span>
                    </button>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Badges;