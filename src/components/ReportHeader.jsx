import {
  Plus,
  SlidersHorizontal,
  Download,
  Share2,
} from "lucide-react";

export default function ReportHeader() {
  return (
    <div className="flex flex-col gap-6">

      {/* ROW 1 — avatars + actions */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">
          <button className="w-8 h-8 rounded-full border flex items-center justify-center">
            <Plus size={14} />
          </button>

          {["Armin A.", "Eren Y.", "Mikasa A."].map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm"
            >
              <div className="w-5 h-5 rounded-full bg-gray-300" />
              {name}
            </div>
          ))}

          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold">
            C
          </div>
        </div>

        <div className="flex items-center gap-3">
          <SlidersHorizontal size={16} />
          <Download size={16} />
          <Share2 size={16} />

          <div className="flex items-center gap-2 text-sm">
            <div className="w-9 h-4 bg-black rounded-full relative">
              <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full" />
            </div>
            <span className="text-gray-600">Timeframe</span>
          </div>

          <div className="px-3 py-1.5 rounded-full bg-gray-100 text-sm flex items-center gap-1">
            Sep 1 – Nov 30, 2023
            <span className="text-gray-400">▾</span>
          </div>
        </div>

      </div>

      {/* ROW 2 — REVENUE + STAT CARDS INLINE */}
      <div className="flex items-end justify-between gap-10">

        {/* LEFT — Revenue */}
        <div>
          <h1 className="text-[26px] font-medium text-gray-400 mb-1">
            New report
          </h1>

          <p className="text-sm text-gray-500">Revenue</p>

          <div className="flex items-center gap-3 mt-1">
            <span className="text-[36px] font-semibold">
              $528,976<span className="text-gray-300">.82</span>
            </span>

            <span className="px-3 py-1 rounded-full bg-[#ef476f] text-white text-xs">
              ▲ 7.9%
            </span>

            <span className="px-3 py-1 rounded-full bg-[#ef476f] text-white text-xs">
              $27,335.09
            </span>
          </div>

          <p className="text-xs text-gray-500 mt-1">
            vs prev. $501,641.73 &nbsp; Jun 1 – Aug 31, 2023
          </p>
        </div>

        {/* RIGHT — STAT CARDS INLINE */}
        <div className="flex gap-4 items-end">

          {[
            { title: "Top sales", value: "72", sub: "Mikasa" },
            { title: "Best deal", value: "$42,300", dark: true },
            { title: "Deals", value: "256", sub: "▼ 5" },
            { title: "Value", value: "528k", accent: true },
            { title: "Win rate", value: "44%", sub: "▲ 1.2%" },
          ].map((c, i) => (
            <div
              key={i}
              className={`rounded-2xl px-4 py-3 text-sm ${
                c.dark
                  ? "bg-black text-white"
                  : "border bg-white"
              } ${c.accent ? "border-[#ef476f]" : ""}`}
            >
              <p className="text-xs text-gray-400">{c.title}</p>
              <p className="text-xl font-semibold">{c.value}</p>
              {c.sub && (
                <p className="text-xs text-gray-400 mt-1">{c.sub}</p>
              )}
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
