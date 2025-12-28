import { Search, Plus, Menu } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between px-10 py-6">

      {/* SEARCH */}
      <div className="relative max-w-[420px] w-full">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          placeholder="Try searching 'insights'"
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-sm outline-none"
        />
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-4">

        {/* Avatar stack */}
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-300" />
          <div className="w-8 h-8 rounded-full bg-gray-400" />
          <div className="w-8 h-8 rounded-full bg-gray-500" />
        </div>

        {/* Add */}
        <button className="w-9 h-9 rounded-full bg-white border flex items-center justify-center">
          <Plus size={18} />
        </button>

        {/* Menu */}
        <button className="w-9 h-9 rounded-full bg-[#ef476f] text-white flex items-center justify-center">
          <Menu size={18} />
        </button>
      </div>
    </div>
  );
}
