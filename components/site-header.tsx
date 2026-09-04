"use client";

import { useState } from "react";

const navigation = ["Novidades", "Mais vendidos", "Skincare", "Maquiagem", "Cabelo & Corpo", "Marcas", "Necessidades", "Ofertas"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="announcement">
        <span>Frete estimado pelo CEP</span><span className="announcementDot">•</span><span>Atendimento pelo WhatsApp</span><span className="announcementDot">•</span><span>Curadoria K-Beauty</span>
      </div>
      <header className="siteHeader">
        <div className="headerMain container">
          <button className="iconButton menuButton" aria-label="Abrir menu" onClick={() => setOpen(true)}><span></span><span></span></button>
          <a className="brand" href="#" aria-label="Página inicial"><span className="brandMain">ALM</span><span className="brandSub">REPRESENTAÇÕES · K-BEAUTY</span></a>
          <label className="searchBox"><span className="searchIcon">⌕</span><input type="search" placeholder="Buscar produtos, marcas, ingredientes..." aria-label="Buscar" /></label>
          <div className="headerActions"><button className="iconButton" aria-label="Minha conta">♡</button><button className="iconButton cartButton" aria-label="Carrinho">Bag<span className="cartCount">0</span></button></div>
        </div>
        <nav className="desktopNav container" aria-label="Navegação principal">{navigation.map((item) => <a key={item} href="#catalogo">{item}</a>)}</nav>
      </header>
      <div className={`mobileDrawer ${open ? "isOpen" : ""}`} aria-hidden={!open}>
        <button className="drawerBackdrop" aria-label="Fechar menu" onClick={() => setOpen(false)} />
        <aside className="drawerPanel">
          <div className="drawerHeader"><strong>Menu</strong><button className="iconButton" onClick={() => setOpen(false)} aria-label="Fechar">×</button></div>
          <label className="searchBox mobileSearch"><span className="searchIcon">⌕</span><input type="search" placeholder="O que você procura?" aria-label="Buscar" /></label>
          <nav className="drawerNav">{navigation.map((item) => <a key={item} href="#catalogo" onClick={() => setOpen(false)}>{item}<span>›</span></a>)}</nav>
          <div className="drawerService">Atendimento humano pelo WhatsApp</div>
        </aside>
      </div>
    </>
  );
}
