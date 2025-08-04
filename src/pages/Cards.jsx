import {Container, Row, Col} from "react-bootstrap";

const Cards = () => {
    return(
        <>
        <Container>
            <Row>
                <Col sm={3}>
                    <h1>Basic</h1>
                    <div className="card">
                        <div className="card-body">Basic Card</div>
                    </div>
                </Col>
                <Col sm={3}>
                     <h1 className="h3">Header&Footer</h1>
                     <div className="card">
                        <div className="card-header">Header</div>
                        <div className="card-body">Body</div>
                        <div className="card-footer">Footer</div>
                    </div>
                </Col>
                <Col sm={3}>
                     <h1 className="h4">Title Text & Links</h1>
                     <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Card Title</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </Col>
                <Col sm={3}>
                     <h1>Card image</h1>
                     <div className="card">
                        <img src="../img/avata.png" alt="avata" className="card-img-top"/>
                        <div className="card-body">
                            <h4 className="card-title">Harry Poter</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, impedit.</p>
                            <a href="#" className="btn btn-outline-primary">more</a>
                        </div>
                        <img src="../img/avata.png" alt="avata" className="card-img-bottom"/>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Cards;