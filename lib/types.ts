export type Property = {
  id: string;
  title: string;
  operation: "Arriendo" | "Venta";
  price: string;
  location: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  image: string;
};
