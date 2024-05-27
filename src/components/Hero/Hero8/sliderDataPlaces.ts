interface Box {
  bgImage: string;
  title: string;
  description?: string;
  href?: string;
}

export const boxes: Box[] = [
  {
    bgImage: "/SliderImagePlaces/hospitals.webp",
    title: "Hospitals",
    description: "Healthy options for patients and staff",
  },
  {
    bgImage: "/SliderImagePlaces/gym.webp",
    title: "Fitness Studios",
    description: "Nutrition options after the workout",
  },
  {
    bgImage: "/SliderImagePlaces/apartmentcomplexes.webp",
    title: "apartment complexes",
    description: "Mini-shop in the building for residents",
  },
  {
    bgImage: "/SliderImagePlaces/VenuesStadiums.webp",
    title: "Venues / Stadien",
    description: "Offer visitors quick snacks and drinks",
  },
  {
    bgImage: "/SliderImagePlaces/airports.webp",
    title: "Airports",
    description: "24/7 catering for travelers",
  },
];
