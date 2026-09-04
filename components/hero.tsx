export function Hero() {
  return (
    <section className="heroShell heroFinal" aria-labelledby="hero-title">
      <div className="heroCopy">
        <div className="heroBrandLockup">
          <img src="/brand/alm-logo.svg" alt="ALM Representações" className="heroAlmLogo" />
        </div>
        <p className="eyebrow">ALM REPRESENTAÇÕES · BEAUTY & MAKEUP</p>
        <h1 id="hero-title">Beleza que conecta negócios.</h1>
        <p className="heroText">Descubra os destaques da Febella Makeup com a curadoria e o atendimento comercial da ALM Representações.</p>
        <div className="heroActions">
          <a className="button buttonDark" href="#febella">Conhecer Febella</a>
          <a className="button buttonGhost" href="#catalogo">Explorar produtos</a>
        </div>
        <div className="heroTrust">
          <span><b>Curadoria comercial</b> produtos, linhas e campanhas organizados</span>
          <span><b>Beauty AI</b> orientação rápida dentro do catálogo</span>
        </div>
      </div>
      <div className="heroVisual heroVisualFinal" aria-label="Campanha visual da ALM Representações">
        <img src="/images/alm-modelo-radiant-renewal.webp" alt="Modelo da campanha de beleza da ALM Representações" className="heroImage" />
        <div className="heroFebellaCard">
          <img src="/brand/febella-wordmark.svg" alt="Febella Makeup" />
          <span>Representada pela ALM</span>
        </div>
        <span className="heroRibbon">BEAUTY · MAKEUP · REPRESENTAÇÕES</span>
      </div>
    </section>
  );
}
