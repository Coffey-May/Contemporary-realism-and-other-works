import React, { useContext } from "react"
import { LocationContext } from "../location/LocationProvider"
import { PaintingContext } from "../Painting/PaintingProvider"
import { EmployeeContext } from "../employees/EmployeeProvider"
import { Link } from "react-router-dom"



export default (props) => {
    const { paintings } = useContext(PaintingContext)
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    const chosenLocationId = parseInt(props.match.params.locationId, 10)
    const location = locations.find(location => location.id === chosenLocationId)


    const filteredPaintings = paintings.filter(painting => {
        if (painting.locationId === chosenLocationId) {
            return painting
        }

    })

    const filteredEmployees = employees.filter(employee => {
        if (employee.locationId === chosenLocationId) {
            return employee
        }
    })
    const loc = () => {
        if (chosenLocationId === 1) {
            return <h2>Plus one gallery</h2>
        } else if (chosenLocationId === 2) {
            return <h2>Tate Modern</h2>
        }
    }

    // console.log(loc)
    return (
        <section className="locationDetail">
            {/* {console.log(location)} */}
            {loc()}
            {/* <h2>{location.name}</h2> */}
            <div>Currently exhibiting: {
                filteredPaintings.map(fp => {
                    return <Link key={fp.id} to={`/paintings/${fp.id}`}>
                        {fp.title} {fp.medium}
                       
                    
                      
                    </Link>
                    
                }).reduce((acc, x) => acc === null ? [x] : [acc, ', ', x], null)
                
            }</div>
            {/* <div>patrons: {
                filteredEmployees.map(fe => {
                    return fe.name
                }).reduce((acc, x) => acc === null ? [x] : [acc, ', ', x], null)

            }</div> */}

        </section>

    )
}