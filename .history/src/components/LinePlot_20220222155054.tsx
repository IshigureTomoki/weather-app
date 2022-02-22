import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export const LinePlot = () => {
  const data = [
    { name: "15", uv: 5000, pv: 2400, amt: 2400 },
    { name: "16", uv: 400, pv: 2400, amt: 2400 },
    { name: "17", uv: 400, pv: 2400, amt: 2400 },
    { name: "18", uv: 400, pv: 2400, amt: 2400 },
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
