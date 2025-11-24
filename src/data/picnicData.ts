export type Category = "Car Trips" | "Adventure Camps" | "Waterparks" | "Pilgrimage" | "Bus Trips" | "Heritage" | "Kids" | "Gardens" | "Museums" | "Food" | "Amusement Parks";

export interface PricingPackage {
  name: string;
  price: string;
  details?: string;
}

export interface Place {
  id: string;
  name: string;
  category: Category;
  description: string;
  distance?: string;
  link?: string;
  pricing?: PricingPackage[];
}

export interface GeneralInfo {
  title: string;
  items: string[];
  links?: { text: string; url: string }[];
}

export const generalInfo: GeneralInfo[] = [
  {
    title: "Corporate & School Clients",
    items: [
      "Unipath Laboratory",
      "Wipfli",
      "Saffron formulation pvt ltd",
      "Indian Airforce - Vadsar",
      "ISRO Ahmedabad",
      "Shifa Hospital - Surat",
      "Contis Pharma",
      "Ridham Enterprises",
      "TCI Express",
      "Institute of Advanced Research - Gandhinagar",
      "SVP Hospital - Ahmedabad",
      "Javer Jivan Mehta School - Navsari"
    ]
  },
  {
    title: "Travel News",
    items: [
      "Moon Trails - Glow Garden at Riverfront Opened (July 2025)",
      "Patang Hotel (Rotating Restaurant) Restarted (Oct 2023)",
      "Sabarmati Rivercruise (Akshar Cruise) started",
      "Atal Footbridge opened",
      "Regional Science Museum & Dinosaur Park at Patan",
      "Nadabet Parade & Adventure Activities at Indo-Pak Border",
      "Ambaji Gabbar Laser Show (Daily 7 PM)",
      "Robotic Cafe at Vastrapur",
      "Helicopter Ride in Ahmedabad",
      "Zen Garden at AMA",
      "Penguins at Science City Aquarium"
    ]
  }
];

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
  "Food",
  "Amusement Parks"
];

