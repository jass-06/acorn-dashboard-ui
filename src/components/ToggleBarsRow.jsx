export default function ToggleBarsRow() {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-6 text-sm">
        <span className="font-medium">Revenue</span>
        <span className="text-gray-400">Leads</span>
        <span className="text-gray-400">Win / Loss</span>
      </div>

      <div className="flex items-end gap-2 h-16">
        {[20, 35, 28, 40, 33, 45, 38].map((h, i) => (
          <div
            key={i}
            className="w-2 rounded-full bg-[#ef476f]"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>

    </div>
  );
}
