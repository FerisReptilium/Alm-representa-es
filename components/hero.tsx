export function Hero() {
  return (
    <section className="heroShell" aria-labelledby="hero-title">
      <div className="heroCopy">
        <p className="eyebrow">ALM REPRESENTAÇÕES · FEBELLA MAKEUP</p>
        <h1 id="hero-title">Maquiagem para destacar cada versão de você.</h1>
        <p className="heroText">A ALM representa a Febella Makeup com uma experiência digital pensada para descobrir novidades, montar seu pedido e falar direto com o atendimento.</p>
        <div className="heroActions">
          <a className="button buttonDark" href="#febella">Conhecer Febella</a>
          <a className="button buttonGhost" href="#catalogo">Ver produtos</a>
        </div>
        <div className="heroTrust">
          <span><b>Febella Makeup</b> marca representada pela ALM</span>
          <span><b>Beauty AI</b> para ajudar na escolha</span>
        </div>
      </div>
      <div className="heroVisual" aria-label="Campanha visual ALM Representações">
        <img src="/images/radiant-renewal.webp" alt="Modelo da campanha de beleza da ALM Representações" className="heroImage" />
        <div className="heroVisualBadge"><span>FEATURED BRAND</span><strong>Febella Makeup</strong></div>
      </div>
    </section>
  );
}
