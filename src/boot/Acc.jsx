import {Accordion,Container, Row, Col} from "react-bootstrap";

const Acc = () => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Item 1</Accordion.Header>
                            <Accordion.Body>
                                Culpa eu veniam qui irure pariatur quis sit exercitation magna aute nulla.
                                Cillum excepteur adipisicing amet enim magna non sint dolore voluptate ex
                                consequat anim minim in. Irure voluptate ut sit occaecat nulla eu.
                                Sint dolore qui ad tempor incididunt do qui exercitation. Eiusmod aliquip
                                ad aute dolor dolore fugiat. Laboris exercitation excepteur et duis quis
                                ipsum et ad mollit. Ipsum aliqua ut pariatur aliquip veniam. Nostrud do
                                voluptate ea sint dolore sunt ut. Eu voluptate irure reprehenderit nisi
                                exercitation ullamco occaecat occaecat est ullamco aliquip do.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Item 2</Accordion.Header>
                            <Accordion.Body>
                                Culpa eu veniam qui irure pariatur quis sit exercitation magna aute nulla.
                                Cillum excepteur adipisicing amet enim magna non sint dolore voluptate ex
                                consequat anim minim in. Irure voluptate ut sit occaecat nulla eu.
                                Sint dolore qui ad tempor incididunt do qui exercitation. Eiusmod aliquip
                                ad aute dolor dolore fugiat. Laboris exercitation excepteur et duis quis
                                ipsum et ad mollit. Ipsum aliqua ut pariatur aliquip veniam. Nostrud do
                                voluptate ea sint dolore sunt ut. Eu voluptate irure reprehenderit nisi
                                exercitation ullamco occaecat occaecat est ullamco aliquip do.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Acc;