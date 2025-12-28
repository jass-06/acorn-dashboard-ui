export default function DashboardLower() {
  return (
    <div className="grid grid-cols-2 gap-6">

      <div className="bg-[#faf9f8] rounded-2xl p-6">
        <p className="text-sm text-gray-500 mb-4">Platforms</p>
        {[
          ["Dribbble", "$128,432", "▲ 12%"],
          ["Instagram", "$98,240", "▲ 8.1%"],
          ["Behance", "$76,130", "▼ 3.2%"],
          ["LinkedIn", "$64,890", "▲ 6.4%"],
        ].map(([n, v, d]) => (
          <div key={n} className="flex justify-between py-1.5 text-sm">
            <span>{n}</span>
            <span className="flex gap-3">
              <span>{v}</span>
              <span className="text-[#ef476f]">{d}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="bg-[#faf9f8] rounded-2xl p-6">
        <p className="text-sm text-gray-500 mb-4">Sales</p>
        {[
          ["Mikasa", "Won", "$12,300"],
          ["Eren", "Lost", "$8,920"],
          ["Armin", "Won", "$14,500"],
        ].map(([u, s, v]) => (
          <div key={u} className="flex justify-between py-2 text-sm">
            <span>{u}</span>
            <span className={s === "Won" ? "text-[#ef476f]" : "text-gray-400"}>
              {s}
            </span>
            <span>{v}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
