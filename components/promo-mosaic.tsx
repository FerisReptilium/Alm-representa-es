const promos = [
  {
    eyebrow: "WEEKLY CURATION",
    title: "Seleção da semana",
    copy: "Uma vitrine rotativa para campanhas, lançamentos e destaques da ALM.",
    cta: "Ver curadoria",
    className: "promoTile promoTileBlush",
  },
  {
    eyebrow: "SKINCARE EDIT",
    title: "Proteção + glow",
    copy: "Descubra produtos por necessidade, textura e etapa da rotina.",
    cta: "Explorar skincare",
    className: "promoTile promoTileMist",
  },
  {
    eyebrow: "BEAUTY ASSISTANT",
    title: "Sua rotina, mais simples.",
    copy: "A Beauty AI vai usar o catálogo real para orientar sua escolha.",
    cta: "Conhecer a assistente",
    className: "promoTile promoTileInk",
  },
];

export function PromoMosaic() {
  return (
    <section className="promoMosaic" aria-label="Destaques da ALM">
      {promos.map((promo, index) => (
        <a className={promo.className} href={index === 2 ? "#rotina" : "#catalogo"} key={promo.title}>
          <div className="promoTopline">
            <span>{promo.eyebrow}</span>
            <em>0{index + 1}</em>
          </div>
          <div className="promoArtwork" aria-hidden="true">
            <span className="promoOrb" />
            <span className="promoBottle">ALM</span>
          </div>
          <div className="promoCopy">
            <h3>{promo.title}</h3>
            <p>{promo.copy}</p>
            <span className="promoCta">{promo.cta} →</span>
          </div>
        </a>
      ))}
    </section>
  );
}
