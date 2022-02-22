import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ComposedChart,
} from "recharts";

export const LinePlot = () => {
  const data = [
    { time: "15", temp: 8.67, humidity: 5 },
    { time: "16", temp: 8.87, humidity: 24 },
    { time: "17", temp: 8.61, humidity: 25 },
    { time: "18", temp: 8.26, humidity: 26 },
    { time: "19", temp: 6.67, humidity: 60 },
    { time: "20", temp: 5.31, humidity: 68 },
    { time: "21", temp: 3.73, humidity: 10 },
    { time: "22", temp: 3.32, humidity: 22 },
  ];
  return (
    <ComposedChart width={600} height={300} data={data}>
      <Bar dataKey="humidity" barSize={20} fill="#413ea0" label={{ fill: 'white', fontSize: 15 }}  />
      <Line type="monotone" dataKey="temp" stroke="#ff7300" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="time" />
      <YAxis tickCount={8} unit="℃" />
      <Tooltip />
    </ComposedChart>
  );
};
