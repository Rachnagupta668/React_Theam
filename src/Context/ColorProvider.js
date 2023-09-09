import ColorContext from "./ColorContext";
import React, { useState } from 'react'



let defultStyle={backgroundColor: "white",
        color: "black",
        border: "1px solid red",
        fontfamily: "sans-serif"
}
const ColorProvider = (props) => {
    let [style, setStyle] = useState(defultStyle)

    

    return (
        <ColorContext.Provider value={
            {
                style: style,
                whiteMode: ()=>setStyle(defultStyle),
                blackMode: () => setStyle({
                    ...style,
                    backgroundColor: "black",
                    color: "white",
                    border: "1px solid red",
                    fontfamily: "cursive"

                }),
           blueMode: () => setStyle
                    (
                        {
                            ...style,
                            backgroundColor: "lightblue",
                            color: "green",
                            border: "1px solid red",
                            fontfamily: "cursive"
                        }
                    )
            }

        }>
            {props.children}
        </ColorContext.Provider>
    )

}

export default ColorProvider