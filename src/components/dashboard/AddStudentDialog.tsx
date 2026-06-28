import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Student {
  id: number;
  name: string;
  level: string;
  accuracy: number;
  time: number;
}

interface Props {
  addStudent: (student: Student) => void;
}

export default function AddStudentDialog({
  addStudent,
}: Props) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (name.trim() === "") return;

    addStudent({
      id: Date.now(),
      name,
      level: "初級",
      accuracy: 0,
      time: 0,
    });

    setName("");
  };

  return (
    <Dialog>
      <DialogTrigger>
          ＋ 学習者を追加
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            学習者を追加
          </DialogTitle>
        </DialogHeader>

        <Input
          placeholder="氏名"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button onClick={handleAdd}>
          追加
        </Button>

      </DialogContent>
    </Dialog>
  );
}