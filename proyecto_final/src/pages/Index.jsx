import React, { useState, useMemo } from "react";
import Header from "../components/Header";
import CategoryGrid from "../components/CategoryGrid";

export default function Index() {
  const [section, setSection] = useState("inicio");
  const [sub, setSub] = useState("todas");

  const sample = useMemo(
    () => ({
      inicio: [
        {
          id: 1,
          name: "Tenis Runner",
          category: "Hombres",
          subcategory: "Zapatos",
          price: 59,
          oldPrice: 79,
          image:
            "https://images.unsplash.com/photo-1519741494147-0f3e5b4f3b6d?auto=format&fit=crop&w=800&q=60",
          badge: "new",
        },
        {
          id: 2,
          name: "Chaqueta Urbana",
          category: "Mujeres",
          subcategory: "Ropa",
          price: 89,
          oldPrice: null,
          image:
            "https://images.unsplash.com/photo-1520975698513-8f6b06d8658e?auto=format&fit=crop&w=800&q=60",
          badge: null,
        },
        {
          id: 3,
          name: "Gorra Snapback",
          category: "Accesorios",
          subcategory: "Accesorios",
          price: 19,
          oldPrice: null,
          image:
            "https://images.unsplash.com/photo-1541807084-5c52b6b9a3d4?auto=format&fit=crop&w=800&q=60",
          badge: null,
        },
        {
          id: 4,
          name: "Sudadera Cozy",
          category: "Hombres",
          subcategory: "Ropa",
          price: 49,
          oldPrice: 79,
          image:
            "https://images.unsplash.com/photo-1514995669114-1d9b8b4a8d9a?auto=format&fit=crop&w=800&q=60",
          badge: "discount",
        },
      ],
      hombres: [
        {
          id: 11,
          name: "Camiseta Sport",
          category: "Hombres",
          subcategory: "Ropa",
          price: 29,
          oldPrice: 39,
          image:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=60",
          badge: "discount",
        },
        {
          id: 12,
          name: "Pantalón Jogger",
          category: "Hombres",
          subcategory: "Ropa",
          price: 49,
          oldPrice: null,
          image:
            "https://images.unsplash.com/photo-1520975914199-1d4b4a3b9f9b?auto=format&fit=crop&w=800&q=60",
          badge: null,
        },
        {
          id: 13,
          name: "Zapatos Casual",
          category: "Hombres",
          subcategory: "Zapatos",
          price: 79,
          oldPrice: 99,
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60",
          badge: null,
        },
      ],
      mujeres: [
        {
          id: 21,
          name: "Vestido Floral",
          category: "Mujeres",
          subcategory: "Ropa",
          price: 69,
          oldPrice: 99,
          image:
            "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=60",
          badge: "discount",
        },
        {
          id: 22,
          name: "Top Casual",
          category: "Mujeres",
          subcategory: "Ropa",
          price: 25,
          oldPrice: null,
          image:
            "https://images.unsplash.com/photo-1520975923085-1d7b2b6b6f6f?auto=format&fit=crop&w=800&q=60",
          badge: null,
        },
        {
          id: 23,
          name: "Sandalias",
          category: "Mujeres",
          subcategory: "Zapatos",
          price: 39,
          oldPrice: null,
          image:
            "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=60",
          badge: null,
        },
      ],
      accesorios: [
        {
          id: 31,
          name: "Reloj Minimal",
          category: "Accesorios",
          subcategory: "Accesorios",
          price: 129,
          oldPrice: null,
          image:
            "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=800&q=60",
          badge: "new",
        },
        {
          id: 32,
          name: "Cinturón Cuero",
          category: "Accesorios",
          subcategory: "Accesorios",
          price: 35,
          oldPrice: null,
          image:
            "https://images.unsplash.com/photo-1520975923085-1d7b2b6b6f6f?auto=format&fit=crop&w=800&q=60",
          badge: null,
        },
      ],
      ofertas: [
        {
          id: 41,
          name: "Sudadera Oferta",
          category: "Ofertas",
          subcategory: "Ropa",
          price: 39,
          oldPrice: 79,
          image:
            "https://images.unsplash.com/photo-1514995669114-1d9b8b4a8d9a?auto=format&fit=crop&w=800&q=60",
          badge: "discount",
        },
        {
          id: 42,
          name: "Tenis 50% OFF",
          category: "Ofertas",
          subcategory: "Zapatos",
          price: 45,
          oldPrice: 90,
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60",
          badge: "discount",
        },
      ],
    }),
    []
  );

  const sections = [
    { key: "inicio", label: "Inicio" },
    { key: "hombres", label: "Hombres" },
    { key: "mujeres", label: "Mujeres" },
    { key: "accesorios", label: "Accesorios" },
    { key: "ofertas", label: "Ofertas" },
  ];

  const subOptions = {
    inicio: ["todas", "Ropa", "Zapatos", "Accesorios"],
    hombres: ["todas", "Ropa", "Zapatos"],
    mujeres: ["todas", "Ropa", "Zapatos"],
    accesorios: ["todas", "Accesorios"],
    ofertas: ["todas", "Ropa", "Zapatos", "Accesorios"],
  };

  const handleSelect = (key) => {
    setSection(key);
    setSub("todas");
  };

  const items = useMemo(() => {
    const base = sample[section] || [];
    if (sub === "todas") return base;
    return base.filter((i) => i.subcategory === sub);
  }, [section, sub, sample]);

  return (
    <div>
      <Header onSelect={handleSelect} active={section} />
      {section === "inicio" && (
        <section className="banner-section">
          <div className="container banner-text">
            <small>Nueva colección</small>
            <h1>Bienvenido a la tienda</h1>
            <p>
              Descubre nuestros productos destacados y promociones exclusivas.
            </p>
          </div>
        </section>
      )}

      <main className="main container">
        <h1>{sections.find((s) => s.key === section)?.label}</h1>
        <p className="subtitle">
          Explora nuestra selección en{" "}
          {sections.find((s) => s.key === section)?.label}
        </p>

        {}
        <div className="filters" aria-hidden>
          {sections.map((s) => (
            <button
              key={s.key}
              className={s.key === section ? "active" : ""}
              onClick={() => handleSelect(s.key)}
            >
              {s.label}
            </button>
          ))}
        </div>

        {}
        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            marginBottom: 18,
          }}
        >
          {subOptions[section].map((opt) => (
            <button
              key={opt}
              onClick={() => setSub(opt)}
              style={{
                padding: "8px 12px",
                borderRadius: 10,
                border:
                  opt === sub
                    ? "2px solid #0b0b1d"
                    : "1px solid #e6e6e6",
                background: opt === sub ? "#0b0b1d" : "#fff",
                color: opt === sub ? "#fff" : "#111",
                cursor: "pointer",
              }}
            >
              {opt === "todas" ? "Todas" : opt}
            </button>
          ))}
        </div>

        <CategoryGrid items={items} />
      </main>
    </div>
  );
}
