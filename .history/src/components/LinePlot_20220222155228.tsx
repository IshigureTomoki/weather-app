import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export const LinePlot = () => {
  const data = [
    { name: "15", uv: 8.67, pv: 2400, amt: 2400 },
    { name: "16", uv: 8.87, pv: 2400, amt: 2400 },
    { name: "17", uv: 8.61, pv: 2400, amt: 2400 },
    { name: "18", uv: 8.26, pv: 2400, amt: 2400 },    { name: "15", uv: 8.67, pv: 2400, amt: 2400 },
    { name: "16", uv: 8.87, pv: 2400, amt: 2400 },
    { name: "17", uv: 8.61, pv: 2400, amt: 2400 },
    { name: "18", uv: 8.26, pv: 2400, amt: 2400 },
  ];
  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
};
