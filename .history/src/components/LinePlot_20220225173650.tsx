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
  //   { time: "15", temp: 8.67, humidity: 5 },
  //   { time: "16", temp: 8.87, humidity: 24 },
  //   { time: "17", temp: 8.61, humidity: 25 },
  //   { time: "18", temp: 8.26, humidity: 26 },
  //   { time: "19", temp: 6.67, humidity: 60 },
  //   { time: "20", temp: 5.31, humidity: 68 },
  //   { time: "21", temp: 3.73, humidity: 10 },
  //   { time: "22", temp: 3.32, humidity: 22 },
  // ];
  console.log(data);
  return (
    <ResponsiveContainer width="95%" height={200}>
      <ComposedChart data={data}
      margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
        <Bar
          yAxisId={2}
          dataKey="湿度"
          barSize={15}
          fill="#87cefa"
          label={{ fontSize: 10, position: "top" }}
        />
        <Line yAxisId={1} type="monotone" dataKey="気温" stroke="#ff7300">
          <LabelList dataKey="気温" position="bottom" fontSize={8}/>
        </Line>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="時間" />
        <YAxis
          yAxisId={1}
          tickCount={8}
          unit="℃"
          label={{ value: "気温", position: "top" }}
        />
        <YAxis
          yAxisId={2}
          tickCount={8}
          unit="%"
          label={{ value: "降水確率", dx: 5, position: "top" ,offset:05}}
          orientation="right"
        />
        <Legend />
        <Tooltip />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
