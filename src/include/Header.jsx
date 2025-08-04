import {Outlet, Link} from "react-router-dom";

const Header = () => {
    return(
        <>
            <nav className="navbar navbar-expand-sm bg-light mb-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><b>React-Ref</b></a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#target">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="target">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item px-2"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item px-2"><Link to="/hooks" className="nav-link">Hooks</Link></li>
                            <li className="nav-item px-2"><Link to="/container" className="nav-link">BS-Container</Link></li>
                            <li className="nav-item px-2"><Link to="/typo" className="nav-link">Typographic</Link></li>
                            <li className="nav-item px-2"><Link to="/color" className="nav-link">Color</Link></li>
                            <li className="nav-item px-2"><Link to="/flex" className="nav-link">Flex-1</Link></li>
                            <li className="nav-item px-2"><Link to="/flex2" className="nav-link">Flex-2</Link></li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle fw-bold text-black px-3" href="#" data-bs-toggle="dropdown">React-Bootstrap</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><Link to="/acc" className="nav-link">Accordion</Link></li>
                                    <li className="nav-item"><Link to="/tabss" className="nav-link">Tabs</Link></li>
                                    <li className="nav-item"><Link to="/buttons" className="nav-link">Buttons</Link></li>
                                    <li className="nav-item"><Link to="/ref" className="nav-link">Ref</Link></li>
                                    <li className="nav-item"><Link to="/figure" className="nav-link">Figure</Link></li>
                                    <li className="nav-item"><Link to="/tb" className="nav-link">Tb</Link></li>
                                    <li className="nav-item"><Link to="/md" className="nav-link">Modals</Link></li>
                                    <li className="nav-item"><Link to="/pagen" className="nav-link">Pagination</Link></li>
                                    <li className="nav-item"><Link to="/ts" className="nav-link">Toast</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle fw-bold text-black px-3" href="#" data-bs-toggle="dropdown">BootStrap-Component</a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><Link to="/table" className="nav-link">Table</Link></li>
                                    <li className="nav-item"><Link to="/img" className="nav-link">Img</Link></li>
                                    <li className="nav-item"><Link to="/jumbo" className="nav-link">Jumbotron</Link></li>
                                    <li className="nav-item"><Link to="/alerts" className="nav-link">Alerts</Link></li>
                                    <li className="nav-item"><Link to="/btn" className="nav-link">Button</Link></li>
                                    <li className="nav-item"><Link to="/badges" className="nav-link">Badges</Link></li>
                                    <li className="nav-item"><Link to="/progress" className="nav-link">Progress bar</Link></li>
                                    <li className="nav-item"><Link to="/cards" className="nav-link">Cards</Link></li>
                                    <li className="nav-item"><Link to="/layer" className="nav-link">Layer(Modal)</Link></li>
                                    <li className="nav-item"><Link to="/toast" className="nav-link">ToastMessage</Link></li>
                                    <li className="nav-item"><Link to="/pagination" className="nav-link">Pagination</Link></li>
                                    <li className="nav-item"><Link to="/list" className="nav-link">List</Link></li>
                                    <li className="nav-item"><Link to="/collapse" className="nav-link">Collapse</Link></li>
                                    <li className="nav-item"><Link to="/form" className="nav-link">Form</Link></li>
                                    <li className="nav-item"><Link to="/effect" className="nav-link">Effect</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/> {/* 아웃렛은 선언하지 않으면 제대로 작동하지 않음! 여러 페이지 오가도 네비바 뜨게 하기 */}
        </>
    );
}

export default Header;