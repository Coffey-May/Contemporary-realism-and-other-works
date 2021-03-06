import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import "./Location.css"

export default (props) => {
    //const locations = useLocations is what we used to do
    const { locations } = useContext(LocationContext)

    return (
        <div>
            <h2 class="h2gallery">Galleries</h2>

            <div className="locations">

                {
                    locations.map(loc => <Location key={loc.id} location={loc} />)
                }
            </div >
        </div>
    )
}