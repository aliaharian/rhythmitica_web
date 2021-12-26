import React, { useEffect, useRef, useState } from 'react';

import Globe from 'react-globe.gl';
// import ReactGlobe from 'react-globe';

// const colorScale = d3.scaleOrdinal(['orangered', 'mediumblue', 'darkgreen', 'yellow']);
const MAP_CENTER = { lat: 35.45, lng: 50.81, altitude: 2 };

const GlobeComponent = ({ globeData }) => {
    const globeEl = useRef();

    const [data, setData] = useState(globeData || []);
    console.log('data', data)
    console.log('globeData', globeData)
    useEffect(() => {
        if (globeData) {
            setData([...globeData])
            globeEl.current.pointOfView(MAP_CENTER, 4000);

        }
    }, [globeData]);
    return (

        <>
            <Globe
                ref={globeEl}

                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                // backgroundImageUrl="//unpkg.com/browse/three-globe@2.21.3/example/img/night-sky.png"
                showGraticules={true}
                labelsData={data}
                labelText="label"
                labelColor={() => 'yellow'}
                pointsData={data}
                // pointLabel="label"
                labelSize={1.7}
                pointRadius={1}
                pointAltitude={0.02}
                pointColor={() => 'orangered'}
                // pointLabel={d => `
                //   <div><b>${d.label}</b></div>
                // `}
                onPointClick={d => window.open(`/privateLessons?packages=${d.packages.toString()}`, '_self')}
            />
        </>
    )
}

export default GlobeComponent;