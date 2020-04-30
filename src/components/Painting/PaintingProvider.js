import React, { useState, UseEffect, useEffect } from "react"

export const PaintingContext = React.createContext()

export const PaintingProvider = (props) => {
    const [paintings, setPaintings] = useState([])

    const getPaintings = () => {
        return fetch("http://localhost:8088/paintings")
            .then(res => res.json())
            .then(setPaintings)
    }

    const addPaintings = painting => {
        return fetch("http://localhost:8088/paintings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(painting)
        })
            .then(getPaintings)
    }

    const updatePainting = painting => {
        return fetch(`http://localhost:8088/paintings/${painting.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(painting)
        })
            .then(getPaintings)
    }

    const releasePainting = painting => {
        return fetch(`http://localhost:8088/paintings/${painting.id}`, {
            method: "DELETE",
        })
            .then(getPaintings)
    }




    useEffect(() => {
        getPaintings()
    }, [])

    useEffect(() => {
        // console.log("***Paintings APP STATE CHANGED")    
    }, [paintings])

    return (
        <PaintingContext.Provider value={{
            paintings, addPaintings, releasePainting, updatePainting
        }}>
            {props.children}
        </PaintingContext.Provider>
    )
}