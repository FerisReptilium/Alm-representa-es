"use client";

import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/data/home";

const filters = ["Todos", "Rosto", "Olhos", "Lábios", "Preparação"];

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
}

export function ProductCatalog({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    function receiveHeaderSearch(event: Event) {
      const customEvent = event as CustomEvent<{ query?: string }>;
      setQuery(customEvent.detail?.query ?? "");
      setFilter("Todos");
    }

    window.addEventListener("alm:catalog-search", receiveHeaderSearch);
    return () => window.removeEventListener("alm:catalog-search", receiveHeaderSearch);
  }, []);

  const visibleProducts = useMemo(() => {
    const normalizedQuery = normalize(query.trim());
    const normalizedFilter = normalize(filter);

    return products.filter((product) => {
      const searchableText = normalize([
        product.name,
        product.brand,
        product.category,
        product.description,
        ...product.features,
      ].join(" "));
      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);
      const matchesFilter = filter === "Todos" || searchableText.includes(normalizedFilter);
      return matchesQuery && matchesFilter;
    });
  }, [filter, products, query]);

  function clearFilters() {
    setQuery("");
    setFilter("Todos");
  }

  return (
    <div className="catalogExperience">
      <div className="catalogToolbar">
        <label className="catalogSearch">
          <span>Buscar no catálogo</span>
          <div><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Ex.: tint, blush, hidratação..." /></div>
        </label>
        <div className="catalogFilters" aria-label="Filtrar produtos por categoria">
          {filters.map((item) => (
            <button key={item} type="button" className={filter === item ? "isActive" : ""} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        <p className="catalogCount" aria-live="polite">{visibleProducts.length} {visibleProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}</p>
      </div>

      {visibleProducts.length > 0 ? (
        <div className="productGrid">{visibleProducts.map((product) => <ProductCard key={product.name} product={product} />)}</div>
      ) : (
        <div className="catalogEmpty">
          <strong>Nenhum produto encontrado.</strong>
          <p>Tente outro nome, benefício ou categoria.</p>
          <button type="button" onClick={clearFilters}>Limpar busca</button>
        </div>
      )}
    </div>
  );
}
