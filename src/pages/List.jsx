import {Container, Row, Col} from "react-bootstrap";

const List = () => {
    return(
        <>
        <Container fluid>
            <Row className="text-center">
                <Col sm={3}>
                    <h3>List Group</h3>
                    <ol className="list-group">
                        <li className="list-group-item">One</li>
                        <li className="list-group-item">Two</li>
                        <li className="list-group-item">Three</li>
                    </ol>
                </Col>

                <Col sm={3}>
                    <h3>Active State</h3>
                    <ol className="list-group">
                        <li className="list-group-item active">One</li>
                        <li className="list-group-item">Two</li>
                        <li className="list-group-item">Three</li>
                    </ol>
                </Col>

                <Col sm={3}>
                    <h3>Group With Linked Items</h3>
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action">One</a>
                        <a href="#" className="list-group-item list-group-item-action">Two</a>
                        <a href="#" className="list-group-item list-group-item-action">Three</a>
                    </div>
                </Col>

                <Col sm={3}>
                    <h3>Remove Borders</h3>
                    <ol className="list-group list-group-flush">
                        <li className="list-group-item">One</li>
                        <li className="list-group-item">Two</li>
                        <li className="list-group-item">Three</li>
                    </ol>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default List;