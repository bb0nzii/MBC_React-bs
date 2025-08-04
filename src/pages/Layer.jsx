import {Container, Row, Col} from "react-bootstrap";

const Layer = () => {
    return(
        <>
        <Container>
            <Row>
                <h1>Model은 index.html에 부트스트랩 cdn선언 필수!</h1>
                <hr/>
                <Col md={3}>
                    <h1>Basic</h1>
                    <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#one"
                    >Basic Modal</button>
                    <div className="modal" id="one">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Heading</h4>
                                    <button className="btn-close"data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">이거 닫으면... 나랑 사귀는 거다?♥</div>
                                <div className="modal-footer">
                                    <button className="btn btn-danger"data-bs-dismiss="modal">
                                        close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <h4>Add animation</h4>
                    <button className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#any"
                    >Animation Modal</button>
                    <div className="modal fade" id="any">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Heading</h4>
                                    <button className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">이거 닫으면... 나랑 사귀는 거다?♥</div>
                                <div className="modal-footer">
                                    <button className="btn btn-danger" data-bs-dismiss="modal">
                                        close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <h2>Full Screen</h2>
                    <button className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#full"
                    >Full Modal</button>
                    <div className="modal fade" id="full">
                        <div className="modal-dialog modal-fullscreen">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Heading</h4>
                                    <button className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                    이거 닫으면... 나랑 사귀는 거다?♥<br/>
                                    <img src="../img/avata.png"/>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-danger" data-bs-dismiss="modal">
                                        close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <h5>Centered Modal</h5>
                    <button className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#center"
                    >Center Modal</button>
                    <div className="modal fade" id="center">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Heading</h4>
                                    <button className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">이거 닫으면... 나랑 사귀는 거다?♥</div>
                                <div className="modal-footer">
                                    <button className="btn btn-danger" data-bs-dismiss="modal">
                                        close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <hr/>

            <Row>
                <Col md={12}>
                    <h5>Centered Modal</h5>
                    <button className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#lorem"
                    >Scroll Modal</button>
                    <div className="modal fade" id="lorem">
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">닫아!</h4>
                                    <button className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">Labore fugiat nostrud in quis mollit commodo voluptate ad cupidatat do in. Mollit nostrud nisi tempor in. Cupidatat culpa occaecat in elit nostrud excepteur laborum id minim in deserunt cillum amet. Ea ex ipsum anim ullamco tempor id dolor incididunt enim magna. Ipsum elit voluptate laborum occaecat occaecat sunt occaecat non aute cupidatat.

Aliqua enim amet aute Lorem. Reprehenderit eu cillum elit tempor ex velit quis voluptate. Aute occaecat aliquip sunt pariatur. Laboris in cillum adipisicing incididunt esse.

Incididunt do incididunt magna pariatur nostrud consectetur ad ea consequat sint eiusmod laboris cupidatat laborum. Amet eiusmod sit consectetur ad non nulla veniam irure occaecat commodo esse. Irure ex aute qui exercitation quis occaecat incididunt ea dolor eiusmod ipsum reprehenderit. Ullamco ex veniam enim voluptate sint sunt nostrud. Ex id laboris dolore excepteur eiusmod voluptate exercitation et tempor qui duis.

Ut ad duis dolore ex irure et id. Aliquip non veniam ipsum in nisi amet exercitation consequat aliquip adipisicing excepteur anim culpa do. Est quis eiusmod veniam est mollit amet ullamco incididunt dolor commodo nisi commodo esse sunt.

Aute irure laborum ad eiusmod irure minim minim ad. Aute commodo nostrud dolor dolor quis sit ullamco qui commodo enim pariatur sunt. Sunt nostrud incididunt Lorem sit consequat culpa commodo Lorem ipsum sint pariatur. Anim occaecat elit ipsum incididunt occaecat tempor reprehenderit pariatur mollit cupidatat veniam et ut. Quis laboris enim nisi irure deserunt consequat dolore ea tempor reprehenderit sint.

Adipisicing eu irure officia duis consectetur deserunt deserunt excepteur commodo minim incididunt ipsum. In culpa officia voluptate ut occaecat veniam aliquip non fugiat Lorem exercitation. Sunt officia officia velit do eu ut pariatur sit voluptate. Labore dolor reprehenderit ea pariatur et ipsum.

Velit veniam minim fugiat incididunt dolor consequat. Amet culpa ea in adipisicing Lorem ullamco nostrud culpa et nostrud. Reprehenderit commodo voluptate incididunt aliquip nulla voluptate ex deserunt. Laborum id enim pariatur voluptate veniam nisi sit ut amet do mollit.

Ad eu ipsum sint laborum cillum reprehenderit ex aliquip commodo nulla duis sint irure anim. Pariatur elit amet labore aliquip esse ullamco. Aliqua do aliquip est veniam labore.

Enim pariatur aute ut incididunt ipsum eiusmod consequat cupidatat officia ex pariatur eu. Pariatur ut anim aliquip eiusmod velit dolor cillum. Culpa reprehenderit est ipsum qui consequat duis nostrud officia commodo sunt dolore.

Ea ullamco anim est nulla sint aliqua cillum quis et exercitation nulla ut consequat consectetur. Cillum ullamco adipisicing ea laborum ex incididunt in esse elit non proident elit labore. Veniam deserunt laboris esse adipisicing velit sunt excepteur id. Consequat Lorem laboris aliqua minim velit commodo amet exercitation est. Laboris laborum laborum ad ea eiusmod amet. Aliquip pariatur veniam tempor aute non ullamco dolore id est est.</div>
                                <div className="modal-footer">
                                    <button className="btn btn-danger" data-bs-dismiss="modal">
                                        close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Layer;