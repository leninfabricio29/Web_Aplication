import React from "react";
import './styles.css';
import { signout } from "../apiCore";
import {
    BsPersonCircle,
    BsArrowRightSquareFill,
    BsFillBagPlusFill,
    BsBorderMiddle,
    BsHouseDoorFill,
    BsCartCheckFill
} from "react-icons/bs";

const Admin = (history) => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div class="collapse navbar-collapse" id="navbarNav" >

                        <ul className="navbar-nav"
                            style={{
                                width: "700px",
                                position: "relative",
                                display: "flex",
                                justifyContent: "space-around",
                                left: "150px"


                            }}
                        >
                            <li className="nav-item" >
                                <a className="btn btn-outline-light" style={{
                                    border: "none",


                                }} href="/admin">
                                    <BsHouseDoorFill />
                                    <br />Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-light" style={{
                                    border: "none",


                                }} href="/addProduct" > <BsFillBagPlusFill />
                                    <br />Productos</a>

                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-light" href="/addCategory" style={{
                                    border: "none",


                                }} target="myFrame">
                                    <BsBorderMiddle />
                                    <br />
                                    Categorias</a>
                            </li>

                            <li className="nav-item">
                                <a className="btn btn-outline-light" style={{
                                    border: "none",
                                    marginleft: "15px"


                                }} target="myFrame">
                                    <BsCartCheckFill />
                                    <br />
                                    Vender</a>
                            </li>
                        </ul>



                        <div className="dropdown" style={{
                            position: "relative",
                            left: "380px"


                        }}>
                            <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{
                                border: "none",

                            }}>
                                Admin
                            </button>
                            <div className="dropdown-menu" >
                                <a className="dropdown-item" href="#">
                                    <BsPersonCircle />

                                </a>
                                <div className="dropdown-divider">
                                </div>

                                <li>

                                    <a onClick={() =>
                                        signout(() => {
                                            history.push("/");
                                        })} className="dropdown-item" href="/signin" style={{
                                            fontSize: "14px",
                                            display: "flex"
                                        }}
                                    >
                                        Salir</a>


                                </li>
                                <div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </nav>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>

        </div>



    )

}
export default Admin;