import StudentSection from "@/components/dashboard/StudentSection";
import Header from "@/components/layout/Header";
import SummaryCard from "@/components/dashboard/SummaryCard";
import Charts from "@/components/dashboard/Charts";
import BottomNavigation from "@/components/layout/BottomNavigation";
import { useState } from "react";


import {
  Users,
  CheckCircle2,
  Clock3,
} from "lucide-react";

interface Student {
  id: number;
  name: string;
  level: string;
  accuracy: number;
  time: number;
}



export default function Dashboard() {
    const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: "田中 太郎",
      level: "初級",
      accuracy: 72,
      time: 18,
    },
    {
      id: 2,
      name: "鈴木 花子",
      level: "中級",
      accuracy: 85,
      time: 25,
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const addStudent = (student: Student) => {
    setStudents((prev) => [...prev, student]);
  };

  const deleteStudent = (id: number) => {
  setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const filteredStudents = students.filter((student) =>
  student.name.includes(searchText)
   );

  return (
    <div className="min-h-screen bg-slate-100">

      <Header />

      <main className="mx-auto max-w-7xl p-8 pb-32">

        <h2 className="mb-8 text-5xl font-bold">
          管理者ダッシュボード
        </h2>

        <div className="grid grid-cols-3 gap-8">

          <SummaryCard
            icon={<Users size={34} />}
            title="学習者数"
            value="24人"
          />

          <SummaryCard
            icon={<CheckCircle2 size={34} />}
            title="平均正答率"
            value="68%"
          />

          <SummaryCard
            icon={<Clock3 size={34} />}
            title="平均学習時間"
            value="22分"
          />

        </div>

        <div className="mt-10 grid grid-cols-3 gap-8">

    <div className="col-span-2">

     <StudentSection
  students={filteredStudents}
  addStudent={addStudent}
  deleteStudent={deleteStudent}
  searchText={searchText}
  setSearchText={setSearchText}
/>

    </div>

    <div className="space-y-8">

        <Charts
            title="平均正答率"
            value="68%"
        />

        <Charts
            title="平均学習時間"
            value="22分"
        />

    </div>

</div>

      </main>
        <BottomNavigation />

    </div>
  );
}