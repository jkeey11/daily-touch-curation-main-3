import { useParams, useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { ProductDetail } from '@/components/ProductDetail';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Product() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [exitAnimation, setExitAnimation] = useState(false);

  // Find the product based on the ID from the URL
  const product = products.find(p => p.id === productId);
  
  // Find previous and next products for navigation
  const currentIndex = products.findIndex(p => p.id === productId);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  // Handle smooth navigation between products
  const handleProductNavigation = (targetId: string) => {
    setExitAnimation(true);
    setTimeout(() => {
      navigate(`/products/${targetId}`);
      setExitAnimation(false);
    }, 300);
  };

  // Reset exit animation state when component mounts
  useEffect(() => {
    setExitAnimation(false);
  }, []);

  // If product not found, show error state with animation
  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex flex-col items-center justify-center p-4"
      >
        <h1 className="text-2xl font-medium text-stone-800 dark:text-stone-200 mb-4">
          Product not found
        </h1>
        <p className="text-stone-600 dark:text-stone-400 mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button
          onClick={() => navigate('/products')}
          className="flex items-center space-x-2"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Back to Products</span>
        </Button>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={productId}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`min-h-screen ${exitAnimation ? 'pointer-events-none' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProductDetail product={product} />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
