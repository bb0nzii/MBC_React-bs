import {Container, Row, Col} from "react-bootstrap";

const Btn = () => {
    return(
        <>
        <Container>
            <Row>
                <Col md={3}>
                    <h1 className="my-5">일반버튼</h1>
                    <button className="btn">btn</button><br/>
                    <button className="btn btn-primary">btn-primary</button><br/>
                    <button className="btn btn-secondary">btn-secondary</button><br/>
                    <button className="btn btn-success">btn-success</button><br/>
                    <button className="btn btn-info">btn-info</button><br/>
                    <button className="btn btn-warning">btn-warning</button><br/>
                    <button className="btn btn-danger">btn-danger</button><br/>
                    <button className="btn btn-dark">btn-dark</button><br/>
                    <button className="btn btn-light">btn-light</button><br/>
                    <button className="btn btn-link">btn-link</button><br/>
                </Col>
                <Col md={3}>
                    <h1 className="my-5">테두리버튼</h1>
                    <button className="btn">btn</button><br/>
                    <button className="btn btn-outline-primary">btn-primary</button><br/>
                    <button className="btn btn-outline-secondary">btn-secondary</button><br/>
                    <button className="btn btn-outline-success">btn-success</button><br/>
                    <button className="btn btn-outline-info">btn-info</button><br/>
                    <button className="btn btn-outline-warning">btn-warning</button><br/>
                    <button className="btn btn-outline-danger">btn-danger</button><br/>
                    <button className="btn btn-outline-dark">btn-dark</button><br/>
                    <button className="btn btn-outline-light text-dark">btn-light</button><br/>
                    <button className="btn btn-outline-link">btn-link</button><br/>
                </Col>
                <Col md={3}>
                    <h1 className="my-5">블록버튼</h1>
                    <div className="d-grid">
                        <button className="btn">btn</button><br/>
                        <button className="btn btn-primary btn-block">btn-primary</button><br/>
                        <button className="btn btn-secondary btn-block">btn-secondary</button><br/>
                        <button className="btn btn-success btn-block">btn-success</button><br/>
                        <button className="btn btn-info btn-block">btn-info</button><br/>
                        <button className="btn btn-warning btn-block">btn-warning</button><br/>
                        <button className="btn btn-danger btn-block">btn-danger</button><br/>
                        <button className="btn btn-dark btn-block">btn-dark</button><br/>
                        <button className="btn btn-light btn-block">btn-light</button><br/>
                        <button className="btn btn-link btn-block">btn-link</button><br/>
                    </div>
                </Col>
                <Col md={3}>
                    <h1 className="my-5">버튼사이즈</h1>
                    <button className="btn">btn</button><br/>
                    <button className="btn btn-primary">Nomal</button>
                    <button className="btn btn-primary btn-lg">lg</button>
                    <button className="btn btn-primary btn-sm">sm</button>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1>버튼 그룹</h1>
                    <div className="d-flex justify-content-end mt-5">
                        <div className="btn-group">
                            <button className="btn btn-outline-primary">쓰기</button>
                            <button className="btn btn-outline-success">수정</button>
                            <button className="btn btn-outline-danger">수정</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Btn;