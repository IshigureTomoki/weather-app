import axios from "axios";
import { report } from "process";
import React, { useCallback, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useDispatch } from "react-redux";
import { convertTypeAcquisitionFromJson } from "typescript";
import "./App.css";
import { LinePlot } from "./components/LinePlot";
import { fetchLocation } from "./location/action";
import { Map } from "./components/Map";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useWeatherOneCall } from "./hooks/useWetherOneCall";
import { useOpenStreetMap } from "./hooks/useOpenStreetMap";
import { Daily } from "./components/Daily";

function App() {
  const {
    weatherOneCall,
    weatherReport,
    weatherDailyReports,
    weatherHourlyReports,
  } = useWeatherOneCall();

  const { reversePosition, openStreetMap } = useOpenStreetMap();

  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [currentPosition, setCurrentPosition] = useState({
    lat: 35.69,
    lon: 139.692,
  });

  // const dispatch = useDispatch();

  const onChangeSearchText = useCallback((event: any) => {
    setSearchText(event.target.value);
    // console.log(searchText);
  }, []);

  const onClickSearchList = () => {
    if (searchText !== undefined) {
      console.log(searchText);
      searchAddress(searchText);
    }
  };

  //検索ワードから緯度経度を取得
  const searchAddress = async (position: any) => {
    await axios
      .get(
        `https://nominatim.openstreetmap.org/search?q=${position}&format=jsonv2`
      )
      .then((res) => {
        console.log("Address");
        console.log(res);
        setCurrentPosition({ lat: res.data[0].lat, lon: res.data[0].lon });
      })
      .catch((err) => {
        alert(
          "検索結果が見つかりません。キーワードを変更して検索してください。"
        );
        console.log(err);
      });
  };

  useEffect(() => {
    // geolocation();
    updatePosition();
    console.log(currentPosition);
    // dispatch(fetchLocation())
  }, []);

  useEffect(() => {
    if (!loading) {
      console.log(currentPosition);
      openStreetMap(currentPosition);
      weatherOneCall(currentPosition);
    }
    // dispatch(fetchLocation())
  }, [loading, currentPosition]);


  // const geolocation = () => {
  //   // Geolocation APIに対応している
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const latitude = position.coords.latitude;
  //         const longitude = position.coords.longitude;
  //         // const location = { lat: latitude, lon: longitude };
  //         console.log(position);
  //         // return location;
  //         // alert(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
  //         setCurrentPosition({ lat: latitude, lon: longitude });
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  //   // Geolocation APIに対応していない
  //   else {
  //     // 現在位置を取得できない場合の処理
  //     alert("あなたの端末では、現在位置を取得できません。");
  //   }
  // };

  //現在地の緯度・経度を取得する関数
  const getCurrentPosition = (): any => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  //現在地を更新
  const updatePosition = async () => {
    setLoading(true);
    try {
      const currentPosition = await getCurrentPosition();
      const new_currentPosition = {
        lat: currentPosition.coords.latitude,
        lon: currentPosition.coords.longitude,
      };
      console.log(new_currentPosition);
      setCurrentPosition(new_currentPosition);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="App">
        <h1>天気予報</h1>
        <div>
          <SInput
            placeholder="地域を入力してください"
            value={searchText}
            onChange={onChangeSearchText}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={onClickSearchList}
          >
            検索
          </Button>
        </div>
        {loading ? (
          "現在地の天気を取得中..."
        ) : (
          <div>
            <div className="upper">
              <div className="now-area">
                <div className="title">現在の天気</div>
                <div className="nowtime">{weatherReport?.time}</div>
                <div className="nowplace">{`${reversePosition}`}</div>
                <div className="nowtemps">
                  <div>
                    <img
                      src={weatherReport?.weatherIcon}
                      alt="icon"
                      width={120}
                    />
                  </div>
                  <div className="nowtemps2">
                    <div className="nowtemp">{weatherReport?.temp}℃</div>
                    <div className="nowdes">
                      {weatherReport?.weatherDescription}
                    </div>
                  </div>
                </div>
                <dl>
                  <dt>体感温度</dt>
                  <dd>{weatherReport?.feels_like}℃</dd>
                  <dt>風向</dt>
                  <dd>{weatherReport?.wind_deg}</dd>
                  <dt>風速</dt>
                  <dd>{weatherReport?.wind_speed}m/s</dd>
                  <dt>気圧</dt>
                  <dd>{weatherReport?.pressure}hPa</dd>
                  <dt>湿度</dt>
                  <dd>{weatherReport?.humidity}%</dd>
                </dl>
              </div>

              <div className="dayly-area">
                <div className="title">8日間天気予報</div>

                {weatherDailyReports.map((report) => (
                  <>
                    <div className="dayly">
                      <div className="daylyd">
                        {report.date}
                        {report.dayOfWeekStr}
                      </div>
                      <div className="daylyi">
                        <img
                          src={`http://openweathermap.org/img/wn/${report.icon}@2x.png`}
                          alt="icon"
                          width={40}
                        />
                      </div>
                      <div className="daylyde">
                        {report.description}
                      </div>
                      <div className="daylym">
                        {report.temp_max}/{report.temp.min}℃
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className="map-area">
                <Map currentPosition={currentPosition} />
              </div>
            </div>

            <div className="hourly-area">
              <div className="title">1時間毎の天気予報</div>
              <LinePlot data={weatherHourlyReports} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;

export default App;
