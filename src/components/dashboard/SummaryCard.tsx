import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  value: string;
}

export default function SummaryCard({
  icon,
  title,
  value,
}: Props) {
  return (
    <div className="flex items-center gap-5 rounded-3xl bg-white p-6 shadow-lg">

      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-violet-600">
        {icon}
      </div>

      <div>
        <p className="text-gray-500 text-lg">
          {title}
        </p>

        <h2 className="text-4xl font-bold">
          {value}
        </h2>
      </div>

    </div>
  );
}