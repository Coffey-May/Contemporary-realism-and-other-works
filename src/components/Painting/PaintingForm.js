import React, { useContext, useState, useEffect } from "react"
import { PaintingContext } from "./PaintingProvider"
import { LocationContext } from "../location/LocationProvider"


export default props => {
    const { locations } = useContext(LocationContext)
    const { addPaintings, paintings, updatePainting } = useContext(PaintingContext)
    const [painting, setPainting] = useState({})

    const editMode = props.match.params.hasOwnProperty("paintingId")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newPainting = Object.assign({}, painting)
        newPainting[event.target.name] = event.target.value
        setPainting(newPainting)
    }

    const setDefaults = () => {
        if (editMode) {
            const paintingId = parseInt(props.match.params.paintingId)
            const selectedPainting = paintings.find(p => p.id === paintingId) || {}
            setPainting(selectedPainting)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [paintings])

    const constructNewPainting = () => {
        const locationId = parseInt(painting.locationId)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            if (editMode) {
                updatePainting({
                    id: painting.id,
                    image: painting.image,
                    title: painting.title,
                    medium: painting.medium,
                    locationId: locationId,
                    treatment: painting.treatment,
                    customerId: parseInt(localStorage.getItem("painting_customer"))
                })
                    .then(() => props.history.push("/paintings"))
            } else {
                addPaintings({
                    title: painting.title,
                    image: painting.image,
                    medium: painting.medium,
                    locationId: locationId,
                    treatment: painting.treatment,
                    customerId: parseInt(localStorage.getItem("painting_customer"))
                })
                    .then(() => props.history.push("/paintings"))
            }
        }
    }

    return (
        <form className="paintingForm">
            <h2 className="paintingForm__title">{editMode ? "Update Painting" : "Admit Painting"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Painting image: </label>
                    <input type="image" name="image" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Painting image"
                        defaultValue={painting.image}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Painting name: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Animal name"
                        defaultValue={painting.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Painting Medium: </label>
                    <input type="text" name="medium" required className="form-control"
                        proptype="varchar"
                        placeholder="Animal breed"
                        defaultValue={painting.medium}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Location: </label>
                    <select name="locationId" className="form-control"
                        proptype="int"
                        value={painting.locationId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="treatment">Treatments: </label>
                    <textarea type="text" name="treatment" className="form-control"
                        proptype="varchar"
                        value={painting.treatment}
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewPainting()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Make Reservation"}
            </button>
        </form>
    )
}