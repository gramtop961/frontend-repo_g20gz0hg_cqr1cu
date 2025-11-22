function ProductCard({ product }) {
  return (
    <a href={`#product-${product.id}`} className="group block rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow bg-white">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 line-clamp-1">{product.title}</h3>
        <p className="text-sm text-slate-500 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold text-slate-900">₹{(product.price * 83).toFixed(0)}</span>
          <button className="text-sm font-semibold px-3 py-1.5 rounded-full bg-amber-500 text-white hover:bg-amber-600">Add</button>
        </div>
      </div>
    </a>
  )
}

function ProductGrid({ products = [] }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}

export default ProductGrid
