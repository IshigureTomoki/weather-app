import { LineChart, Line, CartesianGrid, XAxis, YAxis ,Tooltip} from "recharts";

export const LinePlot = () => {
  const data = [
    { name: "15", temp: 8.67, humidity: 30, amt: 2400 },
    { name: "16", temp: 8.87, pv: 2400, amt: 2400 },
    { name: "17", temp: 8.61, pv: 2400, amt: 2400 },
    { name: "18", temp: 8.26, pv: 2400, amt: 2400 },
    { name: "19", temp: 6.67, pv: 2400, amt: 2400 },
    { name: "20", temp: 5.31, pv: 2400, amt: 2400 },
    { name: "21", temp: 3.73, pv: 2400, amt: 2400 },
    { name: "22", uv: 3.32, pv: 2400, amt: 2400 },
  ];
  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis tickCount={8} unit="℃"/>
      <Tooltip />
    </LineChart>
  );
};
