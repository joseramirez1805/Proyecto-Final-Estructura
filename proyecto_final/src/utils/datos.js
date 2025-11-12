const hombres = [
  { id: 101, name: "Camiseta Sport", category: "Hombres", subcategory: "Ropa", price: 29, oldPrice: 39, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=60", badge: "discount" },
  { id: 102, name: "Pantalón Jogger", category: "Hombres", subcategory: "Ropa", price: 49, oldPrice: null, image: "https://images.unsplash.com/photo-1520975914199-1d4b4a3b9f9b?auto=format&fit=crop&w=800&q=60", badge: null },
  { id: 103, name: "Zapatos Casual", category: "Hombres", subcategory: "Zapatos", price: 79, oldPrice: 99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60", badge: null },
  { id: 104, name: "Sudadera Cozy", category: "Hombres", subcategory: "Ropa", price: 49, oldPrice: 79, image: "https://images.unsplash.com/photo-1514995669114-1d9b8b4a8d9a?auto=format&fit=crop&w=800&q=60", badge: "discount" },
  { id: 105, name: "Abrigo Ligero", category: "Hombres", subcategory: "Abrigos", price: 99, oldPrice: 129, image: "https://images.unsplash.com/photo-1520975698513-8f6b06d8658e?auto=format&fit=crop&w=800&q=60", badge: null },
  { id: 106, name: "Botines Urbanos", category: "Hombres", subcategory: "Zapatos", price: 119, oldPrice: null, image: "https://images.unsplash.com/photo-1519741494147-0f3e5b4f3b6d?auto=format&fit=crop&w=800&q=60", badge: "new" },

  // nuevos muchos productos - HOMBRES
  { id: 107, name: "Camisa Formal Slim", category: "Hombres", subcategory: "Ropa", price: 39, oldPrice: 59, image: "https://images.unsplash.com/photo-1520975914199-1d4b4a3b9f9b?auto=format&fit=crop&w=800&q=60" },
  { id: 108, name: "Short Deportivo", category: "Hombres", subcategory: "Ropa", price: 24, oldPrice: null, image: "https://images.unsplash.com/photo-1520975923085-1d7b2b6b6f6f?auto=format&fit=crop&w=800&q=60" },
  { id: 109, name: "Zapatillas Running Pro", category: "Hombres", subcategory: "Zapatos", price: 129, oldPrice: 159, image: "https://images.unsplash.com/photo-1600180758894-2f7d3c6b9c3b?auto=format&fit=crop&w=800&q=60", badge: "new" },
  { id: 110, name: "Cazadora Vaquera", category: "Hombres", subcategory: "Chaquetas", price: 89, oldPrice: 109, image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=60" },
  { id: 111, name: "Calcetines Pack x5", category: "Hombres", subcategory: "Accesorios", price: 12, oldPrice: null, image: "https://images.unsplash.com/photo-1520975698513-8f6b06d8658e?auto=format&fit=crop&w=800&q=60" },
  { id: 112, name: "Chaqueta Impermeable", category: "Hombres", subcategory: "Chaquetas", price: 129, oldPrice: 159, image: "https://images.unsplash.com/photo-1520975914199-1d4b4a3b9f9b?auto=format&fit=crop&w=800&q=60" },
  { id: 113, name: "Parka Invierno", category: "Hombres", subcategory: "Abrigos", price: 149, oldPrice: 199, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=60" },
  { id: 114, name: "Mochila Urbana", category: "Hombres", subcategory: "Accesorios", price: 79, oldPrice: null, image: "https://images.unsplash.com/photo-1532634896-26909d0d6b5b?auto=format&fit=crop&w=800&q=60" }
];

const mujeres = [
  { id: 201, name: "Vestido Floral", category: "Mujeres", subcategory: "Ropa", price: 69, oldPrice: 99, image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=60", badge: "discount" },
  { id: 202, name: "Top Casual", category: "Mujeres", subcategory: "Ropa", price: 25, oldPrice: null, image: "https://images.unsplash.com/photo-1520975923085-1d7b2b6b6f6f?auto=format&fit=crop&w=800&q=60", badge: null },
  { id: 203, name: "Sandalias", category: "Mujeres", subcategory: "Zapatos", price: 39, oldPrice: null, image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=60", badge: null },
  { id: 204, name: "Pantalones Casual Mujer", category: "Mujeres", subcategory: "Ropa", price: 64.99, oldPrice: null, image: "https://images.unsplash.com/photo-1520975698519-3a7c3e1b4b46?auto=format&fit=crop&w=800&q=60", badge: null },
  { id: 205, name: "Tacones Elegantes", category: "Mujeres", subcategory: "Zapatos", price: 94.99, oldPrice: 129.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60", badge: 27 },

  // nuevos muchos productos - MUJERES
  { id: 206, name: "Blusa Seda", category: "Mujeres", subcategory: "Ropa", price: 49.99, oldPrice: 69.99, image: "https://images.unsplash.com/photo-1520975914199-1d4b4a3b9f9b?auto=format&fit=crop&w=800&q=60" },
  { id: 207, name: "Falda Midi", category: "Mujeres", subcategory: "Ropa", price: 39.99, oldPrice: null, image: "https://images.unsplash.com/photo-1520975923085-1d7b2b6b6f6f?auto=format&fit=crop&w=800&q=60" },
  { id: 208, name: "Botines Mujer", category: "Mujeres", subcategory: "Zapatos", price: 119.99, oldPrice: 149.99, image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=60" },
  { id: 209, name: "Chaqueta de Cuero", category: "Mujeres", subcategory: "Chaquetas", price: 159.99, oldPrice: 199.99, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=60" },
  { id: 210, name: "Bolso Tote", category: "Mujeres", subcategory: "Accesorios", price: 89.99, oldPrice: null, image: "https://images.unsplash.com/photo-1520975923085-1d7b2b6b6f6f?auto=format&fit=crop&w=800&q=60" },
  { id: 211, name: "Bikini Verano", category: "Mujeres", subcategory: "Ropa", price: 34.99, oldPrice: null, image: "https://images.unsplash.com/photo-1541807084-5c52b6b9a3d4?auto=format&fit=crop&w=800&q=60" }
];

const accesorios = [
  { id: 301, name: "Sombrero Panamá", category: "Accesorios", subcategory: "Accesorios", price: 44.99, isNew: true, image: "https://images.unsplash.com/photo-1532634896-26909d0d6b5b?auto=format&fit=crop&w=800&q=60", badge: "new" },
  { id: 302, name: "Cinturón Cuero Premium", category: "Accesorios", subcategory: "Accesorios", price: 39.99, image: "https://images.unsplash.com/photo-1505740106531-4243f3831e5d?auto=format&fit=crop&w=800&q=60", badge: null },
  { id: 303, name: "Reloj Minimal", category: "Accesorios", subcategory: "Accesorios", price: 129, oldPrice: null, image: "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=800&q=60", badge: "new" },
  { id: 304, name: "Gafas de Sol", category: "Accesorios", subcategory: "Accesorios", price: 69.99, image: "https://images.unsplash.com/photo-1541807084-5c52b6b9a3d4?auto=format&fit=crop&w=800&q=60", badge: null },
  { id: 305, name: "Bolso Clásico", category: "Accesorios", subcategory: "Accesorios", price: 89.99, image: "https://images.unsplash.com/photo-1520975923085-1d7b2b6b6f6f?auto=format&fit=crop&w=800&q=60", badge: null },

  // nuevos muchos productos - ACCESORIOS
  { id: 306, name: "Guantes de Cuero", category: "Accesorios", subcategory: "Accesorios", price: 49.99, image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=60" },
  { id: 307, name: "Auriculares Bluetooth", category: "Accesorios", subcategory: "Accesorios", price: 89.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60" },
  { id: 308, name: "Pulsera Minimal", category: "Accesorios", subcategory: "Accesorios", price: 29.99, image: "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=800&q=60" },
  { id: 309, name: "Funda Móvil", category: "Accesorios", subcategory: "Accesorios", price: 19.99, image: "https://images.unsplash.com/photo-1520975698513-8f6b06d8658e?auto=format&fit=crop&w=800&q=60" }
];

const ofertas = [
  { id: 401, name: "Sudadera Oferta", category: "Ofertas", subcategory: "Ropa", price: 39, oldPrice: 79, image: "https://images.unsplash.com/photo-1514995669114-1d9b8b4a8d9a?auto=format&fit=crop&w=800&q=60", badge: "discount" },
  { id: 402, name: "Tenis 50% OFF", category: "Ofertas", subcategory: "Zapatos", price: 45, oldPrice: 90, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60", badge: "discount" },
  { id: 403, name: "Pack Accesorios -20%", category: "Ofertas", subcategory: "Accesorios", price: 59.99, oldPrice: 74.99, image: "https://images.unsplash.com/photo-1520975698513-8f6b06d8658e?auto=format&fit=crop&w=800&q=60", badge: "discount" },

  // nuevas ofertas
  { id: 404, name: "Chaqueta Outlet", category: "Ofertas", subcategory: "Chaquetas", price: 69, oldPrice: 149, image: "https://images.unsplash.com/photo-1520975914199-1d4b4a3b9f9b?auto=format&fit=crop&w=800&q=60", badge: "discount" },
  { id: 405, name: "Sandalias Summer Sale", category: "Ofertas", subcategory: "Zapatos", price: 19.99, oldPrice: 49.99, image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=60", badge: "discount" }
];

// inicio debe referenciar productos que existen en las secciones
const inicio = [
  hombres[2],    // Zapatos Casual (Hombres)
  hombres[5],    // Botines Urbanos
  hombres[9],    // Zapatillas Running Pro (id 109)
  mujeres[0],    // Vestido Floral
  mujeres[4],    // Tacones Elegantes
  mujeres[6],    // Botines Mujer (id 208)
  accesorios[0], // Sombrero Panamá
  accesorios[2], // Reloj Minimal
  accesorios[6], // Pulsera Minimal (id 308)
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
  accesorios: ["todas", "Accesorios"],
  ofertas: ["todas", "Ropa", "Zapatos", "Accesorios", "Chaquetas"]
};
