import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { PromoMosaic } from "@/components/promo-mosaic";
import { ProductCard } from "@/components/product-card";
import { AiAssistant } from "@/components/ai-assistant";
import { brands, categories, needs, products } from "@/data/home";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <div className="container pageStack">
        <Hero />

        <section className="benefitStrip" aria-label="Benefícios">
          <div><span>01</span><p><b>Curadoria especializada</b><small>Seleção pensada para sua rotina.</small></p></div>
          <div><span>02</span><p><b>Frete pelo CEP</b><small>Estimativa local e nacional.</small></p></div>
          <div><span>03</span><p><b>Atendimento humano</b><small>Finalize também pelo WhatsApp.</small></p></div>
          <div><span>04</span><p><b>Beauty AI</b><small>Descubra o produto ideal.</small></p></div>
        </section>

        <PromoMosaic />

        <section className="sectionBlock" id="catalogo">
          <div className="sectionHeading splitHeading">
            <div><p className="eyebrow">EXPLORE</p><h2>Compre por categoria</h2></div>
            <a href="#">Ver todas <span>→</span></a>
          </div>
          <div className="categoryGrid">
            {categories.map((category) => (
              <a className="categoryCard" href="#" key={category.name}>
                <span className="categoryIcon">{category.icon}</span>
                <span><b>{category.name}</b><small>{category.subtitle}</small></span>
                <em>↗</em>
              </a>
            ))}
          </div>
        </section>

        <section className="needSection" id="rotina">
          <div className="needCopy">
            <p className="eyebrow">SKIN CONCERNS</p>
            <h2>O que sua pele precisa hoje?</h2>
            <p>Comece pela sua necessidade. Depois, nossa Beauty Assistant ajuda a refinar sua rotina.</p>
          </div>
          <div className="needChips">
            {needs.map((need, index) => <a href="#" key={need}><span>0{index + 1}</span>{need}<em>→</em></a>)}
          </div>
        </section>

        <section className="sectionBlock">
          <div className="sectionHeading splitHeading">
            <div><p className="eyebrow">CURATED FOR YOU</p><h2>Mais desejados</h2></div>
            <a href="#">Ver best sellers <span>→</span></a>
          </div>
          <div className="productGrid">{products.map((product) => <ProductCard key={product.name} product={product} />)}</div>
        </section>

        <section className="campaignGrid">
          <article className="campaignCard campaignSoft"><p className="eyebrow">WEEKLY EDIT</p><h2>Rituais de hidratação</h2><p>Texturas leves para recuperar o viço sem pesar.</p><a href="#">Explorar seleção →</a></article>
          <article className="campaignCard campaignDark"><p className="eyebrow">BEAUTY AI</p><h2>Não sabe qual escolher?</h2><p>Conte o que você procura e receba recomendações baseadas no catálogo.</p><a href="#rotina">Começar agora →</a></article>
          <article className="campaignCard campaignBlush"><p className="eyebrow">NEW IN</p><h2>Novidades de Seul</h2><p>Descubra fórmulas, texturas e tendências recém-chegadas.</p><a href="#">Ver lançamentos →</a></article>
        </section>

        <section className="brandSection">
          <div className="sectionHeading"><p className="eyebrow">BRANDS WE LOVE</p><h2>Marcas em destaque</h2></div>
          <div className="brandRail">{brands.map((brand) => <a href="#" key={brand}>{brand}</a>)}</div>
        </section>

        <section className="newsletter">
          <p className="eyebrow">BEAUTY LETTER</p><h2>Novidades, rituais e ofertas especiais.</h2><p>Uma seleção curta e útil. Sem excesso de mensagens.</p>
          <form><input type="email" placeholder="seuemail@exemplo.com" aria-label="Seu e-mail"/><button type="submit">Quero receber</button></form>
        </section>
      </div>

      <footer className="siteFooter">
        <div className="container footerGrid">
          <div><a className="brand footerBrand" href="#"><span className="brandMain">ALM</span><span className="brandSub">REPRESENTAÇÕES · K-BEAUTY</span></a><p>Curadoria de cosméticos e K-Beauty com experiência digital premium.</p></div>
          <div><strong>Loja</strong><a href="#">Novidades</a><a href="#">Skincare</a><a href="#">Marcas</a><a href="#">Ofertas</a></div>
          <div><strong>Atendimento</strong><a href="#">WhatsApp</a><a href="#">Entrega</a><a href="#">Trocas e devoluções</a><a href="#">FAQ</a></div>
          <div><strong>Institucional</strong><a href="#">Sobre</a><a href="#">Privacidade</a><a href="#">Termos</a><a href="#">Contato</a></div>
        </div>
        <div className="container footerBottom"><span>© 2026 ALM Representações. Conteúdo comercial em validação.</span><span>Brasil · PT-BR</span></div>
      </footer>
      <AiAssistant />
    </main>
  );
}
