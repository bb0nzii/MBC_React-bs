import {Container, Row, Col, Pagination} from "react-bootstrap";

let active = 2; //변수 액티브에 인덱스2를 대입
let items = []; //변수 아이템들은 비워짐

for (let number = 1; number <= 5; number++){
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    )
}

const Pagen = () => {
    return(
        <>
        <Container>
            <Row className="text-center">
                <Col>
                    <h1 className="mt-4 mb-3">Pagination</h1>
                    <div className="d-flex justify-content-center"><Pagination size="sm">{items}</Pagination><br/></div>
                    <div className="d-flex justify-content-center"><Pagination>{items}</Pagination></div>
                    <div className="d-flex justify-content-center"><Pagination size="lg">{items}</Pagination></div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Pagen;