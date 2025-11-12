export const SAMPLE = {
  inicio: [
    { id: 1, name: "Tenis Runner", category: "Hombres", subcategory: "Zapatos", price: 59, oldPrice: 79, image: "https://images.unsplash.com/photo-1519741494147-0f3e5b4f3b6d?auto=format&fit=crop&w=800&q=60", badge: "new" },
    { id: 2, name: "Chaqueta Urbana", category: "Mujeres", subcategory: "Ropa", price: 89, oldPrice: null, image: "https://images.unsplash.com/photo-1520975698513-8f6b06d8658e?auto=format&fit=crop&w=800&q=60", badge: null },
    { id: 3, name: "Gorra Snapback", category: "Accesorios", subcategory: "Accesorios", price: 19, oldPrice: null, image: "https://images.unsplash.com/photo-1541807084-5c52b6b9a3d4?auto=format&fit=crop&w=800&q=60", badge: null },
    { id: 4, name: "Sudadera Cozy", category: "Hombres", subcategory: "Ropa", price: 49, oldPrice: 79, image: "https://images.unsplash.com/photo-1514995669114-1d9b8b4a8d9a?auto=format&fit=crop&w=800&q=60", badge: "discount" }
  ],
  hombres: [
    { id: 11, name: "Camiseta Sport", category: "Hombres", subcategory: "Ropa", price: 29, oldPrice: 39, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=60", badge: "discount" },
    { id: 12, name: "Pantalón Jogger", category: "Hombres", subcategory: "Ropa", price: 49, oldPrice: null, image: "https://images.unsplash.com/photo-1520975914199-1d4b4a3b9f9b?auto=format&fit=crop&w=800&q=60", badge: null },
    { id: 13, name: "Zapatos Casual", category: "Hombres", subcategory: "Zapatos", price: 79, oldPrice: 99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60", badge: null }
  ],
  mujeres: [
    { id: 21, name: "Vestido Floral", category: "Mujeres", subcategory: "Ropa", price: 69, oldPrice: 99, image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=60", badge: "discount" },
    { id: 22, name: "Top Casual", category: "Mujeres", subcategory: "Ropa", price: 25, oldPrice: null, image: "https://images.unsplash.com/photo-1520975923085-1d7b2b6b6f6f?auto=format&fit=crop&w=800&q=60", badge: null },
    { id: 23, name: "Sandalias", category: "Mujeres", subcategory: "Zapatos", price: 39, oldPrice: null, image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=60", badge: null }
  ],
  accesorios: [
    { id: 31, name: "Reloj Minimal", category: "Accesorios", subcategory: "Accesorios", price: 129, oldPrice: null, image: "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=800&q=60", badge: "new" },
    { id: 32, name: "Cinturón Cuero", category: "Accesorios", subcategory: "Accesorios", price: 35, oldPrice: null, image: "https://images.unsplash.com/photo-1520975923085-1d7b2b6b6f6f?auto=format&fit=crop&w=800&q=60", badge: null }
  ],
  ofertas: [
    { id: 41, name: "Sudadera Oferta", category: "Ofertas", subcategory: "Ropa", price: 39, oldPrice: 79, image: "https://images.unsplash.com/photo-1514995669114-1d9b8b4a8d9a?auto=format&fit=crop&w=800&q=60", badge: "discount" },
    { id: 42, name: "Tenis 50% OFF", category: "Ofertas", subcategory: "Zapatos", price: 45, oldPrice: 90, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60", badge: "discount" }
  ]
};

export const SUB_OPTIONS = {
  inicio: ["todas", "Ropa", "Zapatos", "Accesorios"],
  hombres: ["todas", "Ropa", "Zapatos"],
  mujeres: ["todas", "Ropa", "Zapatos"],
  accesorios: ["todas", "Accesorios"],
  ofertas: ["todas", "Ropa", "Zapatos", "Accesorios"]
};
