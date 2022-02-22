import { LineChart, Line, CartesianGrid, XAxis, YAxis ,Tooltip;} from "recharts";

export const LinePlot = () => {
  const data = [
    { name: "15", uv: 8.67, pv: 2400, amt: 2400 },
    { name: "16", uv: 8.87, pv: 2400, amt: 2400 },
    { name: "17", uv: 8.61, pv: 2400, amt: 2400 },
    { name: "18", uv: 8.26, pv: 2400, amt: 2400 },
    { name: "19", uv: 6.67, pv: 2400, amt: 2400 },
    { name: "20", uv: 5.31, pv: 2400, amt: 2400 },
    { name: "21", uv: 3.73, pv: 2400, amt: 2400 },
    { name: "22", uv: 3.32, pv: 2400, amt: 2400 },
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
