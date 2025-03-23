
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { ChevronLeft, Star, Heart } from "lucide-react";
import { categories, featuredProducts, categoryImages } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the category by ID
  const category = categories.find(c => c.id === id) || {
    id: id || "unknown",
    name: id ? id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ") : "Products",
    image: "https://images.unsplash.com/photo-1600014896066-48005593e447?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 12
  };
  
  // Get products for this category
  let products = [];
  
  // Try to find matching products from categoryImages
  if (id === "kitchen" || id === "decor" || id === "stationery" || id === "lighting") {
    const categoryKey = id as keyof typeof categoryImages;
    products = categoryImages[categoryKey].map(item => ({
      id: item.id,
      title: item.title,
      description: "High-quality item for your home",
      price: item.price,
      rating: item.rating,
      reviews: item.reviews,
      image: item.url,
      badge: item.badge
    }));
  } 
  // For featured
  else if (id === "featured") {
    products = featuredProducts.slice(0, 8).map(product => ({
      ...product,
      badge: "Featured"
    }));
  }
  // For other categories, use a mix of featured products
  else {
    products = featuredProducts.slice(0, 8);
  }
  
  const handleAddToFavorites = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    toast({
      title: "Added to favorites",
      description: `${title} has been added to your favorites`,
      duration: 3000,
    });
  };
  
  const handleProductClick = (title: string) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/product/${slug}`);
  };
  
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-6 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.history.back()}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
          </div>
          
          {/* Hero Section */}
          <div className="relative h-40 sm:h-60 md:h-80 mb-8 rounded-lg overflow-hidden">
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h1 className="text-2xl md:text-4xl font-serif mb-2">{category.name}</h1>
              <p className="text-sm md:text-base">{category.productCount} products</p>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          {/* Filters and Sort (mockup) */}
          <div className="flex flex-wrap justify-between items-center mb-6">
            <div className="flex space-x-2 mb-4 sm:mb-0 overflow-x-auto pb-2">
              <Button variant="outline" size="sm">All</Button>
              <Button variant="outline" size="sm">New</Button>
              <Button variant="outline" size="sm">Featured</Button>
              <Button variant="outline" size="sm">Bestsellers</Button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Sort by:</span>
              <select className="text-sm border rounded-md p-1 dark:bg-background dark:border-gray-700">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
                <option>Rating</option>
              </select>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow dark:bg-card"
                onClick={() => handleProductClick(product.title)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge className="absolute top-2 left-2 font-medium text-xs dark:bg-primary dark:text-primary-foreground">
                      {product.badge}
                    </Badge>
                  )}
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="absolute top-2 right-2 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 dark:text-white rounded-full h-8 w-8 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={(e) => handleAddToFavorites(e, product.title)}
                  >
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                </div>
                <CardContent className="p-3">
                  <h3 className="font-medium text-sm line-clamp-1 dark:text-gray-100">{product.title}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <p className="font-medium text-sm etsy-price">{product.price}</p>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs ml-1 dark:text-gray-300">{product.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="mt-10 text-center">
            <Button variant="outline" onClick={() => toast({
              title: "Loading more products",
              description: "Additional products would load here",
              duration: 2000,
            })}>
              Load More
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Category;
