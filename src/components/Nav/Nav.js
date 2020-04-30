import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"


export default (props) => {
    return (


        <nav >
            <ul className="navbar">
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/">Galleries</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/paintings">Paintings</Link>
                </li>
                <li className="navbar__item">
                <Link className="navbar__link" to="/orders">Cart</Link>
                </li>
                {/* <li className="navbar__item">
                    <Link className="navbar__link" to="/customers">Customers</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/employees">Patrons</Link>
                </li> */}
                {
                    localStorage.getItem("painting_customer")
                        ? <li className="navbar__item">
                            <Link className="navbar__link"
                                to=""
                                onClick={e => {
                                    e.preventDefault()
                                    localStorage.removeItem("painting_customer")
                                    props.history.push("/")
                                }}
                            >Logout</Link>
                        </li>
                        : ""
                }
            </ul>
        </nav >


    )
}