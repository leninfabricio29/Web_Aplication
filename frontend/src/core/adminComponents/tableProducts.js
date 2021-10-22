import React from 'react'
import axios from 'axios'
import { BsCardImage, BsFillPencilFill, BsFillTrashFill, BsArrowCounterclockwise, BsSearch } from "react-icons/bs";

export default class GetProducts extends React.Component {

    state = {
        productos: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/product/products')
            .then(res => {
                const productos = res.data;
                this.setState({ productos });
            })
    }


    refreshPage() {
        window.location.reload(false);
    }

    render() {
        return (
            <div className="col-lg-8">
                <div style={{
                    width: "100%",
                    margin: "auto",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}>

                    <div style={{
                        display: "flex"

                    }}>
                        <div style={{
                            width: "100%",
                            height: "50px"
                        }}>
                            <div style={{
                                margin: "10px 10px"
                            }}>
                                <input placeholder="Buscar" style={{
                                    boxShadow: "none",
                                    border: "none",
                                    borderBottom: "2px solid gray",
                                    inline: "none"
                                }} />

                                <button style={{
                                    border: "none",
                                    backgroundColor: "transparent",

                                }}><BsSearch style={{
                                    fontFamily: "blod",
                                    fontSize: "20px"
                                }} /> </button>
                            </div>

                        </div>


                        <div style={{
                            margin: "10px 10px 0 auto"
                        }}>
                            <button onClick={this.refreshPage} style={{
                                border: "none",
                                backgroundColor: "transparent",


                            }}><BsArrowCounterclockwise style={{
                                fontFamily: "blod",
                                fontSize: "25px"
                            }} /> </button>
                        </div>

                    </div>

                </div>

                <table className="table table-hover" style={{ width: "100%"
            }}>
                    <thead style={{backgroundColor:"#12438B",
                    border: "0.5px solid black"
                }}>
                        <tr>
                            <th>Nombres</th>
                            <th>Categoria</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Imagen</th>
                            <th>Opcion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.productos.map(datos => {
                            return (
                                <tr key={datos}>
                                    <td>{datos.name}</td>
                                    <td>{datos.category.name}</td>
                                    <td> $ {datos.price}</td>
                                    <td>{datos.quantity}</td>

                                    <td> <BsCardImage /></td>


                                    <td>
                                        <div style={{
                                            display: "inline-block",
                                            width: "100%",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            margin: "auto"

                                        }}>
                                            <div>
                                                <a style={{
                                                    color: "green",
                                                }}><BsFillPencilFill /></a></div>
                                            <div>

                                                <a style={{
                                                    color: "red",
                                                }}><BsFillTrashFill />
                                                </a>
                                            </div>
                                        </div>

                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
        )
    }

}