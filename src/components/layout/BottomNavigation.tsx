import { House, Users, ChartPie } from "lucide-react";

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-10 rounded-full bg-white px-10 py-4 shadow-xl">

        <button className="text-violet-600">
          <House size={30} />
        </button>

        <button className="text-gray-500 hover:text-violet-600 transition">
          <Users size={30} />
        </button>

        <button className="text-gray-500 hover:text-violet-600 transition">
          <ChartPie size={30} />
        </button>

      </div>
    </nav>
  );
}