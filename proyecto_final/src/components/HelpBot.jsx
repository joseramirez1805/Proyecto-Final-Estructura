import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { rtdb } from "../firebase/config";

export default function HelpBot() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]); // array of { id, label, response }
  const [messages, setMessages] = useState([]); // [{from:'bot'|'user', text}]
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const optsRef = ref(rtdb, "help/options");
    // suscripción en tiempo real
    const unsub = onValue(optsRef, (snap) => {
      const val = snap.val();
      if (!val) {
        setOptions([]);
        setLoading(false);
        return;
      }
      // val puede ser objeto o array
      const arr = Object.keys(val).map((k) => ({ id: k, ...val[k] }));
      setOptions(arr);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const startConversation = (opt) => {
    // usuario selecciona una opción -> mostrar la respuesta guardada
    setMessages((m) => [...m, { from: "user", text: opt.label }]);
    // respuesta puede ser string o array; aquí asumimos string
    const resp = opt.response || opt.answer || "Lo siento, no hay respuesta definida.";
    // simulamos pequeña latencia
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: resp }]);
    }, 300);
  };

  return (
    <>
      <div style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        zIndex: 1400,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 10
      }}>
        {/* Panel (ahora más grande) */}
        {open && (
          <div style={{
            width: 440,
            maxWidth: "calc(100vw - 40px)",
            height: 520,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 18px 40px rgba(2,6,23,0.16)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{ padding: 14, borderBottom: "1px solid #eef2f7", display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <strong>Ayuda / Asistente</strong>
              <div style={{ display:'flex', gap:8 }}>
                <button onClick={() => { setMessages([]); }} title="Limpiar" style={{ background:'transparent', border:'none', cursor:'pointer' }}>Limpiar</button>
                <button onClick={() => setOpen(false)} style={{ background:'transparent', border:'none', cursor:'pointer' }}>Cerrar</button>
              </div>
            </div>

            <div style={{ padding: 14, flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
              {/* Mensajes */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {messages.map((m, idx) => (
                  <div key={idx} style={{ alignSelf: m.from === "bot" ? "flex-start" : "flex-end", maxWidth: "85%" }}>
                    <div style={{
                      background: m.from === "bot" ? "#f1f5f9" : "#0b0b1d",
                      color: m.from === "bot" ? "#0b0b1d" : "#fff",
                      padding: "10px 12px",
                      borderRadius: 12,
                      fontSize: 15
                    }}>{m.text}</div>
                  </div>
                ))}
              </div>

              {/* Opciones */}
              <div style={{ marginTop: "auto" }}>
                <div style={{ fontSize: 13, color: "#64748b", marginBottom: 10 }}>Selecciona una opción:</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {loading && <div style={{ color:'#64748b' }}>Cargando...</div>}
                  {!loading && options.length === 0 && <div style={{ color:'#64748b' }}>No hay opciones configuradas.</div>}
                  {options.map((opt) => (
                    <button key={opt.id} onClick={() => startConversation(opt)} style={{
                      padding: "10px 12px",
                      borderRadius: 999,
                      border: "1px solid #e6e6e6",
                      background: "#fff",
                      cursor: "pointer",
                      fontSize: 14
                    }}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Floating button */}
        <button
          aria-label="Abrir ayuda"
          title="Ayuda"
          onClick={() => setOpen((v) => !v)}
          style={{
            width: 60,
            height: 60,
            borderRadius: 999,
            background: "#0b0b1d",
            color: "#fff",
            border: "none",
            boxShadow: "0 10px 28px rgba(11,11,29,0.28)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
          }}
        >
          ?
        </button>
      </div>
    </>
  );
}
