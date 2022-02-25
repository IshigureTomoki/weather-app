import {
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ComposedChart,
  ResponsiveContainer,
  Legend,
  LabelList,
} from "recharts";

export const LinePlot = (props: any) => {
  const data = props.data;
  // const data = [
  //   { 時間: "15", 気温: 8.67, 降水確率: 5 },
  //   { 時間: "16", 気温: 8.87, 降水確率: 24 },
  //   { 時間: "17", temp: 8.61, humidity: 25 },
  //   { 時間: "18", temp: 8.26, humidity: 26 },
  //   { 時間: "19", temp: 6.67, humidity: 60 },
  //   { 時間: "20", temp: 5.31, humidity: 68 },
  //   { 時間: "21", temp: 3.73, humidity: 10 },
  //   { 時間: "22", temp: 3.32, humidity: 22 },
  // ];
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ComposedChart
        data={data}
        margin={{ top: 25, right: 10, left: 10, bottom: 0 }}
      >
        <Bar
          yAxisId={2}
          dataKey="降水確率"
          barSize={15}
          fill="#87cefa"
          label={{ fontSize: 10, position: "top" }}
        />
        <Line yAxisId={1} type="monotone" dataKey="気温" stroke="#ff7300">
          <LabelList dataKey="気温" position="top" fontSize={8} />
        </Line>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="時間" />
        <YAxis
          yAxisId={1}
          tickCount={8}
          unit="℃"
          label={{ value: "気温", position: "top" , dy: -5}}
        />
        <YAxis
          yAxisId={2}
          tickCount={8}
          unit="%"
          label={{ value: "降水確率", dx: 5, position: "top", dy: -5 }}
          orientation="right"
        />
        <Legend />
        <Tooltip />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
