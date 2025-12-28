import {
  Home,
  Users,
  FileText,
  Grid,
  Settings,
  ChevronDown,
  Plus,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex h-full">

      {/* ================= ICON RAIL ================= */}
      <div className="w-14 flex flex-col items-center py-6 gap-6 text-gray-500">
        {/* Active icon */}
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ef476f] text-white">
          <Grid size={16} />
        </div>

        <Users size={16} />
        <FileText size={16} />
        <Home size={16} />
        <Settings size={16} />
      </div>

      {/* ================= MAIN SIDEBAR ================= */}
      <div className="w-[220px] pr-5 pl-4 py-6 text-sm text-gray-700">

        {/* BRAND */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-semibold text-sm">
            C
          </div>

          <div className="flex items-center gap-1 font-medium truncate">
            Codename.com
            <ChevronDown size={13} />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-3 mb-6 text-gray-400 text-sm">
          <div>Starred</div>
          <div>Recent</div>
        </div>

        {/* MAIN NAV */}
        <div className="space-y-3 mb-6">
          <div>Sales list</div>
          <div>Goals</div>

          <div className="flex items-center justify-between font-medium text-black">
            <span>Dashboard</span>
            <Plus size={13} />
          </div>

          <div className="ml-3 border-l pl-3 space-y-2 text-gray-600">
            <div>Codename</div>

            <div className="flex items-center justify-between">
              <span>Shared with me</span>
              <ChevronDown size={11} />
            </div>

            <div className="ml-2 space-y-2">
              <div>Cargo2go</div>

              <div className="flex items-center justify-between">
                <span>Cloudz3r</span>
                <span className="bg-[#ef476f] text-white text-[10px] px-1.5 py-[1px] rounded-full">
                  2
                </span>
              </div>

              <div>Idioma</div>
              <div>Syllables</div>
              <div>x-0b</div>
            </div>
          </div>
        </div>

        {/* REPORTS */}
        <div className="space-y-3">
          <div className="flex items-center justify-between font-medium">
            <span>Reports</span>
            <Plus size={13} />
          </div>

          <div className="ml-3 border-l pl-3 space-y-2 text-gray-600">
            <div className="flex items-center justify-between">
              <span>Share with me</span>
              <ChevronDown size={11} />
            </div>

            <div className="ml-2 space-y-2">
              <div>Deals by user</div>
              <div>Deal duration</div>
            </div>

            <div className="flex items-center justify-between mt-3">
              <span>My reports</span>
              <ChevronDown size={11} />
            </div>

            <div className="ml-2 space-y-2">
              <div>Emails received</div>
              <div>Deal duration</div>

              <div className="text-[#ef476f] font-medium">
                New report
              </div>

              <div className="flex items-center justify-between">
                <span>Analytics</span>
                <span className="bg-[#ef476f] text-white text-[10px] px-1.5 py-[1px] rounded-full">
                  7
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-8 text-gray-400 flex items-center gap-2 text-sm">
          🔗 <span>Manage folders</span>
        </div>
      </div>
    </aside>
  );
}
