const hombres = [
  { id: 101, name: "Camiseta Sport", category: "Hombres", subcategory: "Ropa", price: 29, oldPrice: 39, image: "https://picsum.photos/seed/hombres-101/800/800", badge: "discount" },
  { id: 102, name: "Pantalón Jogger", category: "Hombres", subcategory: "Ropa", price: 49, oldPrice: null, image: "https://picsum.photos/seed/hombres-102/800/800", badge: null },
  { id: 103, name: "Zapatos Casual", category: "Hombres", subcategory: "Zapatos", price: 79, oldPrice: 99, image: "https://picsum.photos/seed/hombres-103/800/800", badge: null },
  { id: 104, name: "Sudadera Cozy", category: "Hombres", subcategory: "Ropa", price: 49, oldPrice: 79, image: "https://picsum.photos/seed/hombres-104/800/800", badge: "discount" },
  { id: 105, name: "Abrigo Ligero", category: "Hombres", subcategory: "Abrigos", price: 99, oldPrice: 129, image: "https://picsum.photos/seed/hombres-105/800/800", badge: null },
  { id: 106, name: "Botines Urbanos", category: "Hombres", subcategory: "Zapatos", price: 119, oldPrice: null, image: "https://picsum.photos/seed/hombres-106/800/800", badge: "new" },
  { id: 107, name: "Camisa Formal Slim", category: "Hombres", subcategory: "Ropa", price: 39, oldPrice: 59, image: "https://picsum.photos/seed/hombres-107/800/800" },
  { id: 108, name: "Short Deportivo", category: "Hombres", subcategory: "Ropa", price: 24, oldPrice: null, image: "https://picsum.photos/seed/hombres-108/800/800" },
  { id: 109, name: "Zapatillas Running Pro", category: "Hombres", subcategory: "Zapatos", price: 129, oldPrice: 159, image: "https://picsum.photos/seed/hombres-109/800/800", badge: "new" },
  { id: 110, name: "Cazadora Vaquera", category: "Hombres", subcategory: "Chaquetas", price: 89, oldPrice: 109, image: "https://picsum.photos/seed/hombres-110/800/800" },
  { id: 111, name: "Calcetines Pack x5", category: "Hombres", subcategory: "Accesorios", price: 12, oldPrice: null, image: "https://picsum.photos/seed/hombres-111/800/800" },
  { id: 112, name: "Chaqueta Impermeable", category: "Hombres", subcategory: "Chaquetas", price: 129, oldPrice: 159, image: "https://picsum.photos/seed/hombres-112/800/800" },
  { id: 113, name: "Parka Invierno", category: "Hombres", subcategory: "Abrigos", price: 149, oldPrice: 199, image: "https://picsum.photos/seed/hombres-113/800/800" },
  { id: 114, name: "Mochila Urbana", category: "Hombres", subcategory: "Accesorios", price: 79, oldPrice: null, image: "https://picsum.photos/seed/hombres-114/800/800" }
];

const mujeres = [
  { id: 201, name: "Vestido Floral", category: "Mujeres", subcategory: "Ropa", price: 69, oldPrice: 99, image: "https://picsum.photos/seed/mujeres-201/800/800", badge: "discount" },
  { id: 202, name: "Top Casual", category: "Mujeres", subcategory: "Ropa", price: 25, oldPrice: null, image: "https://picsum.photos/seed/mujeres-202/800/800", badge: null },
  { id: 203, name: "Sandalias", category: "Mujeres", subcategory: "Zapatos", price: 39, oldPrice: null, image: "https://picsum.photos/seed/mujeres-203/800/800", badge: null },
  { id: 204, name: "Pantalones Casual Mujer", category: "Mujeres", subcategory: "Ropa", price: 64.99, oldPrice: null, image: "https://picsum.photos/seed/mujeres-204/800/800", badge: null },
  { id: 205, name: "Tacones Elegantes", category: "Mujeres", subcategory: "Zapatos", price: 94.99, oldPrice: 129.99, image: "https://picsum.photos/seed/mujeres-205/800/800", badge: 27 },
  { id: 206, name: "Blusa Seda", category: "Mujeres", subcategory: "Ropa", price: 49.99, oldPrice: 69.99, image: "https://picsum.photos/seed/mujeres-206/800/800" },
  { id: 207, name: "Falda Midi", category: "Mujeres", subcategory: "Ropa", price: 39.99, oldPrice: null, image: "https://picsum.photos/seed/mujeres-207/800/800" },
  { id: 208, name: "Botines Mujer", category: "Mujeres", subcategory: "Zapatos", price: 119.99, oldPrice: 149.99, image: "https://picsum.photos/seed/mujeres-208/800/800" },
  { id: 209, name: "Chaqueta de Cuero", category: "Mujeres", subcategory: "Chaquetas", price: 159.99, oldPrice: 199.99, image: "https://picsum.photos/seed/mujeres-209/800/800" },
  { id: 210, name: "Bolso Tote", category: "Mujeres", subcategory: "Accesorios", price: 89.99, oldPrice: null, image: "https://picsum.photos/seed/mujeres-210/800/800" },
  { id: 211, name: "Bikini Verano", category: "Mujeres", subcategory: "Ropa", price: 34.99, oldPrice: null, image: "https://picsum.photos/seed/mujeres-211/800/800" }
];

