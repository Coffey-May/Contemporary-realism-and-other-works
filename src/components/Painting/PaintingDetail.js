import React, { useContext } from "react"
import { CustomerContext } from "../customers/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { PaintingContext } from "./PaintingProvider"
import "./Paintings.css"
import { Link } from "react-router-dom"



export default (props) => {
    const { paintings, releasePainting } = useContext(PaintingContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    /*
        This line of code will be explained in the next
        section of the chapter.
    */
    const chosenPaintingId = parseInt(props.match.params.paintingId, 10)

    const painting = paintings.find(p => p.id === chosenPaintingId) || {}
    const customer = customers.find(c => c.id === painting.customerId) || {}
    const location = locations.find(l => l.id === painting.locationId) || {}

    return (

        <section className="painting">
            <div>
                <img src={process.env.PUBLIC_URL + "/" + `${painting.image}`} alt="cannot display!" />

            </div>
            <h3 className="painting__title">{painting.title}</h3>
            <div className="painting__medium">{painting.medium}</div>
            <div className="painting__location">Location: {location.name}</div>
            <div className="painting__owner">Customer: {customer.name}</div>

            <button className="returnToPaintingList"><Link className="navbar__link" to="/paintings">Paintings</Link></button>


            <button onClick={() => {
                props.history.push(`/paintings/edit/${painting.id}`)
            }}>Edit</button>

            <button onClick={
                () => {
                    releasePainting(painting)
                        .then(() => {
                            props.history.push("/paintings")
                        })
                }
            }>
                Delete Painting
            </button>
        </section>

    )

}