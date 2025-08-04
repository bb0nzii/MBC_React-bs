import {useState} from "react";
import {Button, ButtonGroup, Container, Row, Col, Nav, Tab, Tabs} from "react-bootstrap";

function Buttons(){
    return(
        <>
        <Container>
            <Row>
                <Col sm={4}>
                <h3 className="mt-4 mb-3">Buttons</h3>
                    <Button variant='primary' className="mb-2">primary</Button><br/>
                    <Button variant='secondary' className="mb-2">secondary</Button><br/>
                    <Button variant='success' className="mb-2">success</Button><br/>
                    <Button variant='warning' className="mb-2">warning</Button><br/>
                    <Button variant='danger' className="mb-2">danger</Button><br/>
                    <Button variant='info' className="mb-2">info</Button><br/>
                    <Button variant='light' className="mb-2">light</Button><br/>
                    <Button variant='dark' className="mb-2">dark</Button><br/>
                    <Button variant='link' className="mb-2">link</Button><br/>
                </Col>

                <Col sm={4}>
                <h3 className="mt-4 mb-3">Outline Buttons</h3>
                    <Button variant='outline-primary' className="mb-2">primary</Button><br/>
                    <Button variant='outline-secondary' className="mb-2">secondary</Button><br/>
                    <Button variant='outline-success' className="mb-2">success</Button><br/>
                    <Button variant='outline-warning' className="mb-2">warning</Button><br/>
                    <Button variant='outline-danger' className="mb-2">danger</Button><br/>
                    <Button variant='outline-info' className="mb-2">info</Button><br/>
                    <Button variant='outline-light' className="mb-2">light</Button><br/>
                    <Button variant='outline-dark' className="mb-2">dark</Button><br/>
                </Col>

                <Col sm={4}>
                    <h3 className="mt-4 mb-3">Button group</h3>
                    <ButtonGroup>
                        <Button variant="outline-primary" size="sm">Write</Button>
                        <Button variant="outline-success">Edit</Button>
                        <Button variant="outline-danger" size="lg">Delete</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Buttons;