import { Search, Menu, Plus } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between px-8 py-5">

      {/* SEARCH */}
      <div className="relative w-[420px]">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          placeholder="Try searching 'insights'"
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm outline-none"
        />
      </div>

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-3">

        {/* MENU + AVATAR PILL */}
        <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-full border">

          {/* Menu */}
          <Menu size={18} className="text-gray-700" />

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
            {/* replace with img later if needed */}
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-pink-500" />
          </div>
        </div>

        {/* PLUS BUTTON (SEPARATE) */}
        <button className="w-10 h-10 rounded-full bg-[#ef476f] text-white flex items-center justify-center">
          <Plus size={18} />
        </button>

      </div>
    </div>
  );
}
