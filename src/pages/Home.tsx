import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { useRef } from 'react';
import Footer from "@/components/Footer";

export function Home() {
  // Get featured products (first 4 products)
  const featuredProducts = products.slice(0, 4);
  const featuredRef = useRef(null);
  const isInView = useInView(featuredRef, { once: true, margin: "-20%" });

  // Get unique categories
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="min-h-screen bg-white dark:bg-stone-950">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white dark:from-stone-900 dark:to-stone-950 py-20 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-playfair font-medium text-stone-900 dark:text-stone-100"
            >
              Daily Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-lg sm:text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto"
            >
              Discover our curated collection of premium home essentials, designed to elevate your everyday moments.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10"
            >
              <Link to="/products">
                <Button size="lg" className="rounded-full">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Categories */}
      <section className="py-16 bg-white dark:bg-stone-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-playfair font-medium text-stone-900 dark:text-stone-100 text-center mb-12"
          >
            Shop by Category
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <Link to={`/products?category=${category}`} className="block text-center">
                  <div className="relative aspect-square rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                    <img
                      src={products.find(p => p.category === category)?.image}
                      alt={category}
                      className="h-full w-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-medium text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                      {category}
                    </h3>
                    <p className="mt-1 text-sm text-stone-600 dark:text-stone-400 group-hover:text-amber-500 dark:group-hover:text-amber-300">
                      Explore →
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section 
        ref={featuredRef}
        className="py-16 bg-stone-50 dark:bg-stone-900 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl font-playfair font-medium text-stone-900 dark:text-stone-100"
            >
              Featured Products
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Link to="/products">
                <Button variant="outline">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ 
                  opacity: 0,
                  y: 50,
                  scale: 0.9,
                  rotateX: -15
                }}
                animate={isInView ? { 
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0
                } : {
                  opacity: 0,
                  y: 50,
                  scale: 0.9,
                  rotateX: -15
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.215, 0.610, 0.355, 1.000]
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Link
                  to={`/products/${product.id}`}
                  className="group block perspective-1000"
                >
                  <div className="bg-white dark:bg-stone-800 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="aspect-square overflow-hidden relative">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <motion.div 
                      className="p-4"
                      initial={{ y: 10, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    >
                      <h3 className="text-lg font-medium text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                        ${product.price.toFixed(2)}
                      </p>
                      <motion.p
                        className="mt-2 text-sm text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ y: 5 }}
                        whileHover={{ y: 0 }}
                      >
                        View Details →
                      </motion.p>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category List */}
      <section className="py-20 bg-white dark:bg-stone-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-playfair font-medium text-stone-900 dark:text-stone-100">
              Browse Categories
            </h2>
            <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
              Find exactly what you're looking for
            </p>
          </motion.div>

          <div className="space-y-32">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                className="relative"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-medium text-stone-900 dark:text-stone-100">
                      {category}
                    </h3>
                  </div>
                  <Link
                    to={`/products?category=${category}`}
                    className="flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-300"
                  >
                    View All
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="overflow-hidden">
                  <motion.div 
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop"
                    }}
                    whileHover={{ animationPlayState: "paused" }}
                    className="flex gap-6"
                  >
                    {/* First set of products */}
                    <div className="flex gap-6">
                      {products
                        .filter(p => p.category === category)
                        .map((product, productIndex) => (
                          <motion.div
                            key={`${product.id}-1`}
                            className="group flex-shrink-0 w-[280px]"
                            whileHover={{ 
                              y: -5,
                              transition: { duration: 0.3 }
                            }}
                          >
                            <Link to={`/products/${product.id}`}>
                              <div className="relative aspect-square rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-900">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                              <div className="mt-3">
                                <h4 className="text-sm font-medium text-stone-900 dark:text-stone-100 truncate group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                                  {product.name}
                                </h4>
                                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                                  ${product.price.toFixed(2)}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="flex gap-6">
                      {products
                        .filter(p => p.category === category)
                        .map((product, productIndex) => (
                          <motion.div
                            key={`${product.id}-2`}
                            className="group flex-shrink-0 w-[280px]"
                            whileHover={{ 
                              y: -5,
                              transition: { duration: 0.3 }
                            }}
                          >
                            <Link to={`/products/${product.id}`}>
                              <div className="relative aspect-square rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-900">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                              <div className="mt-3">
                                <h4 className="text-sm font-medium text-stone-900 dark:text-stone-100 truncate group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                                  {product.name}
                                </h4>
                                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                                  ${product.price.toFixed(2)}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-gradient-to-b from-white to-amber-50 dark:from-stone-950 dark:to-stone-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-playfair font-medium text-stone-900 dark:text-stone-100">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
              Discover why people love our products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Interior Designer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
                quote: "The quality of their products has transformed how I approach home design. Each piece tells a story.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Home Chef",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
                quote: "Their kitchen collection has elevated my cooking experience. The attention to detail is remarkable.",
                rating: 5
              },
              {
                name: "Emma Davis",
                role: "Artist",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
                quote: "The lighting solutions have created the perfect ambiance for my studio. Absolutely stunning!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white dark:bg-stone-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="relative"
                >
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-amber-200 dark:text-amber-700 opacity-50" />
                  <div className="pt-8">
                    <p className="text-stone-700 dark:text-stone-300 italic relative z-10">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </motion.div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-900 dark:text-stone-100">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Link to="/products">
              <Button size="lg" variant="outline" className="rounded-full">
                Browse All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 