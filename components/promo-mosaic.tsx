const promos = [
  {
    eyebrow: "FEBELLA HIGHLIGHTS",
    title: "Destaques da marca",
    copy: "Uma vitrine para best sellers, lançamentos e produtos de maior apelo comercial.",
    cta: "Ver destaques",
    className: "promoTile promoTileBlush",
  },
  {
    eyebrow: "MAKEUP EDIT",
    title: "Rosto, olhos e lábios",
    copy: "Navegue por categorias e descubra a maquiagem certa para cada ocasião.",
    cta: "Explorar maquiagem",
    className: "promoTile promoTileMist",
  },
  {
    eyebrow: "BEAUTY ASSISTANT",
    title: "Escolher ficou mais fácil.",
    copy: "A Beauty AI será conectada ao catálogo real para orientar sua compra.",
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
            <span className="promoBottle">FEBELLA</span>
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
