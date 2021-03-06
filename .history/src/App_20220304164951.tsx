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

function App() {
  const [searchText, setSearchText] = useState("");

  const [loading, setLoading] = useState(true);
  const [currentPosition, setCurrentPosition] = useState({
    lat: 35.69,
    lon: 139.692,
  });
  const [reversePosition, setReversePosition] = useState("");
  // const dispatch = useDispatch();

  const onChangeSearchText = useCallback((event: any) => {
    setSearchText(event.target.value);
    // console.log(searchText);
  },[]);
  const onClickSearchList = () => {
    if (searchText !== undefined) {
      console.log(searchText);
      searchAddress(searchText);
    }
  };

  const searchAddress = async (position: any) => {
    await axios
      .get(`https://nominatim.openstreetmap.org/search?q=${position}&limit=1&format=json`)
      .then((res) => {
        console.log("Address");
        console.log(res);
      })
      .catch((err) => {
        alert(err.message);
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
      wetherOneCall(currentPosition);
    }
    // dispatch(fetchLocation())
  }, [loading]);

  type weatherReportType = {
    time: string;
    timezone: string;
    temp: number;
    feels_like: string;
    wind_deg: string;
    wind_speed: string;
    pressure: string;
    humidity: string;
    weatherDescription: string;
    weatherIcon: string;
  };

  type weatherDailyReportsType = {
    dt: number;
    temp: {
      max: number;
      min: number;
    };
    weather: [
      {
        description: string;
        icon: string;
        id: string;
        main: string;
      }
    ];
  };

  type weatherHourlyReportsType = {
    time: string;
    temp: number;
    pop: string;
  };

  // const geolocation = () => {
  //   // Geolocation API?????????????????????
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const latitude = position.coords.latitude;
  //         const longitude = position.coords.longitude;
  //         // const location = { lat: latitude, lon: longitude };
  //         console.log(position);
  //         // return location;
  //         // alert(`Latitude: ${latitude} ??, Longitude: ${longitude} ??`);
  //         setCurrentPosition({ lat: latitude, lon: longitude });
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  //   // Geolocation API????????????????????????
  //   else {
  //     // ????????????????????????????????????????????????
  //     alert("??????????????????????????????????????????????????????????????????");
  //   }
  // };

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

  const [weatherReport, setWeatherReport] = useState<weatherReportType>();
  const [weatherDailyReports, setWeatherDailyReports] = useState<
    weatherDailyReportsType[]
  >([]);

  const [weatherHourlyReports, setWeatherHourlyReports] = useState<
    weatherHourlyReportsType[]
  >([]);

  const time = (dt: number) => {
    const srTime = new Date(dt * 1000);
    const time = srTime.toLocaleTimeString();
    return `${time}`;
  };

  const hour = (dt: number) => {
    const srTime = new Date(dt * 1000);
    const hour = srTime.getHours();
    return `${hour}`;
  };

  const mday = (dt: number) => {
    const srTime = new Date(dt * 1000);
    const day = srTime.toLocaleDateString();
    return `${day}`;
  };

  const date = (dt: number) => {
    const srTime = new Date(dt * 1000);
    const date = srTime.getDate();
    return `${date}`;
  };

  const dayOfWeekStr = (dt: number) => {
    const srTime = new Date(dt * 1000);
    const day = srTime.getDay();
    const dayOfWeekStrJP = ["???", "???", "???", "???", "???", "???", "???"];
    return `(${dayOfWeekStrJP[day]})`;
  };

  const openStreetMap = async (position: { lat: number; lon: number }) => {
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

  const wetherOneCall = async (position: { lat: number; lon: number }) => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${position.lat}&lon=${position.lon}&lang=ja&units=metric&appid=ff86fbdda3c22e95ce0071f6a7826f6c`
      )
      .then((res) => {
        console.log(res);

        const get_wind_deg = (wind_deg: number) => {
          let r = "??????";
          if (wind_deg >= 11.25) r = "?????????";
          if (wind_deg >= 33.75) r = "????????????";
          if (wind_deg >= 56.25) r = "?????????";
          if (wind_deg >= 78.75) r = "??????";
          if (wind_deg >= 101.25) r = "?????????";
          if (wind_deg >= 123.75) r = "????????????";
          if (wind_deg >= 146.25) r = "?????????";
          if (wind_deg >= 168.75) r = "??????";
          if (wind_deg >= 191.25) r = "?????????";
          if (wind_deg >= 213.75) r = "????????????";
          if (wind_deg >= 236.25) r = "?????????";
          if (wind_deg >= 258.75) r = "??????";
          if (wind_deg >= 281.25) r = "?????????";
          if (wind_deg >= 303.75) r = "????????????";
          if (wind_deg >= 326.25) r = "?????????";
          return r;
        };

        const report = {
          time: `${mday(res.data.current.dt)} ${time(res.data.current.dt)}`,
          timezone: res.data.timezone,
          temp: res.data.current.temp,
          feels_like: res.data.current.feels_like,
          wind_deg: get_wind_deg(res.data.current.wind_deg),
          wind_speed: res.data.current.wind_speed,
          pressure: res.data.current.pressure,
          humidity: res.data.current.humidity,
          weatherDescription: res.data.current.weather[0].description,
          weatherIcon: `http://openweathermap.org/img/wn/${res.data.current.weather[0].icon}@2x.png`,
        };

        const hourlyreports = res.data.hourly.map(
          (hourly: any, index: number) => {
            return {
              ??????: `${hour(hourly.dt)}???`,
              ??????: Math.round(hourly.temp * Math.pow(10, 1)) / Math.pow(10, 1),
              ????????????: hourly.pop * 100,
            };
          }
        );

        hourlyreports.length = 24;

        console.log(report);
        setWeatherReport(report);
        setWeatherDailyReports(res.data.daily);
        console.log(hourlyreports);
        setWeatherHourlyReports(hourlyreports);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };
  return (
    <>
      <div className="App">
        <h1>????????????</h1>
        <div>
          <SInput
            placeholder="?????????????????????????????????"
            value={searchText}
            onChange={onChangeSearchText}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={onClickSearchList}
          >
            ??????
          </Button>
        </div>
        {loading ? (
          "??????????????????????????????..."
        ) : (
          <div>
            <div className="upper">
              <div className="now-area">
                <div className="title">???????????????</div>
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
                    <div className="nowtemp">{weatherReport?.temp}???</div>
                    <div className="nowdes">
                      {weatherReport?.weatherDescription}
                    </div>
                  </div>
                </div>
                <dl>
                  <dt>????????????</dt>
                  <dd>{weatherReport?.feels_like}???</dd>
                  <dt>??????</dt>
                  <dd>{weatherReport?.wind_deg}</dd>
                  <dt>??????</dt>
                  <dd>{weatherReport?.wind_speed}m/s</dd>
                  <dt>??????</dt>
                  <dd>{weatherReport?.pressure}hPa</dd>
                  <dt>??????</dt>
                  <dd>{weatherReport?.humidity}%</dd>
                </dl>
              </div>

              <div className="dayly-area">
                <div className="title">8??????????????????</div>

                {weatherDailyReports.map((report) => (
                  <>
                    <div className="dayly">
                      <div className="daylyd">
                        {date(report.dt)}
                        {dayOfWeekStr(report.dt)}
                      </div>
                      <div className="daylyi">
                        <img
                          src={`http://openweathermap.org/img/wn/${report.weather[0].icon}@2x.png`}
                          alt="icon"
                          width={40}
                        />
                      </div>
                      <div className="daylyde">
                        {report.weather[0].description}
                      </div>
                      <div className="daylym">
                        {report.temp.max}/{report.temp.min}???
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
              <div className="title">1????????????????????????</div>
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
