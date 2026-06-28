import { Menu, Bell } from "lucide-react";
import logo from "@/assets/robot.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-[#F7F8FC] px-6 py-4 shadow-sm">
      <button>
        <Menu size={32} />
      </button>

      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="BrailleMate"
          className="h-19 w-19"
        />

        <h1 className="text-4xl font-bold">
          BrailleMate
        </h1>
      </div>

      <button>
        <Bell size={30} />
      </button>
    </header>
  );
}