
// Mock data for products, categories, collections and other UI elements

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
  stock: number;
}

export interface CategoryItem {
  id: string;
  name: string;
  image: string;
  productCount: number;
  featured?: boolean;
}

export interface Collection {
  id: number;
  title: string;
  description: string;
  image: string;
  productCount: number;
  badge?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
  category: string;
}

// Featured Products
export const featuredProducts: Product[] = [
  {
    id: 1,
    title: "Ceramic Serving Bowl",
    description: "Handcrafted ceramic bowl with elegant glazing",
    price: "$48.50",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "Featured",
    category: "Kitchen",
    isFeatured: true,
    stock: 15
  },
  {
    id: 2,
    title: "Minimalist Desk Lamp",
    description: "Modern design with adjustable brightness",
    price: "$89.99",
    rating: 4.7,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "Editor's Choice",
    category: "Lighting",
    isFeatured: true,
    stock: 8
  },
  {
    id: 3,
    title: "Leather-Bound Journal",
    description: "Premium journal with handmade paper",
    price: "$32.95",
    rating: 4.9,
    reviews: 213,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
    category: "Stationery",
    isFeatured: true,
    stock: 22
  },
  {
    id: 4,
    title: "Macramé Wall Hanging",
    description: "Handwoven from 100% natural cotton",
    price: "$65.00",
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "Handmade",
    category: "Wall Art",
    isFeatured: true,
    stock: 5
  },
  {
    id: 5,
    title: "Wooden Serving Tray",
    description: "Artisan-crafted from sustainable oak",
    price: "$58.99",
    rating: 4.5,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "New Arrival",
    category: "Kitchen",
    isNew: true,
    isFeatured: true,
    stock: 12
  },
  {
    id: 6,
    title: "Linen Napkin Set",
    description: "Set of 4 stone-washed linen napkins",
    price: "$36.00",
    rating: 4.7,
    reviews: 63,
    image: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "Eco-friendly",
    category: "Kitchen",
    isFeatured: true,
    stock: 18
  }
];

// Categories
export const categories: CategoryItem[] = [
  {
    id: "wall-art",
    name: "Wall Art",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 32,
    featured: true
  },
  {
    id: "home-decor",
    name: "Home Decor",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 48,
    featured: true
  },
  {
    id: "kitchen",
    name: "Kitchen",
    image: "https://images.unsplash.com/photo-1600014896066-48005593e447?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 36,
    featured: true
  },
  {
    id: "lighting",
    name: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 24,
    featured: true
  },
  {
    id: "ceramics",
    name: "Ceramics",
    image: "https://images.unsplash.com/photo-1565193566173-7a0bff4e5390?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 21,
    featured: true
  },
  {
    id: "stationery",
    name: "Stationery",
    image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 18,
    featured: true
  },
  {
    id: "furniture",
    name: "Furniture",
    image: "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 29
  },
  {
    id: "textiles",
    name: "Textiles",
    image: "https://images.unsplash.com/photo-1620812587004-67be696bd397?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 26
  }
];

// Curated Collections
export const collections: Collection[] = [
  {
    id: 1,
    title: "Handcrafted Ceramics",
    description: "Unique pieces made by skilled artisans",
    image: "https://images.unsplash.com/photo-1565193566173-7a0bff4e5390?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 18,
    badge: "Editor's Pick"
  },
  {
    id: 2,
    title: "Modern Lighting",
    description: "Elegant designs for every space",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 24,
    badge: "Editor's Pick"
  },
  {
    id: 3,
    title: "Premium Stationery",
    description: "For the discerning writer and creator",
    image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 16,
    badge: "Editor's Pick"
  },
  {
    id: 4,
    title: "Minimalist Home",
    description: "Less is more with these curated pieces",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 22,
    badge: "Trending"
  },
  {
    id: 5,
    title: "Sustainable Living",
    description: "Eco-friendly products for conscious consumers",
    image: "https://images.unsplash.com/photo-1600014896066-48005593e447?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 29,
    badge: "Sustainable"
  }
];

