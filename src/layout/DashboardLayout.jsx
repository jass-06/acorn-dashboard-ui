import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#edeae7] px-6 py-6">
      <div className="mx-auto max-w-[1440px] flex gap-6">

        {/* SIDEBAR — NARROWER */}
        <aside className="w-[260px]">
          <Sidebar />
        </aside>

        {/* CONTENT */}
        <div className="flex-1 flex flex-col gap-6">
          <Topbar />

          {/* SINGLE WHITE CANVAS */}
          <main className="bg-white rounded-[28px] px-8 py-6 overflow-x-auto">
            {children}
          </main>
        </div>

      </div>
    </div>
  );
}
