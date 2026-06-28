import { Search } from "lucide-react";
import AddStudentDialog from "./AddStudentDialog";

interface Student {
  id: number;
  name: string;
  level: string;
  accuracy: number;
  time: number;
}

interface Props {
  addStudent: (student: Student) => void;
  searchText: string;
  setSearchText: (text: string) => void;
}

export default function SearchBar({
  addStudent,
  searchText,
  setSearchText,
}: Props) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="relative w-[420px]">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />

        <input
          className="w-full rounded-xl border bg-white py-3 pl-12 pr-4 outline-none"
          placeholder="学習者を検索..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <AddStudentDialog addStudent={addStudent} />
    </div>
  );
}