import React, { useContext } from "react"
import { PaintingContext } from "./PaintingProvider"
import Painting from "./Painting"
import "./Paintings.css"


export default (props) => {
    const { paintings } = useContext(PaintingContext)


    return (
        <>

            <div className=" paintingContainer">
                <button className="btn btn-primary" onClick={() => props.history.push("/paintings/create")}>
                    Add Painting
            </button>
                <div className="paintings">
                    {
                        paintings.map(painting => {
                            return <Painting key={painting.id} painting={painting} image={painting.image} />
                        })
                    }
                </div>
            </div>
        </>
    )
}