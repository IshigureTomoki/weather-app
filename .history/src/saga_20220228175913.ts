const geolocation = () => {
  // Geolocation APIに対応している
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(position);
      alert(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
      return{
        { lat: latitude, lon: longitude };

      }
    });
  }
  // Geolocation APIに対応していない
  else {
    // 現在位置を取得できない場合の処理
    alert("あなたの端末では、現在位置を取得できません。");
  }
};