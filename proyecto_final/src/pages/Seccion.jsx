import React, { useMemo } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Cabecera from "../components/Cabecera";
import GridCategorias from "../components/GridCategorias";
import { SAMPLE, SUB_OPTIONS } from "../utils/datos";
import Banner from "../components/Banner";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Seccion() {
  const { section = "inicio" } = useParams();
  const query = useQuery();
  const navigate = useNavigate();
  const sub = query.get("sub") || "todas";
  const q = (query.get("q") || "").trim();

  const items = useMemo(() => {
    // si hay query de búsqueda, buscar en todos los productos y devolver coincidencias
    if (q) {
      const map = new Map();
      Object.keys(SAMPLE).forEach((k) => {
        // ignorar la colección 'inicio' para evitar duplicados indirectos
        if (k === 'inicio') return;
        (SAMPLE[k] || []).forEach((p) => {
          if (!map.has(p.id)) map.set(p.id, p);
        });
      });
      const all = Array.from(map.values());
      const qLower = q.toLowerCase();
      return all.filter((p) => {
        return (
          (p.name || '').toLowerCase().includes(qLower) ||
          (p.category || '').toLowerCase().includes(qLower) ||
          (p.subcategory || '').toLowerCase().includes(qLower)
        );
      });
    }

    const base = SAMPLE[section] || [];
    if (sub === "todas" || sub === "Todos" || sub === "todas") return base;
    return base.filter((i) => i.subcategory && i.subcategory.toLowerCase() === sub.toLowerCase());
  }, [section, sub, q]);

  const subOptions = SUB_OPTIONS[section] || ["todas"];

  const handleSetSub = (s) => {
    const search = (s === "todas" || s === "Todos") ? "" : `?sub=${encodeURIComponent(s)}`;
    navigate(`/seccion/${section}${search}`, { replace: true });
  };

  return (
    <div>
      <Cabecera />

      {section === "inicio" && !q ? (
        <Banner />
      ) : null}

      <main className="main container">
        <h1 style={{ textTransform: "capitalize" }}>
          {q ? `Resultados` : (section === "inicio" ? "Inicio" : section)}
        </h1>
        <p className="subtitle">
          {q ? `Resultados de búsqueda para "${q}" — ${items.length} productos` : 'Descubre nuestra selección cuidadosamente elegida de los mejores productos'}
        </p>

        {}
  {/* ocultar filtros si estamos en búsqueda o en inicio */}
  {(!q && section !== "inicio") && (
          <>
            <div className="filters" aria-hidden>
              {Object.keys(SAMPLE).map((key) => (
                <button
                  key={key}
                  className={key === section ? "active" : ""}
                  onClick={() => navigate(`/seccion/${key}`)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 18 }}>
              {subOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSetSub(opt)}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 10,
                    border: opt.toLowerCase() === sub.toLowerCase() ? "2px solid #0b0b1d" : "1px solid #e6e6e6",
                    background: opt.toLowerCase() === sub.toLowerCase() ? "#0b0b1d" : "#fff",
                    color: opt.toLowerCase() === sub.toLowerCase() ? "#fff" : "#111",
                    cursor: "pointer"
                  }}
                >
                  {opt === "todas" || opt === "Todos" ? "Todas" : opt}
                </button>
              ))}
            </div>
          </>
        )}

        <GridCategorias items={items} />
      </main>
    </div>
  );
}
