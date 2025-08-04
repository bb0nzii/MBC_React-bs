import {useState} from "react";
import {Figure, Button, ButtonGroup, Container, Row, Col, Nav, Tab, Tabs} from "react-bootstrap";

function Fig(){
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <h3></h3>
                    <Figure>
                        <Figure.Image
                        width={171} height={180} alt="171x180"
                        src="img/ddo.png"
                        />
                    </Figure>
                    <Figure.Caption>나도 로열티니핑이야 또너!</Figure.Caption>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Fig;