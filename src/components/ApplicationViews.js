import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { PaintingProvider } from "./Painting/PaintingProvider"
import LocationList from "./location/LocationList"
import PaintingList from "./Painting/PaintingList"
import { CustomerProvider } from "./customers/CustomerProvider"
import CustomerList from "./customers/CustomerList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import EmployeeList from "./employees/EmployeeList"
import EmployeeForm from "./employees/EmployeeForm"
import PaintingForm from "./Painting/PaintingForm"
import PaintingDetail from "./Painting/PaintingDetail"
import LocationDetail from "./location/LocationDetail"



export default () => {
    return (
        <>
            <LocationProvider>
                <PaintingProvider>
                    <EmployeeProvider>
                        {/* Render the location list when http://localhost:3000/ */}
                        <Route exact path="/" render={
                            props => <LocationList />
                        } />
                        <Route exact path="/locations/:locationId(\d+)" render={
                            props => <LocationDetail {...props} />
                        } />
                    </EmployeeProvider>
                </PaintingProvider>
            </LocationProvider>

            <PaintingProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/paintings" render={
                            props => <PaintingList {...props} />
                        } />
                        <Route path="/paintings/create" render={
                            props => <PaintingForm {...props} />}
                        />
                        <Route path="/paintings/:paintingId(\d+)" render={
                            props => <PaintingDetail {...props} />
                        } />
                        <Route path="/paintings/edit/:paintingId(\d+)" render={
                            props => <PaintingForm {...props} />
                        } />
                    </CustomerProvider>
                </LocationProvider>
            </PaintingProvider>

            <CustomerProvider>

                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees" render={
                        props => <EmployeeList {...props} />
                    } />

                    <Route path="/employees/create"
                        render={props => <EmployeeForm {...props} />}
                    />
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}