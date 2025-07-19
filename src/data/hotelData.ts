export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  images: string[];
  amenities: string[];
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
  userImage?: string;
}

export interface HotelRating {
  source: string;
  score: number;
  maxScore: number;
  reviewCount: number;
  logo?: string;
}

export interface Hotel {
  id: string;
  name: string;
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    }
  };
  overview: string;
  description: string;
  images: string[];
  mainImage: string;
  tagline: string;
  rooms: Room[];
  reviews: Review[];
  ratings: HotelRating[];
  features: {
    name: string;
    icon: string;
  }[];
  amenities: string[];
}

export const dummyHotel: Hotel = {
  id: "can-ferrereta",
  name: "Can Ferrereta",
  tagline: "A magical retreat in one of Mallorca's least-discovered areas",
  location: {
    address: "Carrer XX Setembre 13",
    city: "Santanyí",
    state: "Mallorca",
    country: "Spain",
    postalCode: "07650",
    coordinates: {
      lat: 39.35718,
      lng: 3.12951
    }
  },
  overview: "Built by Soldevila-Ferrer Studio, this hidden hotel brings together high-quality Mallorcan architecture, a curated art collection, and understated yet luxurious interiors featuring pieces by contemporary Spanish designers—all just a stone's throw from the Mediterranean.",
  description: "Housed in a historic 17th-century mansion, Can Ferrereta represents the epitome of understated luxury in the charming village of Santanyí. The hotel's architecture preserves the original structure while integrating contemporary design elements that pay homage to the island's rich cultural heritage.\n\nThe 32 rooms and suites offer a tranquil retreat, each uniquely designed with natural materials, muted colors, and locally sourced furnishings. The hotel's restaurant, OCRE, serves Mediterranean cuisine with a focus on local, seasonal ingredients, while the garden bar offers refreshing cocktails by the pool.\n\nThe hotel's spa features a hammam, sauna, and indoor pool, providing guests with a serene space for relaxation and rejuvenation. The lush gardens, filled with native plants and ancient olive trees, create a peaceful backdrop for your Mallorcan escape.",
  mainImage: "/images/hotels/can-ferrereta/main.jpg",
  images: [
    "/images/hotels/can-ferrereta/main.jpg",
    "/images/hotels/can-ferrereta/lobby.jpg",
    "/images/hotels/can-ferrereta/pool.jpg",
    "/images/hotels/can-ferrereta/restaurant.jpg",
    "/images/hotels/can-ferrereta/garden.jpg",
    "/images/hotels/can-ferrereta/spa.jpg"
  ],
  rooms: [
    {
      id: "deluxe-room",
      name: "Deluxe Room",
      description: "Peaceful retreat featuring natural light and authentic Mallorcan design with premium bedding and a private terrace.",
      price: 350,
      capacity: 2,
      size: 30,
      images: [
        "/images/hotels/can-ferrereta/rooms/deluxe-1.jpg",
        "/images/hotels/can-ferrereta/rooms/deluxe-2.jpg"
      ],
      amenities: ["Air Conditioning", "King Bed", "Free WiFi", "Rainfall Shower", "Luxury Toiletries"]
    },
    {
      id: "premium-room",
      name: "Premium Room",
      description: "Elegant accommodation with spacious living area, curated artwork and stunning views of the garden.",
      price: 450,
      capacity: 2,
      size: 40,
      images: [
        "/images/hotels/can-ferrereta/rooms/premium-1.jpg",
        "/images/hotels/can-ferrereta/rooms/premium-2.jpg"
      ],
      amenities: ["Air Conditioning", "King Bed", "Free WiFi", "Soaking Tub", "Nespresso Machine"]
    },
    {
      id: "suite-room",
      name: "Heritage Suite",
      description: "Expansive suite with separate living area, historic architectural details and private balcony overlooking the village.",
      price: 650,
      capacity: 3,
      size: 60,
      images: [
        "/images/hotels/can-ferrereta/rooms/suite-1.jpg",
        "/images/hotels/can-ferrereta/rooms/suite-2.jpg"
      ],
      amenities: ["Air Conditioning", "King Bed", "Free WiFi", "Separate Living Area", "Premium Sound System", "Walk-in Closet"]
    }
  ],
  reviews: [
    {
      id: "rev1",
      user: "James Wilson",
      rating: 5,
      comment: "This is one of the best hotels in rural Spain. Brilliant rooms and fantastic team.",
      date: "April 2023",
      userImage: "/images/avatars/james.jpg"
    },
    {
      id: "rev2",
      user: "Sophia Lee",
      rating: 5,
      comment: "Beautiful hotel that exudes a sense of calm as soon as you walk through the door.",
      date: "June 2023",
      userImage: "/images/avatars/sophia.jpg"
    },
    {
      id: "rev3",
      user: "Daniel Martin",
      rating: 5,
      comment: "Our stay at the hotel was exactly what we had hoped for - tranquil and luxurious.",
      date: "August 2023",
      userImage: "/images/avatars/daniel.jpg"
    }
  ],
  ratings: [
    {
      source: "Quality Assured",
      score: 4.9,
      maxScore: 5,
      reviewCount: 49,
      logo: "/images/ratings/sh-logo.png"
    },
    {
      source: "Small Club Rating",
      score: 5,
      maxScore: 5,
      reviewCount: 5
    },
    {
      source: "TripAdvisor",
      score: 4.9,
      maxScore: 5,
      reviewCount: 49,
      logo: "/images/ratings/tripadvisor.png"
    }
  ],
  features: [
    {
      name: "Pool",
      icon: "/images/icons/pool.svg"
    },
    {
      name: "Fine dining",
      icon: "/images/icons/dining.svg"
    },
    {
      name: "Spa services",
      icon: "/images/icons/spa.svg"
    },
    {
      name: "Air conditioning",
      icon: "/images/icons/ac.svg"
    }
  ],
  amenities: [
    "Free WiFi", 
    "Swimming pool", 
    "Spa", 
    "Restaurant", 
    "Room service", 
    "Garden", 
    "Concierge service",
    "Fitness center",
    "Laundry service",
    "Airport transfer"
  ]
};