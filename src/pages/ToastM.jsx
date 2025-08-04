import React, {useState} from 'react';
import { Container, Row, Col, Toast, Button } from "react-bootstrap";

const ToastM = () => {

    const [showA, setShowA] = useState(true)
    const [showB, setShowB] = useState(true)

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowA(!showB);

    return(
        <>
        <Container>
            <Row>
                <Col md={3}>
                    <h1>Show</h1>
                    <div className="toast show">
                        <div className="toast-header">
                            <strong className="me-auto">
                                토스트 냠
                            </strong>
                            <button className="btn-close" data-bs-dismiss="toast"></button>
                        </div>
                        <div className="toast-body">Lorem ipsum dolor sit amet.</div>
                    </div>
                </Col>
                <Col md={3}>
                    <p>리액트의 스크립트는 우리가 알고 있는 것과 다르다</p>
                    <button className="btn btn-warning" id="toastbtn">Show Toast</button>
                    <div className="toast">
                        <div className="toast-header">
                            <strong className="me-auto">
                                토스트 냠
                            </strong>
                            <button className="btn-close" data-bs-dismiss="toast"></button>
                        </div>
                        <div className="toast-body">Lorem ipsum dolor sit amet.</div>
                    </div>
                    {/* 리액트에서는 기존 html에서처럼 스크립트를 넣는 방법으로는 사용 불가능
                        <script>
                        document.getElementById("toastbtn").onclick = function(){
                            var toastElLest = [].slice.call(document.querySelectorAll('.toast'))
                        };
                    </script> */}
                </Col>
                <Col md={3}>
                    <h5>최초 리액트 부트스트랩 사용</h5>
                    <Button variant='success' onClick={toggleShowA} className='mb-2'>
                        Toggle Toast <strong>with</strong> Animation
                    </Button>
                    <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Header><h2>Header</h2></Toast.Header>
                        <Toast.Body>lorem...</Toast.Body>
                    </Toast>
                </Col>
                <Col md={3}>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default ToastM;