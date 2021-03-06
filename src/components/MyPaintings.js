import React from "react"
import { Route, Redirect } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./Nav/Nav"
import Login from "./auth/Login"
import Register from "./auth/Register"
import "./MyPaintings.css"




export default () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("painting_customer")) {
                return (
                    <>


                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />

                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />

        <Route path="/register" render={props => <Register {...props} />} />
    </>
)