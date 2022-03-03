import { callbackify } from "util";

export const geolocation = () => {
  // Geolocation APIに対応している
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(position);
      alert(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
      const location = { lat: latitude, lon: longitude };
      return {location};
    });
  }
  // Geolocation APIに対応していない
  else {
    // 現在位置を取得できない場合の処理
    alert("あなたの端末では、現在位置を取得できません。");
  }
};

function* fetchLocation(){
  const {location,error}=yield callbackify(requestL)
}