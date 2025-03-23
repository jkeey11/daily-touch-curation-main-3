
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollingImages from "@/components/ScrollingImages";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { 
  featuredProducts, 
  categories, 
  collections, 
  testimonials 
} from "@/data/mockData";

const Index = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    toast({
      title: `Exploring ${category}`,
      description: "Browsing our curated collection",
      duration: 3000,
    });
    
    navigate(`/category/${category.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Featured Products section */}
        <section aria-labelledby="featured-heading" className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 id="featured-heading" className="text-xl md:text-2xl font-serif etsy-title">Featured Products</h2>
              <button 
                onClick={() => navigate('/featured')}
                className="text-sm text-gray-600 hover:underline font-medium"
              >
                View all
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {featuredProducts.slice(0, 3).map((product) => (
                <Card key={product.id} className="overflow-hidden group cursor-pointer etsy-card">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 etsy-badge">{product.badge}</Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium etsy-title mt-2">{product.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                    <div className="flex items-center mt-2">
                      <p className="text-lg font-medium etsy-price">{product.price}</p>
                      <div className="ml-auto flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium ml-1">{product.rating}</span>
                        <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular right now section */}
        <section aria-labelledby="trending-heading" className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 id="trending-heading" className="text-xl md:text-2xl font-serif etsy-title">Popular right now</h2>
              <button 
                onClick={() => navigate('/category/popular')}
                className="text-sm text-gray-600 hover:underline font-medium"
              >
                See all
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.filter(cat => cat.featured).map((category) => (
                <div 
                  key={category.id}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <div className="w-full aspect-square rounded-full overflow-hidden bg-[#FAFAFA] flex items-center justify-center mb-3 hover:bg-[#F5F5F5] transition-colors shadow-md">
                    <div className="w-full h-full overflow-hidden rounded-full">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <span className="text-xs font-medium text-center">{category.name}</span>
                  <span className="text-xs text-gray-500">{category.productCount} products</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section aria-labelledby="collection-heading" className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="collection-heading" className="text-2xl md:text-3xl font-serif etsy-title mb-4">Our Collection</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Explore our carefully selected products designed to elevate your daily life with thoughtful design and craftsmanship.
              </p>
            </div>
            
            <Separator className="mb-12" />
          </div>
          
          <div className="mb-8">
            <ScrollingImages direction="left" speed={40} category="kitchen" />
          </div>
          <div className="mb-8">
            <ScrollingImages direction="right" speed={35} category="decor" />
          </div>
          <div className="mb-16">
            <ScrollingImages direction="left" speed={30} category="stationery" />
          </div>
          
          {/* Additional category */}
          <div className="mb-16">
            <ScrollingImages direction="right" speed={38} category="lighting" />
          </div>
        </section>
        
        {/* Featured shops section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif etsy-title mb-8">Curated by Daily Touch</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {collections.slice(0, 3).map((item, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer etsy-card">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2 bg-[#FDE1D3] text-[#A05C37] hover:bg-[#FDE1D3]/90">{item.badge}</Badge>
                    <h3 className="text-lg font-serif mt-2 etsy-title">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-500">{item.productCount} products</span>
                      <Button variant="link" className="p-0 text-gray-900 font-medium flex items-center group">
                        Shop Collection
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="py-12 md:py-16 bg-[#F8F7FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif etsy-title mb-8 text-center">What Our Customers Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.slice(0, 2).map((testimonial) => (
                <Card key={testimonial.id} className="p-6">
                  <div className="flex items-start">
                    {testimonial.avatar && (
                      <div className="mr-4 flex-shrink-0">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section aria-labelledby="philosophy-heading" className="py-16 bg-[#F1F0FB]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="About Daily Touch" 
                  className="rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div>
                <Badge className="mb-4 bg-[#E5DEFF] text-[#5E42D9] hover:bg-[#E5DEFF]/90">Our Story</Badge>
                <h2 id="philosophy-heading" className="text-3xl font-serif etsy-title mb-4">Our Philosophy</h2>
                <p className="text-gray-600 mb-6">
                  At Daily Touch, we believe in the beauty of everyday objects. Our collection is carefully curated to bring quality design into your daily life, making ordinary moments extraordinary.
                </p>
                <p className="text-gray-600">
                  Each item we select represents our commitment to craftsmanship, sustainability, and timeless design. We partner with artisans and designers who share our values in creating products that are both beautiful and functional.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
