import {Container, Row, Col} from "react-bootstrap";

const Img = () => {
    return(
        <>
        <Container>
            <Row>
                <Col md={4}>
                    <img src="../img/paris.jpg" alt="이미지입니다" className="rounded"/>
                    <p>▲ rounded</p>
                </Col>
                <Col md={4}>
                    <img src="../img/paris.jpg" alt="이미지입니다" className="rounded-circle"/>
                    <p>▲ rounded-circle</p>
                </Col>
                <Col md={4}>
                    <img src="../img/paris.jpg" alt="이미지입니다" className="rounded-thumbnail"/>
                    <p>▲ rounded-thumbnail</p>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Img;