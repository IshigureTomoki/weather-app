import { callbackify } from "util";

// export const geolocation = () => {
//   // Geolocation APIに対応している
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       console.log(position);
//       alert(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
//       const location = { lat: latitude, lon: longitude };
//       return { location };
//     });
//   }
//   // Geolocation APIに対応していない
//   else {
//     // 現在位置を取得できない場合の処理
//     alert("あなたの端末では、現在位置を取得できません。");
//   }
// };


const getPosition = () => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then((position: any) => {
    console.log(position);
    const location = { lat: position.coords.latitude, lon: position.coords.longitude };
    return { location };
  })
  .catch((err) => {
    return { err };
  });

function* fetchLocation() {
  const { location,err } = yield call(getPosition);
}