export const places: Place[] = [
  // Car Trips
  {
    id: "modhera-rani-ki-vav",
    name: "Modhera Sun Temple, Rani ki Vav, Sidhpur",
    category: "Car Trips",
    description: "Visit the Sun Temple, the UNESCO World Heritage Stepwell, and the architectural marvels of Sidhpur.",
    distance: "100-125 km",
    link: "https://myahmedabad.blog/portfolio/modhera-patan-sidhpur/",
    pricing: [
      { name: "Sedan (Max 4)", price: "₹ 4,300/Car" },
      { name: "Ertiga (Max 6)", price: "₹ 5,300/Car" },
      { name: "Crysta (Max 7)", price: "₹ 7,400/Car" }
    ]
  },
  {
    id: "polo-forest",
    name: "Polo Forest",
    category: "Car Trips",
    description: "Ancient ruins in a lush forest. Ideal for trekking and nature lovers.",
    distance: "150 km",
    link: "https://myahmedabad.blog/portfolio/polo-forest-from-ahmedabad-one-day-tour/",
    pricing: [
      { name: "Sedan (Max 4)", price: "₹ 4,400/Car" },
      { name: "Ertiga (Max 6)", price: "₹ 5,600/Car" },
      { name: "Crysta (Max 7)", price: "₹ 6,700/Car" },
      { name: "With Food (Adult)", price: "₹ 850-1000/Person", details: "Breakfast to Hi-Tea/Dinner" }
    ]
  },
  {
    id: "statue-of-unity",
    name: "Statue of Unity",
    category: "Car Trips",
    description: "World's tallest statue. A must-visit modern marvel. Includes Viewing Gallery, Valley of Flowers, Laser Show, and Sardar Sarovar Dam.",
    distance: "200 km",
    link: "https://pikniks.in/statue-of-unity-from-ahmedabad.html",
    pricing: [
      { name: "Sedan (Max 4)", price: "₹ 5,500/Car + Tickets" },
      { name: "Ertiga (Max 6)", price: "₹ 6,900/Car + Tickets" },
      { name: "Crysta (Max 7)", price: "₹ 8,800/Car + Tickets" },
      { name: "Basic Ticket", price: "₹ 380/Adult, ₹ 230/Child", details: "Entry, Museum, Valley of Flowers, Laser Show, Bus, Dam" },
      { name: "Viewing Gallery", price: "₹ 380 + ₹ 400 (Approx)", details: "Includes access to 153m Viewing Gallery" },
      { name: "Express Ticket", price: "Higher Rate", details: "Skip the queue for Viewing Gallery" }
    ]
  },
  {
    id: "nalsarovar",
    name: "Nalsarovar Bird Sanctuary",
    category: "Car Trips",
    description: "Largest wetland bird sanctuary in Gujarat. Boating and bird watching.",
    distance: "64 km",
    link: "https://myahmedabad.blog/portfolio/nalsarovar-varnindra-dham-little-rann-of-kutchh/",
    pricing: [
      { name: "Sedan (Max 4)", price: "₹ 3,700/Car" },
      { name: "Ertiga (Max 6)", price: "₹ 4,600/Car" },
      { name: "Crysta (Max 7)", price: "₹ 5,700/Car" },
      { name: "Boating", price: "₹ 1,800-2,000/Boat (Max 6)" }
    ]
  },
  {
    id: "velavadar-blackbuck",
    name: "Velavadar Blackbuck National Park",
    category: "Car Trips",
    description: "Grassland national park famous for Blackbucks and Wolves.",
    distance: "145 km",
    link: "https://myahmedabad.blog/portfolio/velavadar-blackbuck-national-park/",
    pricing: [
      { name: "Sedan (Max 4)", price: "₹ 4,000/Car" },
      { name: "Ertiga (Max 6)", price: "₹ 5,000/Car" },
      { name: "Crysta (Max 7)", price: "₹ 6,400/Car" },
      { name: "Safari (1-1.5 hrs)", price: "₹ 2,000 + Entry Fees" }
    ]
  },
  {
    id: "ahmedabad-sightseeing",
    name: "Ahmedabad Sightseeing (Darshan)",
    category: "Car Trips",
    description: "Full day sightseeing of Heritage City Ahmedabad including Akshardham.",
    distance: "Local",
    link: "https://myahmedabad.blog/portfolio/ahmedabad-akshardham-one-day-tour/",
    pricing: [
      { name: "Sedan (Max 4)", price: "₹ 4,000/Car" },
      { name: "Ertiga (Max 6)", price: "₹ 4,600/Car" },
      { name: "Crysta (Max 7)", price: "₹ 5,800/Car" }
    ]
  },
  {
    id: "taranga-dharoi-vadnagar",
    name: "Taranga Hill, Dharoi Dam, Vadnagar",
    category: "Car Trips",
    description: "Historical and scenic trip covering Jain temples, Dam and Heritage town Vadnagar.",
    distance: "140 km",
    link: "https://myahmedabad.blog/portfolio/tarangahill-dharoi-vadnagar/",
    pricing: [
      { name: "Sedan (Max 4)", price: "₹ 4,000/Car" },
      { name: "Ertiga (Max 6)", price: "₹ 5,000/Car" },
      { name: "Crysta (Max 7)", price: "₹ 6,400/Car" }
    ]
  },
  {
    id: "pavagadh-jambughoda",
    name: "Pavagadh, Champaner & Jambughoda",
    category: "Car Trips",
    description: "Pilgrimage to Kalika Mata, UNESCO Heritage Site Champaner, and Jambughoda forest.",
    distance: "150 km",
    link: "https://myahmedabad.blog/portfolio/pavagadh-jambughoda-hathanimata-waterfall/",
    pricing: [
      { name: "Sedan (Max 4)", price: "₹ 4,500/Car" },
      { name: "Ertiga (Max 6)", price: "₹ 5,500/Car" },
      { name: "Crysta (Max 7)", price: "₹ 7,000/Car" }
    ]
  },
  {
    id: "balasinor-dinosaur",
    name: "Balasinor Dinosaur Fossil Park",
    category: "Car Trips",
    description: "India's Jurassic Park. Visit the Fossil Park and Museum.",
    distance: "100 km",
    link: "https://myahmedabad.blog/portfolio/balasinor-dinosaur-fossil-park-one-day-tour/",
    pricing: [
      { name: "Sedan (Max 4)", price: "₹ 3,900/Car" },
      { name: "Ertiga (Max 6)", price: "₹ 4,900/Car" },
      { name: "Crysta (Max 7)", price: "₹ 6,200/Car" },
      { name: "Museum Entry", price: "₹ 500/Adult (Approx)" }
    ]
  },
  {
    id: "jessore-sloth-bear",
    name: "Jessore Sloth Bear Sanctuary",
    category: "Car Trips",
    description: "Trekking and wildlife sanctuary famous for Sloth Bears.",
    distance: "180 km",
    link: "https://myahmedabad.blog/portfolio/jessore-sloth-bear-sanctuary-one-day-trip/",
    pricing: [
      { name: "Sedan (Max 4)", price: "₹ 4,800/Car" },
      { name: "Ertiga (Max 6)", price: "₹ 6,000/Car" }
    ]
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
    link: "http://pikniks.in/bakor-campsites.html",
    pricing: [
      { name: "One Day Picnic", price: "₹ 900/Adult, ₹ 600/Child", details: "Breakfast, Lunch, Hi-Tea, Dinner, Activities" },
      { name: "Overnight (Non-AC)", price: "₹ 1,400/Adult, ₹ 980/Child", details: "All meals + Night stay" },
      { name: "Overnight (AC)", price: "₹ 1,700/Adult, ₹ 1,100/Child", details: "All meals + Night stay in AC room" }
    ]
  },
  {
    id: "orsang-camp",
    name: "Orsang Camp",
    category: "Adventure Camps",
    description: "Adventure camp with zipline and other activities.",
    distance: "175 km",
    link: "https://myahmedabad.blog/portfolio/orsang-camp-one-day-picnic-from-ahmedabad/",
    pricing: [
      { name: "Falcon (No Dinner)", price: "₹ 1,200/Adult, ₹ 800/Child" },
      { name: "Finch (With Dinner)", price: "₹ 1,450/Adult, ₹ 1,000/Child" },
      { name: "Car Only (Sedan)", price: "₹ 4,700" }
    ]
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
    link: "https://myahmedabad.blog/portfolio/devs-camp-one-day-picnic-from-ahmedabad/"
  },

  // Waterparks
  {
    id: "aatapi-wonderland",
    name: "Aatapi Wonderland",
    category: "Amusement Parks",
    description: "Theme park with rides, waterpark, and laser show near Vadodara.",
    distance: "135 km",
    link: "https://myahmedabad.blog/aatapi-wonderland-park-ajwa-vadodara/",
    pricing: [
      { name: "Gold Package", price: "₹ 1,000/Adult, ₹ 700/Child", details: "All Rides" },
      { name: "Fast Track", price: "₹ 1,900/Adult, ₹ 1,300/Child" },
      { name: "Park Entry", price: "₹ 55/Person" }
    ]
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
    id: "shankus",
    name: "Shanku's Waterpark",
    category: "Waterparks",
    description: "One of the oldest and most popular waterparks.",
    distance: "75 km",
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
    id: "splash",
    name: "Splash Waterpark",
    category: "Waterparks",
    description: "Nearest waterpark to Ahmedabad.",
    distance: "14 km",
    link: "http://pikniks.in/one-day-picnic-places-around-ahmedabad.html"
  },

  // Pilgrimage
  {
    id: "koliyak-nishkalank",
    name: "Koliyak Nishkalank Mahadev",
    category: "Pilgrimage",
    description: "Temple in the sea, visible only during low tide.",
    distance: "220 km",
    link: "https://myahmedabad.blog/portfolio/koliyak-nishkalank-mahadev-khodiyar-mandir-one-day-trip/",
    pricing: [
      { name: "Sedan (Max 4)", price: "₹ 5,500/Car" },
      { name: "Ertiga (Max 6)", price: "₹ 6,800/Car" },
      { name: "Crysta (Max 7)", price: "₹ 8,900/Car" }
    ]
  },
  {
    id: "poshina-safari",
    name: "Poshina Jeep Safari & Ambaji",
    category: "Pilgrimage",
    description: "Jeep safari in Poshina and visit to Ambaji Temple.",
    distance: "190 km",
    link: "https://myahmedabad.blog/portfolio/one-day-trip-to-poshina-with-poshina-safari-near-ambaji/",
    pricing: [
      { name: "Jeep Safari", price: "₹ 2,800-3,000/Jeep" },
      { name: "Car Package (Sedan)", price: "₹ 7,900 (Inc. Safari)" }
    ]
  },
  {
    id: "ambaji-poshina",
    name: "Ambaji & Poshina",
    category: "Pilgrimage",
    description: "Visit the famous Ambaji temple and Poshina.",
    distance: "190 km",
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
    id: "sundarvan-zoo",
    name: "Sundarvan Mini Zoo",
    category: "Kids",
    description: "Nature discovery centre and mini zoo. Snake shows on Sundays.",
    distance: "In Ahmedabad",
    link: "https://myahmedabad.blog/sundarvan-ahmedabad-timing-things-to-do/",
    pricing: [
      { name: "Adult", price: "₹ 70" },
      { name: "Child", price: "₹ 50" }
    ]
  },
  {
    id: "science-city",
    name: "Gujarat Science City",
    category: "Kids",
    description: "Science education and entertainment center with IMAX 3D theatre.",
    distance: "In Ahmedabad",
    link: "https://myahmedabad.blog/inside-ahmedabad-places-within-20-kms/gujarat-science-city/"
  },
  {
    id: "nadabet",
    name: "Nadabet Indo-Pak Border",
    category: "Kids",
    description: "Visit the border, watch the parade, and enjoy adventure activities.",
    distance: "240 km",
    link: "https://myahmedabad.blog/portfolio/one-day-trip-to-nadabet-from-ahmedabad/",
    pricing: [
      { name: "Entry Fee", price: "₹ 100/Adult, ₹ 50/Child" },
      { name: "Adventure Activities", price: "Varies (₹ 100 - ₹ 375)" }
    ]
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
    id: "spectra-museum",
    name: "Spectra Museum",
    category: "Museums",
    description: "1st Art and Technology Museum in Ahmedabad.",
    distance: "Science City Road",
    link: "https://myahmedabad.blog/spectra-museum-ahmedabad/",
    pricing: [
      { name: "Individual", price: "₹ 2,122" },
      { name: "VIP", price: "₹ 5,450" }
    ]
  },
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
