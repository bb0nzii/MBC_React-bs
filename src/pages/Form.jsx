import {Container, Row, Col} from "react-bootstrap";

const Form = () => {
    return(
        <>
        <Container fluid>
            <Row className="my-5 text-center">
                <Col sm={6}>
                    <h3>form-floating</h3>
                    <div className="form-floating my-3">
                        <input type="text" className="form-control"/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating my-3">
                        <textarea className="form-control" id="comment" name="text"/>
                        <label htmlFor="comment">Comments</label>
                    </div>
                </Col>
                <Col sm={6}>
                    <h3>Validation</h3>
                    <form action="" className="was-validated">
                        <div className="">
                            <label htmlFor="">Name :</label>
                            <input type="text" className="form-control" name="" required/>
                            <div className="valid-feedback">Good job! :)</div>
                            <div className="invalid-feedback">잘못 입력하셨습니다.</div>
                        </div>
                    </form>
                </Col>
            </Row>

            <Row className="my-5 bg-light p-4">
                <Col sm={4}>
                    <div className="input-group">
                        <span className="input-group-text">One</span>
                        <span className="input-group-text">Two</span>
                        <span className="input-group-text">Three</span>
                        <input type="text" className="form-control"/>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="input-group">
                        <span className="input-group-text">Person</span>
                        <input type="text" className="form-control" placeholder="First Name"/>
                        <input type="text" className="form-control" placeholder="Last Name"/>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="input-group">
                        <div className="input-group-text">
                            <input type="checkbox"/>
                        </div>
                        <input type="text" className="form-control" placeholder="Some Text"/>
                    </div>
                </Col>
            </Row>

            <div className="row my-5">
                <h1 className="text-center mb-3">Input Group</h1>
                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text">@</span>
                        <input type="text" className="form-control" placeholder="Username"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Your Email"/>
                        <span className="input-group-text">@example.com</span>
                    </div>
                </div>
                <h1 className="text-center my-3">Input Group Size</h1>
                <div className="col-md-4">
                    <div className="input-group-sm">
                        <input type="text" className="form-control" placeholder="Your Email"/>
                        <span className="input-group-text">@example.com</span>
                    </div>
                </div>
            </div>

            <Row className="text-center my-5 bg-light p-4">
                <Col md={4} className="mb-4">
                    <h3>Select</h3>
                    <select name="" id="" className="form-select form-select-lg">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                    </select>
                </Col>

                <Col md={4} className="mb-4">
                    <h3>Multiple Select</h3>
                    <select multiple name="" id="" className="form-select">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                    </select>
                </Col>

                <Col md={4} className="mb-4">
                    <h3>Datalist</h3>
                    <label htmlFor="browser" className="form-label">좋아하는 브라우저를 선택해봐요</label>
                    <input className="form-control" list="browsers" name="browser" id="browser"/>
                    <datalist id="browsers">
                        <option value={"Edge"}/>
                        <option value={"Firefox"}/>
                        <option value={"Chrome"}/>
                        <option value={"Opera"}/>
                        <option value={"Safari"}/>
                    </datalist>
                </Col>

                <Col md={4}>
                    <h4>Checkboxs & Radio Btn</h4>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="check1" checked/>
                        <label className="form-check-label" htmlFor="check1">Karina</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="check2"/>
                        <label className="form-check-label" htmlFor="check2">Winter</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="radio1" checked/>
                        <label className="form-check-label" htmlFor="radio1">Geeslle</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="radio2"/>
                        <label className="form-check-label" htmlFor="radio2">Ning Ning</label>
                    </div>
                </Col>

                <Col md={4}>
                    <h3>Toggle Switch</h3>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" checked/>
                        <label className="form-check-label" for="mySwitch"></label>
                    </div>
                </Col>

                <Col md={4}>
                    <h3>Range</h3>
                    <label htmlFor="customRange" className="form-label">Custom range</label>
                    <input type="range" className="form-range" id="customRange" step="10" name="points"/>
                </Col>
            </Row>

            <Row className="text-center my-5">
                <Col md={12}>
                    <h2>Form 반응형으로 만들기</h2>
                </Col>
            </Row>

            <Row className="my-5">
                <Col sm={6}>
                    <input type="text" className="form-control" placeholder="Enter Email"/>
                </Col>
                <Col sm={6}>
                    <input type="password" className="form-control" placeholder="Enter Password"/>
                </Col>
            </Row>

            <Row className="text-center bg-light p-4">
                <Col md={4}>
                    <h3>Color Picker</h3>
                    <input type="color" className="form-control form-control-color mx-auto" value="#ccc"/>
                </Col>

                <Col md={4}>
                    <h3>Stacked Form</h3>
                    <form action="/action.js" method="post">
                        <div className="my-3">
                            <label htmlFor="email">Email :</label>
                            <input type="email" className="form-control" id="email" placeholder="이메일을 입력해주세요" name="email"/>
                        </div>

                         <div className="my-3">
                            <label htmlFor="pwd">Password :</label>
                            <input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력해주세요" name="pwd"/>
                        </div>

                        <div className="form-check mb-3">
                            <label className="form-check-label">
                                <input type="checkbox" name="remember" className="form-check-input"/>Remember Me
                            </label>
                        </div>

                        <input type="submit" className="btn btn-primary me-1" value="Send"/>
                        <input type="submit" className="btn btn-secondary ms-1" value="Cancel"/>
                    </form>
                </Col>

                <Col md={4}>
                    <h3>Text Area</h3>
                    <p>무조건 한 줄로 써줘야 함</p>
                    <div className="my-3">
                        <label htmlFor="comment">Comment :</label>
                        <textarea className="form-control" rows="5" id="comment" name="text" placeholder="무조건 한 줄로 써야 한다는데 두줄로 해도 잘 되는디"/>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Form;