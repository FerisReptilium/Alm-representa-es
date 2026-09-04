export function Hero() {
  return (
    <section className="heroShell heroFinal" aria-labelledby="hero-title">
      <div className="heroCopy">
        <div className="heroBrandLockup" aria-label="ALM Representações">
          <span className="heroMonogram">ALM</span>
          <span className="heroBrandLine">REPRESENTAÇÕES</span>
          <span className="heroTagline">Beleza que conecta negócios</span>
        </div>
        <p className="eyebrow">ALM REPRESENTAÇÕES · FEBELLA MAKEUP</p>
        <h1 id="hero-title">Beleza que vende. Marca que conecta.</h1>
        <p className="heroText">A ALM conecta a Febella Makeup a clientes, revendedores e oportunidades, com uma experiência digital pensada para descoberta, atendimento e conversão.</p>
        <div className="heroActions">
          <a className="button buttonDark" href="#catalogo">Explorar produtos</a>
          <a className="button buttonGhost" href="#atacado">Falar com a ALM</a>
        </div>
        <div className="heroTrust">
          <span><b>Febella Makeup</b> marca em destaque</span>
          <span><b>Atendimento direto</b> pelo WhatsApp</span>
          <span><b>Beauty AI</b> para orientar escolhas</span>
        </div>
      </div>
      <div className="heroVisual" aria-label="Campanha visual de beleza da ALM Representações">
        <img src="/images/radiant-renewal.webp" alt="Modelo da campanha de beleza da ALM Representações" className="heroImage" />
        <div className="heroRibbon">ALM · BEAUTY · MAKEUP</div>
        <div className="heroVisualBadge"><span>MARCA REPRESENTADA</span><strong>Febella Makeup</strong></div>
      </div>
    </section>
  );
}
