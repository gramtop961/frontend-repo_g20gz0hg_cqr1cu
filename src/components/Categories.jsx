function Categories({ categories = [], active, onSelect }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="collection">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Shop by Category</h2>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        <button
          onClick={() => onSelect?.('')}
          className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap ${!active ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200'}`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => onSelect?.(c)}
            className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap ${active === c ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200'}`}
          >
            {c}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Categories
