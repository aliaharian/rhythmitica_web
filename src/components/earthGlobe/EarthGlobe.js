import React from 'react';
import dynamic from 'next/dynamic';
const GlobeComponent = dynamic(() => import('./GlobeComponent'), { ssr: false });

const EarthGlobe = ({globeData}) => {

    return (

        <>
            <GlobeComponent globeData={globeData}/>
        </>
    )
}

export default EarthGlobe;