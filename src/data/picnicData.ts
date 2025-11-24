export type Category = "Car Trips" | "Adventure Camps" | "Waterparks" | "Pilgrimage" | "Bus Trips" | "Heritage" | "Kids" | "Gardens" | "Museums" | "Food";

export interface Place {
  id: string;
  name: string;
  category: Category;
  description: string;
  distance?: string;
  link?: string;
}

export const categories: Category[] = [
  "Car Trips",
  "Adventure Camps",
  "Waterparks",
  "Pilgrimage",
  "Bus Trips",
  "Heritage",
  "Kids",
  "Gardens",
  "Museums",
  "Food"
];

export const places: Place[] = [
  // Car Trips
  {
    id: "modhera",
    name: "Modhera Sun Temple",
    category: "Car Trips",
    description: "Famous for its Sun Temple and the stepwell. A historical marvel.",
    distance: "100 km from Ahmedabad",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },
  {
    id: "rani-ki-vav",
    name: "Rani ki Vav",
    category: "Car Trips",
    description: "A UNESCO World Heritage site, this stepwell is a masterpiece of architecture.",
    distance: "125 km from Ahmedabad",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },
  {
    id: "polo-forest",
    name: "Polo Forest",
    category: "Car Trips",
    description: "Ancient ruins nestled in a lush green forest. Great for trekking and photography.",
    distance: "150 km from Ahmedabad",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },
  {
    id: "statue-of-unity",
    name: "Statue of Unity",
    category: "Car Trips",
    description: "The world's tallest statue, dedicated to Sardar Vallabhbhai Patel.",
    distance: "200 km from Ahmedabad",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },
  // Waterparks
  {
    id: "suswa",
    name: "Suswa Waterpark",
    category: "Waterparks",
    description: "A fun waterpark for family and friends.",
    distance: "100 km from Ahmedabad",
    link: "https://myahmedabad.blog/suswa-waterpark-timing-prices-and-things-to-do/"
  },
  {
    id: "swapna-shrushti",
    name: "Swapna Shrushti Waterpark",
    category: "Waterparks",
    description: "Famous waterpark with many rides.",
    distance: "85 km from Ahmedabad",
    link: "https://myahmedabad.blog/swapnashrushti-water-park-and-amarnath-dham/"
  },
  {
    id: "shankus",
    name: "Shanku's Waterpark",
    category: "Waterparks",
    description: "One of the oldest and most popular waterparks.",
    distance: "75 km from Ahmedabad",
    link: "https://myahmedabad.blog/shankus-waterpark/"
  },
  // Heritage
  {
    id: "gandhi-ashram",
    name: "Gandhi Ashram",
    category: "Heritage",
    description: "Historical residence of Mahatma Gandhi.",
    distance: "In Ahmedabad",
    link: "https://myahmedabad.blog/"
  },
  {
    id: "adalaj-stepwell",
    name: "Adalaj Stepwell",
    category: "Heritage",
    description: "A unique Hindu 'water building' and a fine example of Indian architecture.",
    distance: "In Ahmedabad",
    link: "https://myahmedabad.blog/"
  },
  {
    id: "sidi-saiyad",
    name: "Sidi Saiyad Mosque",
    category: "Heritage",
    description: "Famous for its intricate stone lattice work (Jali).",
    distance: "In Ahmedabad",
    link: "https://myahmedabad.blog/"
  },
  // Kids
  {
    id: "science-city",
    name: "Gujarat Science City",
    category: "Kids",
    description: "Science education and entertainment center with IMAX 3D theatre.",
    distance: "In Ahmedabad",
    link: "https://myahmedabad.blog/inside-ahmedabad-places-within-20-kms/gujarat-science-city/"
  },
  {
    id: "fun-blast",
    name: "Fun Blast",
    category: "Kids",
    description: "Sports arena, trampoline park and adventure.",
    distance: "Sindhu Bhawan Road, Ahmedabad",
    link: "https://myahmedabad.blog/fun-blast-sports-arena-sindhubhavan-ahmedabad/"
  },
  // Gardens
  {
    id: "zen-garden",
    name: "Zen Garden",
    category: "Gardens",
    description: "A beautiful Japanese style garden at AMA.",
    distance: "IIM Road, Ahmedabad",
    link: "https://myahmedabad.blog/2021/07/20/zen-garden-in-ahmedabad/"
  },
  {
    id: "parimal-garden",
    name: "Parimal Garden",
    category: "Gardens",
    description: "Recently renovated beautiful garden in the city center.",
    distance: "Ellisbridge, Ahmedabad",
    link: "https://myahmedabad.blog/2023/01/30/parimal-garden/"
  },
  // Museums
  {
    id: "calico-museum",
    name: "Calico Museum of Textiles",
    category: "Museums",
    description: "One of the most celebrated textile museums in the world.",
    distance: "Shahibaug, Ahmedabad",
    link: "https://myahmedabad.blog/"
  },
  {
    id: "auto-world",
    name: "Auto World Vintage Car Museum",
    category: "Museums",
    description: "A museum displaying a large collection of vintage cars.",
    distance: "Kathwada, Ahmedabad",
    link: "https://myahmedabad.blog/"
  },
  // Food
  {
    id: "manek-chowk",
    name: "Manek Chowk",
    category: "Food",
    description: "Famous night street food market.",
    distance: "Old City, Ahmedabad",
    link: "https://myahmedabad.blog/"
  },
  {
    id: "das-khaman",
    name: "Das Khaman",
    category: "Food",
    description: "Famous for its Khaman and other Gujarati snacks.",
    distance: "Multiple locations",
    link: "https://myahmedabad.blog/"
  }
];
