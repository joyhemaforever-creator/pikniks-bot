export type Category = "Car Trips" | "Adventure Camps" | "Waterparks" | "Pilgrimage" | "Bus Trips";

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
];

export const places: Place[] = [
  // Car Trips
  {
    id: "modhera-rani-ki-vav",
    name: "Modhera Sun Temple, Rani ki Vav, Sidhpur",
    category: "Car Trips",
    description: "Visit the Sun Temple, the UNESCO World Heritage Stepwell, and the architectural marvels of Sidhpur.",
    distance: "100-125 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },
  {
    id: "polo-forest",
    name: "Polo Forest",
    category: "Car Trips",
    description: "Ancient ruins in a lush forest. Ideal for trekking and nature lovers.",
    distance: "150 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },
  {
    id: "statue-of-unity",
    name: "Statue of Unity",
    category: "Car Trips",
    description: "World's tallest statue. A must-visit modern marvel.",
    distance: "200 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },
  {
    id: "lothal-velavadar",
    name: "Lothal & Velavadar",
    category: "Car Trips",
    description: "Harappan archaeological site and Blackbuck Sanctuary.",
    distance: "80-150 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },
  {
    id: "idar-gadh",
    name: "Idar Gadh",
    category: "Car Trips",
    description: "Historical fort on a hill, great for climbing and views.",
    distance: "120 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },
  {
    id: "vadodara-sindhrot",
    name: "Vadodara & Sindhrot",
    category: "Car Trips",
    description: "Visit Vadodara city, Sindhrot check dam, and the giant Baobab tree.",
    distance: "120 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },
  {
    id: "pariyej-khambhat",
    name: "Pariyej & Khambhat",
    category: "Car Trips",
    description: "Wetland for bird watching, historical port city of Khambhat, and Sikotar Mata Mandir.",
    distance: "100 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },
  {
    id: "zanzari-dakor",
    name: "Zanzari Waterfall & Dakor",
    category: "Car Trips",
    description: "Scenic waterfall and the famous Ranchhodraiji Temple.",
    distance: "100 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },

  // Adventure Camps
  {
    id: "bakor-aranakya",
    name: "Bakor - Aranakya Farm",
    category: "Adventure Camps",
    description: "Camping in Bakor with trekking and waterfall visits.",
    distance: "150 km",
    link: "http://pikniks.in/bakor-campsites.html"
  },
  {
    id: "bakor-mahuvan",
    name: "Bakor - Mahuvan Farm",
    category: "Adventure Camps",
    description: "Farm stay and camping experience in Bakor.",
    distance: "150 km",
    link: "http://pikniks.in/bakor-campsites.html"
  },
  {
    id: "bakor-nature",
    name: "Bakor Nature Camp",
    category: "Adventure Camps",
    description: "Nature camp experience in the woods of Bakor.",
    distance: "150 km",
    link: "http://pikniks.in/bakor-campsites.html"
  },
  {
    id: "orsang-camp",
    name: "Orsang Camp",
    category: "Adventure Camps",
    description: "Adventure camp with zipline and other activities.",
    distance: "175 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },
  {
    id: "camp-dilly",
    name: "Camp Dilly",
    category: "Adventure Camps",
    description: "Camping and adventure activities.",
    distance: "125 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },
  {
    id: "dev-camp",
    name: "Dev Camp",
    category: "Adventure Camps",
    description: "Eco-tourism campsite.",
    distance: "150 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },

  // Waterparks
  {
    id: "tirupati-rushivan",
    name: "Tirupati Rushivan",
    category: "Waterparks",
    description: "Adventure park and waterpark.",
    distance: "80 km",
    link: "http://pikniks.in/all-waterparks-around-ahmedabad.html"
  },
  {
    id: "swapna-shrushti",
    name: "Swapna Shrushti Waterpark",
    category: "Waterparks",
    description: "Famous waterpark with village theme.",
    distance: "80 km",
    link: "http://pikniks.in/all-waterparks-around-ahmedabad.html"
  },
  {
    id: "bliss-aqua",
    name: "Bliss Aqua World",
    category: "Waterparks",
    description: "Modern waterpark near Mehsana.",
    distance: "85 km",
    link: "http://pikniks.in/all-waterparks-around-ahmedabad.html"
  },
  {
    id: "shankus",
    name: "Shanku's Waterpark",
    category: "Waterparks",
    description: "One of the oldest and most popular waterparks.",
    distance: "75 km",
    link: "http://pikniks.in/all-waterparks-around-ahmedabad.html"
  },
  {
    id: "7s-waterpark",
    name: "7s Waterpark",
    category: "Waterparks",
    description: "Waterpark with various slides.",
    distance: "35 km",
    link: "http://pikniks.in/all-waterparks-around-ahmedabad.html"
  },
  {
    id: "suswa",
    name: "Suswa Waterpark",
    category: "Waterparks",
    description: "Fun waterpark for family.",
    distance: "100 km",
    link: "http://pikniks.in/all-waterparks-around-ahmedabad.html"
  },
  {
    id: "aqualand",
    name: "Aqualand Waterpark",
    category: "Waterparks",
    description: "Waterpark attractions.",
    distance: "100 km",
    link: "http://pikniks.in/all-waterparks-around-ahmedabad.html"
  },
  {
    id: "waterville",
    name: "Water Ville Waterpark",
    category: "Waterparks",
    description: "Waterpark in Himmatnagar.",
    distance: "85 km",
    link: "http://pikniks.in/all-waterparks-around-ahmedabad.html"
  },
  {
    id: "shree-ganesha",
    name: "Shree Ganesha Fun World",
    category: "Waterparks",
    description: "Adventure and waterpark.",
    distance: "60 km",
    link: "http://pikniks.in/all-waterparks-around-ahmedabad.html"
  },
  {
    id: "splash",
    name: "Splash Waterpark",
    category: "Waterparks",
    description: "Nearest waterpark to Ahmedabad.",
    distance: "14 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },

  // Pilgrimage
  {
    id: "ambaji-poshina",
    name: "Ambaji & Poshina",
    category: "Pilgrimage",
    description: "Visit the famous Ambaji temple and Poshina.",
    distance: "190 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },
  {
    id: "mahudi-sapteshwar",
    name: "Mahudi & Sapteshwar",
    category: "Pilgrimage",
    description: "Ghantakarna Mahavir temple at Mahudi and Sapteshwar Mahadev.",
    distance: "150 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },
  {
    id: "shamlaji-meshwo",
    name: "Shamlaji & Meshwo Dam",
    category: "Pilgrimage",
    description: "Famous Vishnu temple at Shamlaji.",
    distance: "150 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },
  {
    id: "dakor-galteshwar",
    name: "Dakor & Galteshwar",
    category: "Pilgrimage",
    description: "Ranchhodraiji Temple at Dakor and Galteshwar Mahadev.",
    distance: "100 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },

  // Bus Trips
  {
    id: "bus-tour-inquiry",
    name: "Sunday Bus Tours",
    category: "Bus Trips",
    description: "Special bus tours available on Sundays. Please contact for current schedule.",
    distance: "Varies",
    link: "http://pikniks.in"
  }
];
