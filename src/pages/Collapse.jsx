import {Container, Row, Col} from "react-bootstrap";

const Collapse = () => {
    return(
        <>
        <Container>
            <Row className="text-center">
                <Col md={3}>
                    <h3>Accordion</h3>
                    <div className="" id="accordion">
                        <div className="card mb-3">
                            <div className="card-header">
                                <a className="btn" data-bs-toggle="collapse" href="#collapseOne">병아리</a>
                            </div>
                            <div id="collapseOne" className="collapse show" data-bs-paraent="#accordion">
                                <div className="card-body">삐약삐약!</div>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="card-header">
                                <a className="collapsed btn" data-bs-toggle="collapse" href="#two">고양이</a>
                            </div>
                            <div className="collapse" data-bs-parent="#accordion" id="two">
                                <div className="card-body">야옹야옹!</div>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={3}>
                    <h3>Basic</h3>
                    <button data-bs-toggle="collapse" data-bs-target="#demo" className="btn btn-dark">Push Me!</button>
                    <div className="collapse" id="demo">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, soluta?
                    </div>
                </Col>

                <Col md={3}>
                    <h3></h3>
                </Col>

                <Col md={3}>
                    <h3></h3>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Collapse;