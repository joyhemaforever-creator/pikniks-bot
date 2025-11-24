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
        distance: "Near Ahmedabad",
        link: "http://pikniks.in"
    },
    // Add more placeholders as needed
];
