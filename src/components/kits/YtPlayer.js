import React from "react";

const YtPlayer = ({ embedId }) => (
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
);


export default YtPlayer;