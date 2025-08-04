import {Container, Row, Col} from "react-bootstrap";

const Flex = () => {
    return(
        <>
        <Container fluid>
            <Row><Col><h1 className="text-center">크기 성장 수축</h1></Col></Row>
            <Row className="text-center">
                <Col md={4}>
                    <h3>Equals Widths</h3>
                    <div className="d-flex bg-dark text-white">
                        <div className="p-2 bg-success flex-fill">One</div>
                        <div className="p-2 bg-warning flex-fill">Two</div>
                        <div className="p-2 bg-danger flex-fill">Three</div>
                    </div>
                </Col>
                <Col md={4}>
                    <h3>Flex-grow-1</h3>
                    <div className="d-flex bg-dark text-white">
                        <div className="p-2 bg-success">One</div>
                        <div className="p-2 bg-warning">Two</div>
                        <div className="p-2 bg-danger flex-grow-1">Three</div>
                    </div>
                </Col>
                <Col md={4}>
                    <h3>Order(숫자가 낮은 것이 내림차순)</h3>
                    <div className="d-flex bg-dark text-white">
                        <div className="--2 bg-success order-3">Three</div>
                        <div className="--2 bg-warning order-2">Two</div>
                        <div className="--2 bg-danger order-1">One</div>
                    </div>
                </Col>
            </Row>

            <hr className="my-5"/>

            <Row><Col><h1 className="text-center">콘텐츠 정당화</h1></Col></Row>
            <Row className="text-center my-5">
                <Col md={4}>
                    <h3>Justify-content-start</h3>
                    <div className="d-flex justify-content-start bg-dark text-white">
                        <div className="p-2 bg-success">Flex item #1</div>
                        <div className="p-2 bg-warning">Flex item #2</div>
                        <div className="p-2 bg-danger">Flex item #3</div>
                    </div>
                </Col>
                <Col md={4}>
                    <h3>Justify-content-end</h3>
                    <div className="d-flex justify-content-end bg-dark text-white">
                        <div className="p-2 bg-success">Flex item #1</div>
                        <div className="p-2 bg-warning">Flex item #2</div>
                        <div className="p-2 bg-danger">Flex item #3</div>
                    </div>
                </Col>
                <Col md={4}>
                    <h3>Justify-content-center</h3>
                    <div className="d-flex justify-content-center bg-dark text-white">
                        <div className="p-2 bg-success">Flex item #1</div>
                        <div className="p-2 bg-warning">Flex item #2</div>
                        <div className="p-2 bg-danger">Flex item #3</div>
                    </div>
                </Col>
            </Row>
            <Row className="text-center my-5">
                <Col md={6}>
                    <h3>Justify-content-between</h3>
                    <div className="d-flex justify-content-between bg-dark text-white">
                        <div className="p-2 bg-success">Flex item #1</div>
                        <div className="p-2 bg-warning">Flex item #2</div>
                        <div className="p-2 bg-danger">Flex item #3</div>
                    </div>
                </Col>
                <Col md={6}>
                    <h3>Justify-content-around</h3>
                    <div className="d-flex justify-content-around bg-dark text-white">
                        <div className="p-2 bg-success">Flex item #1</div>
                        <div className="p-2 bg-warning">Flex item #2</div>
                        <div className="p-2 bg-danger">Flex item #3</div>
                    </div>
                </Col>
                <Col md={4}>
                    <h3></h3>
                </Col>
            </Row>

            <hr className="my-5"/>

            <Row className="text-center">
                <Col md={4}>
                    <h3>Row-reverse</h3>
                    <div className="d-flex flex-row-reverse bg-dark text-white">
                        <div className="p-2 bg-success">Flex item #1</div>
                        <div className="p-2 bg-warning">Flex item #2</div>
                        <div className="p-2 bg-danger">Flex item #3</div>
                    </div>
                </Col>
                <Col md={4}>
                    <h3>Flex-column(내림차순)</h3>
                    <div className="d-flex flex-column p-3 bg-dark text-white">
                        <div className="p-2 bg-success">Flex item #1</div>
                        <div className="p-2 bg-warning">Flex item #2</div>
                        <div className="p-2 bg-danger">Flex item #3</div>
                    </div>
                </Col>
                <Col md={4}>
                    <h3>Column-reverse(오름차순)</h3>
                    <div className="d-flex flex-column-reverse p-3 bg-dark text-white">
                        <div className="p-2 bg-success">Flex item #1</div>
                        <div className="p-2 bg-warning">Flex item #2</div>
                        <div className="p-2 bg-danger">Flex item #3</div>
                    </div>
                </Col>
            </Row>

            <hr className="my-5"/>

            <Row className="text-center">
                <Col md={4}>
                    <h3>Basic</h3>
                    <div className="d-flex p-3 bg-dark text-white">
                        <div className="p-2 bg-success">Flex item #1</div>
                        <div className="p-2 bg-warning">Flex item #2</div>
                        <div className="p-2 bg-danger">Flex item #3</div>
                    </div>
                </Col>
                <Col md={4}>
                    <h3>Inline-flex</h3>
                    <div className="d-inline-flex p-3 bg-dark text-white">
                        <div className="p-2 bg-success">Flex item #1</div>
                        <div className="p-2 bg-warning">Flex item #2</div>
                        <div className="p-2 bg-danger">Flex item #3</div>
                    </div>
                </Col>
                <Col md={4}>
                    <h3>Flex-row</h3>
                    <div className="d-flex flex-row bg-dark text-white">
                        <div className="p-2 bg-success">Flex item #1</div>
                        <div className="p-2 bg-warning">Flex item #2</div>
                        <div className="p-2 bg-danger">Flex item #3</div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Flex;