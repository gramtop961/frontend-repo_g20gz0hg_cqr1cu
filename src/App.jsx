import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductGrid from './components/ProductGrid'

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState('')
  const [query, setQuery] = useState('')

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${backend}/api/categories`).then(r => r.json()).then(setCategories).catch(() => {})
    fetch(`${backend}/api/products`).then(r => r.json()).then(setProducts).catch(() => {})
  }, [backend])

  useEffect(() => {
    const url = new URL(window.location)
    if (activeCategory) {
      url.searchParams.set('category', activeCategory)
    } else {
      url.searchParams.delete('category')
    }
    if (query) {
      url.searchParams.set('q', query)
    } else {
      url.searchParams.delete('q')
    }
    window.history.replaceState({}, '', url)
  }, [activeCategory, query])

  useEffect(() => {
    const controller = new AbortController()
    const params = new URLSearchParams()
    if (activeCategory) params.set('category', activeCategory)
    if (query) params.set('q', query)
    fetch(`${backend}/api/products?${params.toString()}`, { signal: controller.signal })
      .then(r => r.json())
      .then(setProducts)
      .catch(() => {})
    return () => controller.abort()
  }, [backend, activeCategory, query])

  const handleSearch = (val) => setQuery(val)

  return (
    <div className="min-h-screen bg-white">
      <Navbar onSearchChange={handleSearch} />
      <Hero onShopNow={() => {
        document.querySelector('#collection')?.scrollIntoView({ behavior: 'smooth' })
      }} />
      <Categories categories={categories} active={activeCategory} onSelect={setActiveCategory} />
      <ProductGrid products={products} />
    </div>
  )
}

export default App
