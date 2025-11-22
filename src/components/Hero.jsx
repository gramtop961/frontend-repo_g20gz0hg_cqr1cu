function Hero({ onShopNow }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 20% 10%, #f59e0b 0, transparent 40%), radial-gradient(circle at 80% 30%, #fb7185 0, transparent 35%), radial-gradient(circle at 50% 90%, #fbbf24 0, transparent 40%)'}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center relative">
        <div>
          <p className="uppercase tracking-widest text-amber-700 font-semibold mb-3">Fine Jewellery</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Sam Jewellery
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Discover elegant rings, earrings, necklaces and more crafted to shine in every moment. Lightweight daily wear to dazzling occasion pieces.
          </p>
          <div className="flex items-center gap-4">
            <button onClick={onShopNow} className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800">
              Shop now
            </button>
            <a href="#collection" className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-semibold hover:bg-white">
              Explore collection
            </a>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxKZXdlbGxlcnl8ZW58MHwwfHx8MTc2Mzc5MzI4M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Jewellery" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"/>
          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
            <p className="text-sm text-slate-500">Trusted by thousands</p>
            <p className="text-lg font-bold">4.8/5 rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
