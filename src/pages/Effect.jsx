import {Container, Row, Col} from "react-bootstrap";
import React, {useEffect, useState} from "react";
// hook useEffect를 사용하면 컴포넌트에 부수적인 작용을 수행할 수 있음(데이터, 타이머 등)

const Effect = () => {

    const[count, setCount] = useState(0);
    // 로드됐을 때 초기값이 0

    const[calculation, setCalculation] = useState(0);

    useEffect(() => {
        /* setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000); // 1초 후에 1씩 증가 */

        setCalculation(() => count * 2);
    }, [count]);
    /* empty 브라켓을 사용해야 함 */

    return(
        <>
        <Container>
            <Row>
                <Col md={12}>
                    <h1>I've rendered {count} times!</h1>
                    <button onClick={() => setCount((c) => c +  1)} className="btn btn-outline-primary"> + </button>
                    <p className="display-1 text-success">Calculation : {calculation}</p>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Effect;