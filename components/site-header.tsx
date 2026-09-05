"use client";

import { useState } from "react";

const navigation = ["Febella Makeup", "Rosto", "Olhos", "Lábios", "Preparação", "Cabelo & Corpo", "Mais vendidos", "Ofertas"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="announcement">
        <span>ALM Representações · Febella Makeup</span><span className="announcementDot">•</span><span>Frete estimado pelo CEP</span><span className="announcementDot">•</span><span>Atendimento pelo WhatsApp</span>
      </div>
      <header className="siteHeader">
        <div className="headerMain container">
          <button className="iconButton menuButton" aria-label="Abrir menu" onClick={() => setOpen(true)}><span></span><span></span></button>
          <a className="brand brandWithLogo" href="#" aria-label="Página inicial ALM Representações">
            <img src="/brand/alm-logo-horizontal.png" alt="ALM Representações" className="brandLogo" />
          </a>
          <label className="searchBox"><span className="searchIcon">⌕</span><input type="search" placeholder="Buscar produtos, categorias, linhas..." aria-label="Buscar" /></label>
          <div className="headerActions"><button className="iconButton" aria-label="Favoritos">♡</button><button className="iconButton cartButton" aria-label="Carrinho">Bag<span className="cartCount">0</span></button></div>
        </div>
        <nav className="desktopNav container" aria-label="Navegação principal">{navigation.map((item) => <a key={item} href={item === "Febella Makeup" ? "#febella" : "#catalogo"}>{item}</a>)}</nav>
      </header>
      <div className={`mobileDrawer ${open ? "isOpen" : ""}`} aria-hidden={!open}>
        <button className="drawerBackdrop" aria-label="Fechar menu" onClick={() => setOpen(false)} />
        <aside className="drawerPanel">
          <div className="drawerHeader"><img src="/brand/alm-logo-oficial.png" alt="ALM Representações" className="drawerLogo"/><button className="iconButton" onClick={() => setOpen(false)} aria-label="Fechar">×</button></div>
          <label className="searchBox mobileSearch"><span className="searchIcon">⌕</span><input type="search" placeholder="O que você procura?" aria-label="Buscar" /></label>
          <nav className="drawerNav">{navigation.map((item) => <a key={item} href={item === "Febella Makeup" ? "#febella" : "#catalogo"} onClick={() => setOpen(false)}>{item}<span>›</span></a>)}</nav>
          <div className="drawerService">Beauty, makeup e oportunidades comerciais.</div>
        </aside>
      </div>
    </>
  );
}
