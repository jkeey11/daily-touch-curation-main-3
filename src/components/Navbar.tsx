import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, ShoppingBag, Home, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/data/products';
import { Cart } from "@/components/Cart";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<typeof products>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Get unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchResultsRef.current &&
        searchInputRef.current &&
        !searchResultsRef.current.contains(event.target as Node) &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setFilteredProducts([]);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Filter products as user types
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    ).slice(0, 5); // Limit to 5 results

    setFilteredProducts(filtered);
  }, [searchQuery]);

  // Handle click outside for categories panel
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target as Node)
      ) {
        setIsCategoriesOpen(false);
      }
    }

    if (isCategoriesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCategoriesOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      setSearchQuery('');
      setFilteredProducts([]);
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleProductSelect = (productId: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setFilteredProducts([]);
    navigate(`/product/${productId}`);
  };

  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-background'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <div ref={categoriesRef}>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Categories</span>
              </Button>

              <AnimatePresence>
                {isCategoriesOpen && (
                  <>
                    {/* Backdrop */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                    />
                    
                    {/* Categories Panel */}
                    <motion.div
                      ref={categoriesRef}
                      initial={{ x: '-100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '-100%' }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="fixed left-0 top-0 h-full w-80 bg-background/95 backdrop-blur-md border-r z-50 shadow-xl"
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-8">
                          <h2 className="text-2xl font-playfair font-semibold text-foreground">Categories</h2>
            <Button 
              variant="ghost" 
              size="icon" 
                            onClick={() => setIsCategoriesOpen(false)}
            >
                            <X className="h-5 w-5" />
            </Button>
          </div>

                        <div className="space-y-1">
                          {categories.map((category, index) => (
                            <React.Fragment key={category}>
                              <motion.div
                                whileHover={{ x: 4 }}
                                className="w-full"
                              >
                                <Link
                                  to={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block w-full px-4 py-3 text-left rounded-lg hover:bg-accent transition-colors"
                                  onClick={() => setIsCategoriesOpen(false)}
                                >
                                  <span className="text-lg font-medium text-foreground hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                                    {category}
                                  </span>
                                </Link>
                              </motion.div>
                              {index < categories.length - 1 && (
                                <div className="h-px bg-stone-200 dark:bg-stone-700 my-2" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <Link to="/">
              <motion.button
                className="relative inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground
                  hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </motion.button>
            </Link>
          </div>

          {/* Center - DAILY TOUCH or Search Input */}
          <motion.div 
            className="flex-1 flex justify-center relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              {isSearchOpen ? (
                <motion.form
                  key="search"
                  className="w-full max-w-lg relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  onSubmit={handleSearch}
                >
                  <Input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 pr-10 py-2 bg-background/50 backdrop-blur-sm
                      border border-stone-200 dark:border-stone-700 rounded-lg
                      focus:ring-2 focus:ring-amber-300/30 focus:border-amber-300
                      placeholder:text-stone-400"
                  />
            <Button 
                    type="button"
              variant="ghost" 
              size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2
                      text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                      setFilteredProducts([]);
                    }}
                  >
                    <X className="h-4 w-4" />
            </Button>

                  {/* Search Results Dropdown */}
                  <AnimatePresence>
                    {filteredProducts.length > 0 && (
                      <motion.div
                        ref={searchResultsRef}
                        className="absolute left-0 right-0 top-full mt-2 bg-background/95 backdrop-blur-sm
                          border border-stone-200 dark:border-stone-700 rounded-lg shadow-lg overflow-hidden
                          divide-y divide-stone-200 dark:divide-stone-700"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      >
                        {filteredProducts.map((product) => (
                          <motion.button
                            key={product.id}
                            className="w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-stone-100/50
                              dark:hover:bg-stone-800/50 transition-colors duration-200"
                            onClick={() => handleProductSelect(product.id)}
                            whileHover={{ x: 4 }}
                          >
                            <div className="h-12 w-12 rounded-md bg-stone-100 dark:bg-stone-800 overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">
                                {product.name}
                              </p>
                              <p className="text-sm text-stone-500 dark:text-stone-400 truncate">
                                {product.category}
                              </p>
                              <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
                                ${product.price}
                              </p>
                            </div>
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.form>
              ) : (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <Link 
                    to="/" 
                    className="text-xl sm:text-2xl font-playfair font-medium tracking-wide text-foreground
                      hover:text-muted-foreground transition-colors duration-300"
                  >
                    DAILY TOUCH
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Section */}
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button 
              variant="ghost" 
              size="icon"
                className="text-muted-foreground hover:text-foreground hover:bg-accent"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            </motion.div>
            <Cart />
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}

