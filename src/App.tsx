import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import { Home } from '@/pages/Home';
import { Products } from '@/pages/Products';
import { Product } from '@/pages/Product';
import { SearchResults } from '@/pages/SearchResults';
import { Categories } from './pages/Categories';
import { CategoryPage } from './pages/CategoryPage';

function App() {
  useEffect(() => {
    console.log('App component mounted');
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={
              <ErrorBoundary>
                <Products />
              </ErrorBoundary>
            } />
            <Route path="/products/:productId" element={<Product />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:category" element={<CategoryPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-500">
          <h2>Something went wrong.</h2>
          <pre>{JSON.stringify(this.state.error, null, 2)}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default App;
