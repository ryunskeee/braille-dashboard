import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "達成", value: 68 },
  { name: "未達成", value: 32 },
];

const COLORS = ["#7C3AED", "#E5E7EB"];

interface Props {
  title: string;
  value: string;
}

export default function Charts({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold">{title}</h2>

      <div className="relative h-60">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={85}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-4xl font-bold">{value}</p>
          <p className="text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
}