const accesorios = [
  /* Manillas */
  { id: 301, name: "Pulsera Oro", category: "Accesorios", subcategory: "Manillas", price: 49.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-301/800/800" },
  { id: 302, name: "Pulsera Cuero", category: "Accesorios", subcategory: "Manillas", price: 29.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-302/800/800" },
  { id: 303, name: "Pulsera Deportiva", category: "Accesorios", subcategory: "Manillas", price: 19.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-303/800/800" },
  { id: 304, name: "Pulsera Minimal", category: "Accesorios", subcategory: "Manillas", price: 34.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-304/800/800" },

  /* Relojes */
  { id: 305, name: "Reloj Clásico", category: "Accesorios", subcategory: "Relojes", price: 129.99, oldPrice: 179.99, image: "https://picsum.photos/seed/accesorios-305/800/800" },
  { id: 306, name: "Reloj Deportivo", category: "Accesorios", subcategory: "Relojes", price: 99.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-306/800/800" },
  { id: 307, name: "Reloj Smart", category: "Accesorios", subcategory: "Relojes", price: 199.99, oldPrice: 249.99, image: "https://picsum.photos/seed/accesorios-307/800/800" },
  { id: 308, name: "Reloj Minimal", category: "Accesorios", subcategory: "Relojes", price: 89.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-308/800/800" },

  /* Bolsos */
  { id: 309, name: "Bolso Tote", category: "Accesorios", subcategory: "Bolsos", price: 79.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-309/800/800" },
  { id: 310, name: "Bolso Bandolera", category: "Accesorios", subcategory: "Bolsos", price: 69.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-310/800/800" },
  { id: 311, name: "Clutch Elegante", category: "Accesorios", subcategory: "Bolsos", price: 59.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-311/800/800" },
  { id: 312, name: "Mochila Mini", category: "Accesorios", subcategory: "Bolsos", price: 49.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-312/800/800" },

  /* Gafas */
  { id: 313, name: "Gafas Aviador", category: "Accesorios", subcategory: "Gafas", price: 69.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-313/800/800" },
  { id: 314, name: "Gafas Redondas", category: "Accesorios", subcategory: "Gafas", price: 59.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-314/800/800" },
  { id: 315, name: "Gafas Cat Eye", category: "Accesorios", subcategory: "Gafas", price: 79.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-315/800/800" },
  { id: 316, name: "Gafas Sport", category: "Accesorios", subcategory: "Gafas", price: 49.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-316/800/800" }
];

const ofertas = [
  { id: 401, name: "Sudadera Oferta", category: "Ofertas", subcategory: "Ropa", price: 39, oldPrice: 79, image: "https://picsum.photos/seed/ofertas-401/800/800", badge: "discount" },
  { id: 402, name: "Tenis 50% OFF", category: "Ofertas", subcategory: "Zapatos", price: 45, oldPrice: 90, image: "https://picsum.photos/seed/ofertas-402/800/800", badge: "discount" },
  { id: 403, name: "Pack Accesorios -20%", category: "Ofertas", subcategory: "Accesorios", price: 59.99, oldPrice: 74.99, image: "https://picsum.photos/seed/ofertas-403/800/800", badge: "discount" },
  { id: 404, name: "Chaqueta Outlet", category: "Ofertas", subcategory: "Chaquetas", price: 69, oldPrice: 149, image: "https://picsum.photos/seed/ofertas-404/800/800", badge: "discount" },
  { id: 405, name: "Sandalias Summer Sale", category: "Ofertas", subcategory: "Zapatos", price: 19.99, oldPrice: 49.99, image: "https://picsum.photos/seed/ofertas-405/800/800", badge: "discount" }
];

const inicio = [
  hombres[0],    // Camiseta Sport
  hombres[2],    // Zapatos Casual
  hombres[3],    // Sudadera Cozy
  hombres[5],    // Botines Urbanos
  hombres[8],    // Zapatillas Running Pro
  hombres[10],   // Calcetines Pack x5
  hombres[13],   // Mochila Urbana

  mujeres[0],    // Vestido Floral
  mujeres[2],    // Sandalias
  mujeres[4],    // Tacones Elegantes
  mujeres[6],    // Botines Mujer
  mujeres[5],    // Bolso Tote (si existe)

  accesorios[0], // Pulsera Oro (Manillas)
  accesorios[1], // Pulsera Cuero (Manillas)
  accesorios[4], // Bolso Tote (Bolsos)
  accesorios[8], // Reloj Deportivo (Relojes)
  accesorios[12],// Gafas Aviador (Gafas)
  accesorios[15],// Gafas Sport (Gafas)

  ofertas[0],    // Sudadera Oferta
  ofertas[1]     // Tenis 50% OFF
];

export const SAMPLE = {
  inicio,
  hombres,
  mujeres,
  accesorios,
  ofertas
};

export const SUB_OPTIONS = {
  inicio: ["todas", "Ropa", "Zapatos", "Accesorios", "Chaquetas", "Abrigos"],
  hombres: ["todas", "Ropa", "Zapatos", "Chaquetas", "Abrigos", "Accesorios"],
  mujeres: ["todas", "Ropa", "Zapatos", "Chaquetas", "Accesorios"],
  accesorios: ["todas", "Manillas", "Relojes", "Bolsos", "Gafas"],
  ofertas: ["todas", "Ropa", "Zapatos", "Accesorios", "Chaquetas"]
};
