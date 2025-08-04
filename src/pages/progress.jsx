import {Container, Row, Col} from "react-bootstrap";

const Progress = () => {
    return(
        <>
        <Container>
            <Row>
            <h1>Progress</h1>
                <Col md={3}>
                    <h1>Basic</h1>
                    <div className="progress">
                        <div className="progress-bar bg-danger" style={{width:"70%"}}>70%</div>
                    </div>
                </Col>
                <Col md={3}>
                    <h1>Striped</h1>
                    <div className="progress">
                        <div className="progress-bar bg-warning progress-bar-striped" style={{width:"70%"}}>70%</div>
                    </div>
                </Col>
                <Col md={3}>
                    <h1>Animated</h1>
                    <div className="progress">
                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{width:"70%"}}>70%</div>
                    </div>
                </Col>
                <Col md={3}>
                    <h1>Multiple</h1>
                    <div className="progress">
                        <div className="progress-bar bg-danger" style={{width:"25%"}}>25%</div>
                        <div className="progress-bar bg-warning" style={{width:"25%"}}>25%</div>
                        <div className="progress-bar bg-success" style={{width:"25%"}}>25%</div>
                        <div className="progress-bar bg-primary" style={{width:"25%"}}>25%</div>
                    </div>
                </Col>
            </Row>
            <hr/>
            <Row>
                <h1>Spinner</h1>
                <Col md={3}>
                    <h1>Basic</h1>
                    <div className="spinner-border"></div>
                </Col>
                <Col md={3}>
                    <h1>Color</h1>
                    <div class="spinner-border text-muted"></div>
                    <div class="spinner-border text-primary"></div>
                    <div class="spinner-border text-success"></div>
                    <div class="spinner-border text-info"></div>
                    <div class="spinner-border text-warning"></div>
                    <div class="spinner-border text-danger"></div>
                    <div class="spinner-border text-secondary"></div>
                    <div class="spinner-border text-dark"></div>
                    <div class="spinner-border text-light"></div>
                    </Col>
                <Col md={3}>
                    <h1>Growing</h1>
                    <div className="spinner-grow text-muted"></div>
                    <div className="spinner-grow text-muted spinner-grow-sm"></div>
                </Col>
                <Col md={3}>
                    <h1>Spinner Button</h1>
                    <div className="btn btn-success">
                        <span className='spinner-border spinner-border-sm'></span>
                        &nbsp; btn
                    </div><br/>
                    <div className="btn btn-danger">
                        <span className='spinner-border spinner-border-sm'></span>
                        &nbsp; 안뇽안뇽
                    </div><br/>
                    <div className="btn btn-warning">
                        <span className='spinner-border spinner-border-sm'></span>
                        &nbsp; 피젯스피너
                    </div><br/>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Progress;