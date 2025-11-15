const PRODUCTS = {
  Hombres: {
    Ropa: [
      { id: 101, name: "Camiseta Sport", category: "Hombres", subcategory: "Ropa", price: 29, oldPrice: 39, image: "/images/products/101.jpg", badge: "discount" },
      { id: 102, name: "Pantalón Jogger", category: "Hombres", subcategory: "Ropa", price: 49, oldPrice: null, image: "/images/products/102.jpg", badge: null },
      { id: 104, name: "Sudadera Cozy", category: "Hombres", subcategory: "Ropa", price: 49, oldPrice: 79, image: "/images/products/104.jpg", badge: "discount" },
      { id: 107, name: "Camisa Formal Slim", category: "Hombres", subcategory: "Ropa", price: 39, oldPrice: 59, image: "/images/products/107.jpg" },
      { id: 108, name: "Short Deportivo", category: "Hombres", subcategory: "Ropa", price: 24, oldPrice: null, image: "/images/products/108.jpg" }
    ],
    Zapatos: [
      { id: 103, name: "Zapatos Casual", category: "Hombres", subcategory: "Zapatos", price: 79, oldPrice: 99, image: "/images/products/103.jpg", badge: null },
      { id: 106, name: "Botines Urbanos", category: "Hombres", subcategory: "Zapatos", price: 119, oldPrice: null, image: "/images/products/106.jpg", badge: "new" },
      { id: 109, name: "Zapatillas Running Pro", category: "Hombres", subcategory: "Zapatos", price: 129, oldPrice: 159, image: "/images/products/109.jpg", badge: "new" }
    ],
    Chaquetas: [
      { id: 110, name: "Cazadora Vaquera", category: "Hombres", subcategory: "Chaquetas", price: 89, oldPrice: 109, image: "https://picsum.photos/seed/hombres-110/800/800" },
      { id: 112, name: "Chaqueta Impermeable", category: "Hombres", subcategory: "Chaquetas", price: 129, oldPrice: 159, image: "https://picsum.photos/seed/hombres-112/800/800" }
    ],
    Abrigos: [
      { id: 105, name: "Abrigo Ligero", category: "Hombres", subcategory: "Abrigos", price: 99, oldPrice: 129, image: "https://picsum.photos/seed/hombres-105/800/800", badge: null },
      { id: 113, name: "Parka Invierno", category: "Hombres", subcategory: "Abrigos", price: 149, oldPrice: 199, image: "https://picsum.photos/seed/hombres-113/800/800" }
    ],
    Accesorios: [
      { id: 111, name: "Calcetines Pack x5", category: "Hombres", subcategory: "Accesorios", price: 12, oldPrice: null, image: "/images/products/111.jpg" },
      { id: 114, name: "Mochila Urbana", category: "Hombres", subcategory: "Accesorios", price: 79, oldPrice: null, image: "/images/products/114.jpg" }
    ]
  },

  Mujeres: {
    Ropa: [
      { id: 201, name: "Vestido Floral", category: "Mujeres", subcategory: "Ropa", price: 69, oldPrice: 99, image: "/images/products/201.jpg", badge: "discount" },
      { id: 202, name: "Top Casual", category: "Mujeres", subcategory: "Ropa", price: 25, oldPrice: null, image: "https://picsum.photos/seed/mujeres-202/800/800", badge: null },
      { id: 204, name: "Pantalones Casual Mujer", category: "Mujeres", subcategory: "Ropa", price: 64.99, oldPrice: null, image: "https://picsum.photos/seed/mujeres-204/800/800", badge: null },
      { id: 206, name: "Blusa Seda", category: "Mujeres", subcategory: "Ropa", price: 49.99, oldPrice: 69.99, image: "https://picsum.photos/seed/mujeres-206/800/800" },
      { id: 207, name: "Falda Midi", category: "Mujeres", subcategory: "Ropa", price: 39.99, oldPrice: null, image: "https://picsum.photos/seed/mujeres-207/800/800" },
      { id: 211, name: "Bikini Verano", category: "Mujeres", subcategory: "Ropa", price: 34.99, oldPrice: null, image: "https://picsum.photos/seed/mujeres-211/800/800" }
    ],
    Zapatos: [
      { id: 203, name: "Sandalias", category: "Mujeres", subcategory: "Zapatos", price: 39, oldPrice: null, image: "/images/products/203.jpg", badge: null },
      { id: 205, name: "Tacones Elegantes", category: "Mujeres", subcategory: "Zapatos", price: 94.99, oldPrice: 129.99, image: "/images/products/205.jpg", badge: 27 },
      { id: 208, name: "Botines Mujer", category: "Mujeres", subcategory: "Zapatos", price: 119.99, oldPrice: 149.99, image: "/images/products/208.jpg" }
    ],
    Chaquetas: [
      { id: 209, name: "Chaqueta de Cuero", category: "Mujeres", subcategory: "Chaquetas", price: 159.99, oldPrice: 199.99, image: "https://picsum.photos/seed/mujeres-209/800/800" }
    ],
    Accesorios: [
      { id: 210, name: "Bolso Tote", category: "Mujeres", subcategory: "Accesorios", price: 89.99, oldPrice: null, image: "/images/products/210.jpg" }
    ]
  },

  Accesorios: {
    Manillas: [
      { id: 301, name: "Pulsera Oro", category: "Accesorios", subcategory: "Manillas", price: 49.99, oldPrice: null, image: "/images/products/301.jpg" },
      { id: 302, name: "Pulsera Cuero", category: "Accesorios", subcategory: "Manillas", price: 29.99, oldPrice: null, image: "/images/products/302.jpg" },
      { id: 303, name: "Pulsera Deportiva", category: "Accesorios", subcategory: "Manillas", price: 19.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-303/800/800" },
      { id: 304, name: "Pulsera Minimal", category: "Accesorios", subcategory: "Manillas", price: 34.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-304/800/800" }
    ],
    Relojes: [
      { id: 305, name: "Reloj Clásico", category: "Accesorios", subcategory: "Relojes", price: 129.99, oldPrice: 179.99, image: "https://picsum.photos/seed/accesorios-305/800/800" },
      { id: 306, name: "Reloj Deportivo", category: "Accesorios", subcategory: "Relojes", price: 99.99, oldPrice: null, image: "/images/products/306.jpg" },
      { id: 307, name: "Reloj Smart", category: "Accesorios", subcategory: "Relojes", price: 199.99, oldPrice: 249.99, image: "https://picsum.photos/seed/accesorios-307/800/800" },
      { id: 308, name: "Reloj Minimal", category: "Accesorios", subcategory: "Relojes", price: 89.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-308/800/800" }
    ],
    Bolsos: [
      { id: 309, name: "Bolso Tote", category: "Accesorios", subcategory: "Bolsos", price: 79.99, oldPrice: null, image: "/images/products/309.jpg" },
      { id: 310, name: "Bolso Bandolera", category: "Accesorios", subcategory: "Bolsos", price: 69.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-310/800/800" },
      { id: 311, name: "Clutch Elegante", category: "Accesorios", subcategory: "Bolsos", price: 59.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-311/800/800" },
      { id: 312, name: "Mochila Mini", category: "Accesorios", subcategory: "Bolsos", price: 49.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-312/800/800" }
    ],
    Gafas: [
      { id: 313, name: "Gafas Aviador", category: "Accesorios", subcategory: "Gafas", price: 69.99, oldPrice: null, image: "/images/products/313.jpg" },
      { id: 314, name: "Gafas Redondas", category: "Accesorios", subcategory: "Gafas", price: 59.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-314/800/800" },
      { id: 315, name: "Gafas Cat Eye", category: "Accesorios", subcategory: "Gafas", price: 79.99, oldPrice: null, image: "https://picsum.photos/seed/accesorios-315/800/800" },
      { id: 316, name: "Gafas Sport", category: "Accesorios", subcategory: "Gafas", price: 49.99, oldPrice: null, image: "/images/products/316.jpg" }
    ]
  },

  Ofertas: {
    Ropa: [
      { id: 401, name: "Sudadera Oferta", category: "Ofertas", subcategory: "Ropa", price: 39, oldPrice: 79, image: "/images/products/401.jpg", badge: "discount" }
    ],
    Zapatos: [
      { id: 402, name: "Tenis 50% OFF", category: "Ofertas", subcategory: "Zapatos", price: 45, oldPrice: 90, image: "/images/products/402.jpg", badge: "discount" },
      { id: 405, name: "Sandalias Summer Sale", category: "Ofertas", subcategory: "Zapatos", price: 19.99, oldPrice: 49.99, image: "https://picsum.photos/seed/ofertas-405/800/800", badge: "discount" }
    ],
    Accesorios: [
      { id: 403, name: "Pack Accesorios -20%", category: "Ofertas", subcategory: "Accesorios", price: 59.99, oldPrice: 74.99, image: "https://picsum.photos/seed/ofertas-403/800/800", badge: "discount" }
    ],
    Chaquetas: [
      { id: 404, name: "Chaqueta Outlet", category: "Ofertas", subcategory: "Chaquetas", price: 69, oldPrice: 149, image: "https://picsum.photos/seed/ofertas-404/800/800", badge: "discount" }
    ]
  }
};

const hombres = Object.values(PRODUCTS.Hombres).flat();
const mujeres = Object.values(PRODUCTS.Mujeres).flat();
const accesorios = Object.values(PRODUCTS.Accesorios).flat();
const ofertas = Object.values(PRODUCTS.Ofertas).flat();

function findById(id) {
  return [hombres, mujeres, accesorios, ofertas].flat().find(p => p.id === id) || null;
}

const inicio = [
  findById(101),    // Camiseta Sport
  findById(103),    // Zapatos Casual
  findById(104),    // Sudadera Cozy
  findById(106),    // Botines Urbanos
  findById(109),    // Zapatillas Running Pro
  findById(111),    // Calcetines Pack x5
  findById(114),    // Mochila Urbana

  findById(201),    // Vestido Floral
  findById(203),    // Sandalias
  findById(205),    // Tacones Elegantes
  findById(208),    // Botines Mujer
  findById(210),    // Bolso Tote (Mujeres)

  findById(301), // Pulsera Oro (Manillas)
  findById(302), // Pulsera Cuero (Manillas)
  findById(309), // Bolso Tote (Bolsos)
  findById(306), // Reloj Deportivo (Relojes)
  findById(313),// Gafas Aviador (Gafas)
  findById(316),// Gafas Sport (Gafas)

  findById(401),    // Sudadera Oferta
  findById(402)     // Tenis 50% OFF
].filter(Boolean);

export const SAMPLE = {
  inicio,
  hombres,
  mujeres,
  accesorios,
  ofertas
};

// Generate SUB_OPTIONS from PRODUCTS structure
export const SUB_OPTIONS = {
  inicio: ["todas", ...new Set([...Object.keys(PRODUCTS.Hombres), ...Object.keys(PRODUCTS.Mujeres)])],
  hombres: ["todas", ...Object.keys(PRODUCTS.Hombres)],
  mujeres: ["todas", ...Object.keys(PRODUCTS.Mujeres)],
  accesorios: ["todas", ...Object.keys(PRODUCTS.Accesorios)],
  ofertas: ["todas", ...Object.keys(PRODUCTS.Ofertas)]
};
