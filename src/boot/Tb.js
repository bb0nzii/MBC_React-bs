import {useState} from "react";
import {Table, Container, Row, Col} from "react-bootstrap";

function Tb(){
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <h3>Table</h3>
                    <Table striped bordered hover variant="warning" responsive className="text-center">
                        <caption style={{display:"none"}}>Hello my name is 예삐예삐요</caption>
                        {/* <colgroup>
                            <col style={{width:"5%"}}/>
                            <col style={{width:"15%"}}/>
                            <col style={{width:"70%"}}/>
                            <col style={{width:"10%"}}/>
                        </colgroup> */}
                        <thead>
                            <tr>
                                <th>#</th><th>First</th><th>Last</th><th>User</th>
                                <th>#</th><th>First</th><th>Last</th><th>User</th>
                                <th>#</th><th>First</th><th>Last</th><th>User</th>
                                <th>#</th><th>First</th><th>Last</th><th>User</th>
                                <th>#</th><th>First</th><th>Last</th><th>User</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td><td>NXDE</td><td>♥</td><td>I-dle</td>
                                <td>01</td><td>NXDE</td><td>♥</td><td>I-dle</td>
                                <td>01</td><td>NXDE</td><td>♥</td><td>I-dle</td>
                                <td>01</td><td>NXDE</td><td>♥</td><td>I-dle</td>
                                <td>01</td><td>NXDE</td><td>♥</td><td>I-dle</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>#</th><th>First</th><th>Last</th><th>User</th>
                                <th>#</th><th>First</th><th>Last</th><th>User</th>
                                <th>#</th><th>First</th><th>Last</th><th>User</th>
                                <th>#</th><th>First</th><th>Last</th><th>User</th>
                                <th>#</th><th>First</th><th>Last</th><th>User</th>
                            </tr>
                        </tfoot>
                    </Table>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Tb;