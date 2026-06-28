import { useState } from "react";
import StudentItem from "./StudentItem";
import SearchBar from "./SearchBar";

interface Student {
  id: number;
  name: string;
  level: string;
  accuracy: number;
  time: number;
}

interface Props {
  students: Student[];
  addStudent: (student: Student) => void;
  deleteStudent: (id: number) => void;
  searchText: string;
  setSearchText: (text: string) => void;
}

export default function StudentSection({
  students,
  addStudent,
  deleteStudent,
  searchText,
  setSearchText,
}: Props) {
 

  return (
    <section className="mt-10 rounded-3xl bg-white p-8 shadow">
      <h2 className="mb-6 text-3xl font-bold">
        学習者一覧
      </h2>

      <SearchBar 
      addStudent={addStudent} 
      searchText={searchText}
      setSearchText={setSearchText}
      />

      <div className="space-y-4 mt-6">
        {students.map((student) => (
          <StudentItem
  key={student.id}
  id={student.id}
  name={student.name}
  level={student.level}
  accuracy={student.accuracy}
  time={student.time}
  deleteStudent={deleteStudent}
/>
        ))}
      </div>
    </section>
  );
}