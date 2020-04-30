import React from "react"
import "./Paintings.css"
import { Link } from "react-router-dom"


export default ({ painting }) => (

    < section className="painting" >
        <h3 className="painting__title">
            <span>  <Link to={`/paintings/${painting.id}`}>
                {painting.title}
            </Link></span>
        </h3>
        <div className="painting__medium">{painting.medium}</div>
        <div className="painting-img">
            {/* <img className="painting__image" src={painting.image} alt="" /> */}
            {/* <img src={require(path + `${painting.image}`)} /> */}
            <img src={process.env.PUBLIC_URL + `${painting.image}`} alt="cannot display" />
            <span>  <Link to={`/paintings/${painting.id}`}>
                Details
            </Link></span>

        </div>

    </section >

)