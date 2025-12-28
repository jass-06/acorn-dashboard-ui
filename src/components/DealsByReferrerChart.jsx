import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Dr", value: 60 },
  { name: "In", value: 110 },
  { name: "Be", value: 80 },
  { name: "Li", value: 140 },
  { name: "Tw", value: 95 },
  { name: "Fb", value: 120 },
];

export default function DealsByReferrerChart() {
  return (
    <div className="bg-[#faf9f8] rounded-2xl p-6 h-[220px]">
      <p className="text-[13px] text-gray-400 mb-4">
        Deals amount by referrer
      </p>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar
            dataKey="value"
            fill="#000"
            radius={[8, 8, 8, 8]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