// Category-specific Products
export const categoryImages = {
  kitchen: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1600014896066-48005593e447?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Ceramic Bowl Set",
      price: "$42.99",
      badge: "Bestseller",
      rating: 4.8,
      reviews: 86
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Wooden Utensils",
      price: "$24.50",
      badge: "Handmade",
      rating: 4.6,
      reviews: 42
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1572107998877-3e93e457f8c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Ceramic Plates Set",
      price: "$56.99",
      badge: "Artisan",
      rating: 4.9,
      reviews: 58
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1567015417694-e8dee045b1fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Kitchen Knives Set",
      price: "$89.99",
      badge: "Professional",
      rating: 4.7,
      reviews: 124
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Copper Cookware",
      price: "$124.50",
      badge: "Premium",
      rating: 4.8,
      reviews: 76
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1593620659273-d6a839499962?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Linen Napkin Set",
      price: "$36.00",
      badge: "Eco-friendly",
      rating: 4.5,
      reviews: 38
    }
  ],
  decor: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Copper Lamp",
      price: "$89.00",
      badge: "Limited",
      rating: 4.7,
      reviews: 62
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1622398925373-3f91b1eba4fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Art Deco Vase",
      price: "$64.99",
      badge: "New",
      rating: 4.6,
      reviews: 28
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Wall Mirror",
      price: "$72.50",
      badge: "Popular",
      rating: 4.8,
      reviews: 94
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1577207989304-fbe2cbf96a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Wooden Desk Set",
      price: "$124.00",
      badge: "Premium",
      rating: 4.9,
      reviews: 47
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Macramé Wall Hanging",
      price: "$58.50",
      badge: "Handcrafted",
      rating: 4.7,
      reviews: 36
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1560005384-0dba34ab6da9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Scented Candles Set",
      price: "$42.00",
      badge: "Bestseller",
      rating: 4.9,
      reviews: 118
    }
  ],
  stationery: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Linen Notebooks",
      price: "$18.99",
      badge: "Eco-friendly",
      rating: 4.6,
      reviews: 52
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Premium Stationery Set",
      price: "$34.50",
      badge: "Bestseller",
      rating: 4.8,
      reviews: 76
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Fountain Pen Collection",
      price: "$79.99",
      badge: "Luxury",
      rating: 4.9,
      reviews: 64
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Leather Journal",
      price: "$42.00",
      badge: "Handcrafted",
      rating: 4.7,
      reviews: 48
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Wax Seal Kit",
      price: "$28.95",
      badge: "Trending",
      rating: 4.5,
      reviews: 32
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Desk Organizer Set",
      price: "$48.00",
      badge: "Popular",
      rating: 4.6,
      reviews: 58
    }
  ],
  lighting: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Pendant Light",
      price: "$118.00",
      badge: "Designer",
      rating: 4.8,
      reviews: 74
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Desk Lamp",
      price: "$86.50",
      badge: "Bestseller",
      rating: 4.7,
      reviews: 92
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1532582783240-66b1dd261686?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Floor Lamp",
      price: "$149.99",
      badge: "Premium",
      rating: 4.9,
      reviews: 46
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "Geometric Wall Light",
      price: "$78.00",
      badge: "Trending",
      rating: 4.6,
      reviews: 38
    }
  ]
};

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emily Chen",
    role: "Interior Designer",
    content: "Daily Touch has transformed how I source products for my clients. The quality is exceptional and the curation is spot on.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Home Enthusiast",
    content: "I've purchased several items from Daily Touch and each one has exceeded my expectations. The attention to detail is remarkable.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Sofia Rodriguez",
    role: "Writer",
    content: "Their stationery collection is a dream. As someone who appreciates fine paper goods, I'm thoroughly impressed with the quality.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 4
  },
  {
    id: 4,
    name: "Marcus Johnson",
    role: "Chef",
    content: "The kitchen items I've purchased from Daily Touch are both beautiful and functional. They've become essential in my daily cooking.",
    rating: 5
  }
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Slow Living",
    excerpt: "Discover how thoughtfully designed spaces can transform your daily routines.",
    date: "June 12, 2023",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Elena Morris",
    category: "Lifestyle"
  },
  {
    id: 2,
    title: "Sustainable Design Choices",
    excerpt: "How to select eco-friendly products without compromising on style.",
    date: "May 28, 2023",
    image: "https://images.unsplash.com/photo-1600014896066-48005593e447?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Thomas Reed",
    category: "Sustainability"
  },
  {
    id: 3,
    title: "The Perfect Home Office",
    excerpt: "Essential items to create a productive and inspiring workspace.",
    date: "April 15, 2023",
    image: "https://images.unsplash.com/photo-1577207989304-fbe2cbf96a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Olivia Bennett",
    category: "Productivity"
  }
];

// Cart mock data
export const cartItems = [
  { id: "prod-1", name: "Ceramic Coffee Mug", price: 24.99, quantity: 2, image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" },
  { id: "prod-2", name: "Brass Table Lamp", price: 129.99, quantity: 1, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" },
  { id: "prod-3", name: "Linen Throw Pillow", price: 42.99, quantity: 2, image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" }
];

// Favorites mock data
export const favoriteItems = [
  { id: "fav-1", name: "Wooden Serving Spoons", price: 34.99, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" },
  { id: "fav-2", name: "Linen Notebook", price: 19.99, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" },
  { id: "fav-3", name: "Pendant Light", price: 89.99, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" },
  { id: "fav-4", name: "Ceramic Vase", price: 56.00, image: "https://images.unsplash.com/photo-1565193566173-7a0bff4e5390?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" }
];
