import {Container, Row, Col} from "react-bootstrap";

//hooks
import React, {useState} from "react";
// 함수형 컴포넌트에 상태를 추적

const Hooks = () => {
    const [color, setColor] = useState("green");

    const [car, setCar] = useState({
        brand : "빈폴",
        model : "리어카",
        year : "1960",
        color : "black"
    })

    const updateColor = () => {
        setCar(previousState => {
            return{...previousState, color:"rainbow"}
        })
    }

    return(
        <>
        <Container>
            <Row>
                <Col md={12}>
                    <h1>Hook</h1>
                    <p>
                        - React 16.8버전에서 추가<br/>
                        - Hooks를 사용하면 함수형 컴포넌트가 상태 및 기타 react 기능에 접근할 수 있음<br/>
                        - 이로 인해 클래스형 컴포넌트는 더 이상 필요하지 않지만 따로 없애지는 않음<br/>
                        &nbsp; <br/>
                        <b>Hook의 세 가지 규칙</b><br/>
                         1) 함수형 컴포넌트 내부에서만 호출될 수 있음<br/>
                         2) 구성요소의 최상위 레벨에서만 호출될 수 있음<br/>
                         3) 조건적일 수 없음
                    </p>
                    <hr className="my-5"/>

                    <h1>My favorite color is <span className="text-success">{color}</span>!</h1>
                    <p>
                        <button
                        className="btn btn-primary"
                        onClick={()=> setColor("blue")}
                        >BLUE</button>
                    </p>
                    <p>
                        <button
                        className="btn btn-danger"
                        onClick={()=> setColor("red")}
                        >RED</button>
                    </p>
                    <p>
                        <button
                        className="btn btn-warning"
                        onClick={()=> setColor("Yellow")}
                        >YELLOW</button>
                    </p>
                    <hr className="my-5"/>

                    <h2>My {car.brand}</h2>
                    <p>It is a {car.color} {car.model} from {car.year}.</p>
                    <hr className="my-5"/>

                    <h5>리액트 이론에 가장 중요한 메모리 소요방지 ...<small>[자바스크립트의 스프레드 연산자]</small></h5>
                    <p>state가 업데이트되면 전체 상채를 덮어씌움. 변경되는 것만 덮어씌울 때</p>
                    <button onClink={updateColor}>RAINBOW</button>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Hooks;