export function Hero() {
  return (
    <section className="heroShell" aria-labelledby="hero-title">
      <div className="heroCopy">
        <p className="eyebrow">K-BEAUTY ESSENTIALS · 2026</p>
        <h1 id="hero-title">Sua rotina começa com o cuidado certo.</h1>
        <p className="heroText">Curadoria de skincare com tecnologia, leveza e rituais de beleza inspirados na Coreia.</p>
        <div className="heroActions">
          <a className="button buttonDark" href="#catalogo">Descobrir produtos</a>
          <a className="button buttonGhost" href="#rotina">Montar minha rotina</a>
        </div>
        <div className="heroTrust">
          <span><b>100%</b> curadoria especializada</span>
          <span><b>Beauty AI</b> para ajudar na escolha</span>
        </div>
      </div>
      <div className="heroVisual" aria-label="Campanha Radiant Renewal">
        <img src="/images/radiant-renewal.webp" alt="Modelo da campanha Radiant Renewal de skincare" className="heroImage" />
        <div className="heroVisualBadge"><span>EDITOR&apos;S PICK</span><strong>Radiant Renewal</strong></div>
      </div>
    </section>
  );
}
