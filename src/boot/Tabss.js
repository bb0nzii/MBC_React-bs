import {useState} from "react";
import {Container, Row, Col, Nav, Tab, Tabs} from "react-bootstrap";

function Tabss(){
    // 상태관리는 최상단에 사용해야 함(리턴 위)
    const [key, setKey] = useState('home');

    return(
    <>
        <Container fluid>
            <Row className="text-center">
                <Col md={4}>
                    <h3 className="mt-4 mb-2">Basic</h3>
                    <Tabs
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    >
                        <Tab eventKey="home" title="Home">
                            <a href="https://blog.naver.com/poplar159" className="text-black text-decoration-none">https://blog.naver.com/poplar159</a>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            BBONZI🐣
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            DM💌
                        </Tab>
                    </Tabs>
                </Col>
                <Col md={4}>
                    <h3 className="mt-4 mb-2">Justify</h3>
                    <Tabs
                    defaultActiveKey="profile"
                    className="mb-3"
                    fill
                    >
                        <Tab eventKey="home" title="Home">Blog</Tab>
                        <Tab eventKey="profile" title="Profile">BBONZI🐣</Tab>
                        <Tab eventKey="longer" title="Longer">Longer</Tab>
                        <Tab eventKey="contact" title="Contact">DM</Tab>
                    </Tabs>
                </Col>
                <Col md={4}>
                    <h3 className="mt-4 mb-2">Pills</h3>
                    <Tab.Container defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item><Nav.Link eventKey="first">Tab 1</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link eventKey="second">Tab 2</Nav.Link></Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">First Content</Tab.Pane>
                                    <Tab.Pane eventKey="second">Second Content</Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <Tab.Container>

        </Tab.Container>
    </>
    );
}

export default Tabss;