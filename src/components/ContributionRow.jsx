export default function ContributionRow() {
  return (
    <div className="flex items-center gap-3 text-sm">
      {[
        ["$209,633", "39.63%"],
        ["$156,841", "29.65%"],
        ["$117,115", "22.14%"],
        ["$45,386", "8.58%"],
      ].map(([v, p], i) => (
        <div
          key={i}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100"
        >
          <span className="font-medium">{v}</span>
          <span className="text-gray-400">{p}</span>
        </div>
      ))}

      <button className="ml-auto px-4 py-1.5 rounded-full bg-black text-white text-sm">
        Details
      </button>
    </div>
  );
}
