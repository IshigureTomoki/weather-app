import { LineChart, Line, CartesianGrid, XAxis, YAxis ,Tooltip, Bar} from "recharts";

export const LinePlot = () => {
  const data = [
    { time: "15", temp: 8.67, humidity: 30,
    { time: "16", temp: 8.87, humidity: 24, amt: 2400 },
    { time: "17", temp: 8.61, humidity: 25, amt: 2400 },
    { time: "18", temp: 8.26, humidity: 26, amt: 2400 },
    { time: "19", temp: 6.67, humidity: 60, amt: 2400 },
    { time: "20", temp: 5.31, humidity: 68, amt: 2400 },
    { time: "21", temp: 3.73, humidity: 10, amt: 2400 },
    { time: "22", temp: 3.32, humidity: 22, amt: 2400 },
  ];
  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="temp" stroke="#8884d8" />
      <Bar dataKey="humidity" barSize={3} fill="#8884d8"/>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="time" />
      <YAxis tickCount={8} unit="℃"/>
      <Tooltip />
    </LineChart>
  );
};
