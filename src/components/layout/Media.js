import { useEffect, useState } from "react";

const Media = () => {
    const [wid , setWidth]=useState()
    const [hei , setHei]=useState()
    const [href, setHref] = useState()
    const [url, setUrl] = useState()
 
    console.log('url', url)
    console.log('href', href)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth)
            setHei(window.innerHeight)
            setHref(window.location.href)
            setUrl(document.URL)
            window.loca
            
          }
    })
    return (
        <>
            <p>width is : {wid}</p>
            <p>height is : {hei}</p>
            <p>url is : {url}</p>
            <p>href is : {href}</p>
        
        </>
    )
}
export default Media;