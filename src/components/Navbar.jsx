import { Menu, Search, ShoppingCart } from 'lucide-react'

function Navbar({ onSearchChange, cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded hover:bg-slate-100">
            <Menu className="w-5 h-5" />
          </button>
          <a href="/" className="font-extrabold text-xl tracking-tight">
            <span className="text-amber-700">Navkar</span> <span className="text-slate-900">Jewellery</span>
          </a>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search rings, earrings, necklaces..."
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-full hover:bg-slate-100">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 text-[10px] bg-amber-500 text-white rounded-full px-1.5 py-0.5">{cartCount}</span>
            )}
          </button>
          <a href="#" className="hidden sm:inline-block text-sm font-semibold px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800">Sign In</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
