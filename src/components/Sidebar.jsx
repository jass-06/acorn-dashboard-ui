export default function Sidebar() {
  return (
    <aside className="w-64 bg-card rounded-r-xl p-6 shadow-sm">
      <h1 className="text-xl font-semibold mb-10">Codename</h1>

      <nav className="space-y-4 text-sm text-muted">
        <div className="text-dark font-medium">Dashboard</div>
        <div>Sales list</div>
        <div>Goals</div>
        <div>Reports</div>
        <div>Analytics</div>
      </nav>
    </aside>
  );
}
