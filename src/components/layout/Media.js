import { useEffect, useState } from "react";

const Media = () => {
    const [wid , setWidth]=useState()
    const [hei , setHei]=useState()
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth)
            setHei(window.innerHeight)
          }
    })
    return (
        <>
            <p>width is : {wid}</p>
            <p>height is : {hei}</p>
        
        </>
    )
}
export default Media;