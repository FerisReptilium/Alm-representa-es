"use client";

import { FormEvent, useState } from "react";

type Address = {
  cep: string;
  localidade: string;
  uf: string;
  estado?: string;
  erro?: boolean;
};

function formatCep(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  return digits.length > 5 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits;
}

export function ShippingCalculator() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<Address | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const digits = cep.replace(/\D/g, "");

    setAddress(null);
    setMessage("");

    if (digits.length !== 8) {
      setStatus("error");
      setMessage("Digite um CEP com 8 números.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
      if (!response.ok) throw new Error("Falha na consulta");

      const result = (await response.json()) as Address;
      if (result.erro) {
        setStatus("error");
        setMessage("CEP não encontrado. Confira os números e tente novamente.");
        return;
      }

      setAddress(result);
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Não foi possível consultar o CEP agora. Tente novamente em instantes.");
    }
  }

  return (
    <article className="servicePanel shippingPanel" id="entrega">
      <span className="serviceNo">01</span>
      <strong>Consulte a entrega pelo CEP</strong>
      <p>Informe o destino para confirmar a cidade atendida. Valores e prazos serão exibidos quando a tabela comercial de frete estiver conectada.</p>

      <form className="shippingForm" onSubmit={handleSubmit} noValidate>
        <label htmlFor="shipping-cep">CEP de entrega</label>
        <div className="shippingField">
          <input
            id="shipping-cep"
            name="cep"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            placeholder="00000-000"
            value={cep}
            onChange={(event) => {
              setCep(formatCep(event.target.value));
              if (status !== "idle") {
                setStatus("idle");
                setAddress(null);
                setMessage("");
              }
            }}
            aria-describedby="shipping-feedback shipping-note"
          />
          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Consultando…" : "Consultar"}
          </button>
        </div>
      </form>

      <div id="shipping-feedback" className={`shippingFeedback ${status}`} aria-live="polite">
        {status === "success" && address && (
          <>
            <span aria-hidden="true">✓</span>
            <div>
              <b>{address.localidade} · {address.uf}</b>
              <small>Destino localizado. A equipe ALM confirmará prazo e valor no atendimento.</small>
            </div>
          </>
        )}
        {status === "error" && <><span aria-hidden="true">!</span><small>{message}</small></>}
      </div>

      <small className="shippingNote" id="shipping-note">A consulta do CEP não realiza pedido nem coleta seu endereço completo.</small>
    </article>
  );
}
