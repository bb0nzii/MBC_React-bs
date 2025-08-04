import {useState} from "react";
import {Button, Modal, Container, Row, Col} from "react-bootstrap";

const Md = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>

<Container>
    <Row>
        <Col>
            <h3>Modal</h3>
            <Button variant="primary" onClick={handleShow}>Open</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Title>루비쨩!</Modal.Title>
                <Modal.Body>하잇! 나니다스키!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>쪼꼬민또</Button>
                    <Button variant="primary" onClick={handleClose}>아!나!따!</Button>
                </Modal.Footer>
                
            </Modal>
        </Col>
    </Row>
</Container>

        </>
    );
}

export default Md;