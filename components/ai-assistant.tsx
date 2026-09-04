"use client";

import { useState } from "react";

export function AiAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`aiAssistant ${open ? "open" : ""}`}>
      {open && (
        <div className="aiPanel" role="dialog" aria-label="Beauty Assistant">
          <div className="aiPanelHead">
            <div><span className="aiSpark">✦</span><strong>Beauty Assistant</strong><small>Consultora virtual ALM</small></div>
            <button onClick={() => setOpen(false)} aria-label="Fechar assistente">×</button>
          </div>
          <div className="aiMessage">Olá! Posso ajudar você a conhecer os produtos Febella por categoria, efeito desejado ou faixa de preço.</div>
          <div className="aiSuggestions"><button>Quero efeito glow</button><button>Produtos para lábios</button><button>Mais vendidos</button></div>
          <div className="aiInput"><span>Escreva sua pergunta...</span><button aria-label="Enviar">↑</button></div>
          <small className="aiDisclaimer">Protótipo visual. A IA será conectada ao catálogo real por backend seguro.</small>
        </div>
      )}
      <button className="aiFab" onClick={() => setOpen(!open)} aria-label="Abrir Beauty Assistant"><span>✦</span><span className="aiFabText">Beauty AI</span></button>
    </div>
  );
}
