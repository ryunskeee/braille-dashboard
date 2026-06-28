import { UserCircle2, Trash2 } from "lucide-react";

interface Props {
  id: number;
  name: string;
  level: string;
  accuracy: number;
  time: number;
  deleteStudent: (id: number) => void;
}

export default function StudentItem({
  id,
  name,
  level,
  accuracy,
  time,
  deleteStudent,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-md transition hover:shadow-lg">

      <div className="flex items-center gap-4">

        <div className="rounded-full bg-violet-100 p-2">
          <UserCircle2 size={42} className="text-violet-600" />
        </div>

        <div>
          <h3 className="text-lg font-bold">{name}</h3>

          <p className="text-gray-500">{level}</p>
        </div>

      </div>

      <div className="w-52">

        <div className="mb-2 flex justify-between text-sm">

          <span>正答率</span>

          <span>{accuracy}%</span>

        </div>

        <div className="h-3 rounded-full bg-gray-200">

          <div
            className="h-3 rounded-full bg-violet-600"
            style={{ width: `${accuracy}%` }}
          />

        </div>

        <p className="mt-2 text-right text-sm text-gray-500">
          学習時間 {time}分
        </p>

        <div className="mt-4 flex justify-end">
  <button
    onClick={() => deleteStudent(id)}
    className="rounded-lg p-2 text-red-500 transition hover:bg-red-100"
  >
    <Trash2 size={20} />
  </button>
</div>

      </div>

    </div>
  );
}