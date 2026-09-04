"use client";

import { useState } from "react";

export function AiAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`aiAssistant ${open ? "open" : ""}`}>
      {open && (
        <div className="aiPanel" role="dialog" aria-label="Beauty Assistant">
          <div className="aiPanelHead">
            <div><span className="aiSpark">✦</span><strong>Beauty Assistant</strong><small>Consultora virtual</small></div>
            <button onClick={() => setOpen(false)} aria-label="Fechar assistente">×</button>
          </div>
          <div className="aiMessage">Olá! Posso ajudar você a encontrar produtos por necessidade, ingrediente ou faixa de preço.</div>
          <div className="aiSuggestions"><button>Pele oleosa</button><button>Hidratação</button><button>Até R$ 100</button></div>
          <div className="aiInput"><span>Escreva sua pergunta...</span><button aria-label="Enviar">↑</button></div>
          <small className="aiDisclaimer">Protótipo visual. A IA será conectada ao catálogo real por backend seguro.</small>
        </div>
      )}
      <button className="aiFab" onClick={() => setOpen(!open)} aria-label="Abrir Beauty Assistant"><span>✦</span><span className="aiFabText">Beauty AI</span></button>
    </div>
  );
}
