import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "A", uv: 400, pv: 2400, amt: 2400 },
  { name: "B", uv: 300, pv: 2400, amt: 2400 },
  { name: "C", uv: 350, pv: 2400, amt: 2400 },
  { name: "D", uv: 200, pv: 2400, amt: 2400 },
  { name: "E", uv: 100, pv: 2400, amt: 2400 },
];

export default function renderLineChart() {
  return (
    <LineChart
      width={400}
      height={250}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};