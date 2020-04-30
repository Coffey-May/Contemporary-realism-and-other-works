import React, { useContext } from "react"
import "./Employee.css"
import { EmployeeContext } from "./EmployeeProvider"

export default ({ history, employee, location }) => {
    const { deleteEmployee } = useContext(EmployeeContext)

    return (

        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__name">{location.name}</div>
            <button onClick={
                () => {

                    deleteEmployee(employee)
                        .then(() => {
                            history.push("/employees")
                        })
                }
            }>
                Remove Patron
            </button>

        </section>

    )
}