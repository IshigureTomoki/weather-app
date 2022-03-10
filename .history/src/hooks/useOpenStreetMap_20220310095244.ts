import axios from "axios";
import { useState } from "react";

//緯度・経度から地域を取得
export const useOpenStreetMap = () => {
  const [reversePosition, setReversePosition] = useState("");

  const openStreetMap = async (position: { lat: number; lon: number; }) => {
    await axios
      .get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.lat}&lon=${position.lon}&zoom=18&addressdetails=1`
      )
      .then((res) => {
        console.log("aiueo");
        console.log(res);
        console.log(res.data.address);
        console.log(res.data.display_name);
        setReversePosition(res.data.display_name);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };

  return { reversePosition, openStreetMap };
};