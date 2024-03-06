import React from "react";
import ImageMapper from "react-img-mapper";
import peaceRoomInteractive from "../assets/peaceRoomInteractive.png";
import imgMap from '../utils/imageMap.json'

const Mapper = (props) => {
  const IMAGE = "../assets/peaceRoomInteractive.png";
  const map = {
    name: "my-map",
    areas: imgMap
  }

  return (
    <ImageMapper
      src={peaceRoomInteractive}
      map={map}
      width={1000}
      imgWidth={1000}
      responsive
      parentWidth={1000}
      height={1000}
    />
  );
}

export default Mapper;
