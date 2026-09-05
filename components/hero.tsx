export function Hero() {
  return (
    <section className="heroCampaign" aria-labelledby="hero-title">
      <h1 id="hero-title" className="srOnly">ALM Representações — beleza que conecta negócios</h1>
      <div className="heroCampaignMedia">
        <img
          src="/images/alm-hero-blindagem-v2.webp"
          alt="Campanha ALM Representações com modelo da marca e Blindagem 3 em 1 da Febella Makeup"
        />
        <a className="heroCampaignLogo" href="#sobre" aria-label="ALM Representações">
          <img src="/brand/alm-logo.svg" alt="ALM Representações" />
        </a>
      </div>
      <div className="heroCampaignBar">
        <div>
          <span>Campanha em destaque</span>
          <strong>Blindagem 3 em 1 · Febella Makeup</strong>
        </div>
        <p>Produto real, identidade ALM e atendimento comercial em uma única experiência.</p>
        <div className="heroCampaignActions">
          <a className="button buttonDark" href="#destaques">Ver produto</a>
          <a className="button buttonGhost" href="#atacado">Falar com a ALM</a>
        </div>
      </div>
    </section>
  );
}
