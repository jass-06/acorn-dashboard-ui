export default function Topbar() {
  return (
    <div className="flex items-center justify-between mb-8">
      <input
        type="text"
        placeholder="Try searching 'insights'"
        className="w-96 px-4 py-2 rounded-xl bg-card border border-gray-200 focus:outline-none"
      />

      <div className="flex items-center gap-4">
        <div className="w-9 h-9 rounded-full bg-gray-200" />
        <div className="w-9 h-9 rounded-full bg-primary" />
      </div>
    </div>
  );
}
